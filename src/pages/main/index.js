// libs
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

// style
import { 
    Container,
    Header,
    HeaderText,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    Label,
    Input,
    Select,
    CardFooter,
    Date,
    ButtonField,
    Button,
    ButtonText,
    SucessMessage,
    ErrorMessage,
    SendButton,
    CancelButton
} from './styles'

// services
import api from '../../services/api'

//functional component
export default function main({ navigation }) {
    // state
    [ fazenda, setFazenda ] = useState('')
    [ campo, setCampo ] = useState('')
    [ ponto, setPonto ] = useState('')
    [ profundidade, setProfundidade ] = useState('')
    [ umidade, setUmidade ] = useState('')
    [ user, setUser ] = useState('')
    [ sucessMessage, setSucess ] = useState('')
    [ errorMessage, setError ] = useState('')

    // effects
    useEffect(() => {
        async function recuperaUser() {
            AsyncStorage.getItem('smartGreen:token').then(token => {
                if(!token) {
                    navigation.navigate('login')
                } else {
                    AsyncStorage.getItem('user').then(user => {
                        if(user) {
                            setUser(user)
                        }
                    })
                }
            })
        }

        recuperaUser()
    })

    // handlers

    // render
    return (
        <Container>
            <StatusBar hidden />
            <Header>
                <HeaderText>Bem vindo { user.nome }</HeaderText>
            </Header>

            <Card>
                <CardHeader>
                    <CardTitle> Dados do Solo </CardTitle>
                </CardHeader>

                <CardContent>
                    <Label>Fazenda</Label>
                    <Input></Input>
                    <Label>Campo</Label>
                    <Input></Input>
                    <Label>Ponto de Monitoramento</Label>
                    <Select></Select>
                    <Label>Profundidade</Label>
                    <Select></Select>
                    <Label>Umidade</Label>
                    <Select></Select>
                </CardContent>

                <CardFooter>
                    <Date></Date>
                </CardFooter>
            </Card>
            <ButtonField>
                <SendButton>
                    <ButtonText>Enviar dados</ButtonText>
                </SendButton>
                <CancelButton>
                    <ButtonText>Excluir</ButtonText>
                </CancelButton>
            </ButtonField>
        </Container>
    )
}