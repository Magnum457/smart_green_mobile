// libs
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

// style
import {
    Container,
    Input,
    Button,
    ButtonText,
    SignInLink,
    SignInText,
    ErrorMessage,
    SucessMessage
} from './styles'

// img

// services
import api from '../../services/api'

// functional component
export default function signUp({ navigation }) {
    // state
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [error, setError] = useState('')
    const [sucess, setSucess] = useState('')

    // effects
    useEffect(() => {
        async function recuperaUser() {
            AsyncStorage.getItem('smartGreen:token').then(token => {
                if(token) {
                    navigation.navigate('main', { user })
                }
            })
        }

        recuperaUser()
    })

    // handlers
    async function handleSignIn() {
        navigation.navigate('signIn')
    }

    async function handleSignUp() {
        if(login.length === 0 || senha.length === 0 || nome.length === 0) {
            setError('Preencha todos os dados pedidos')
        } else {
            try{
                // envio dos dados
                const response = await api.post('/users', {
                    login,
                    senha,
                    email
                })
                const { user } = response.data

                if(user) {
                    setSucess(`O usuario ${user.nome} foi inserido como sucesso`)
                } else {
                    setError('Erro ao inserir')
                }

            } catch(err) {
                setError('Erro ao enviar os dados')
            }
        }
    }

    // render
    return(
        <Container>
            <StatusBar hidden />
            { sucess.length !== 0 && ( <SucessMessage>{ sucess }</SucessMessage> ) }
            <Input 
                placeholder="Digite o seu Login"
                placeholderTextColor='#999'
                value={login}
                onChangeText={setLogin}
                autoCorrect={false}
                autoCapitalize="none"
            />
            <Input 
                placeholder="Digite a sua senha"
                placeholderTextColor='#999'
                value={senha}
                onChangeText={setSenha}
                autoCorrect={false}
                autoCapitalize="none"
            />
            <Input 
                placeholder="Digite o seu nome"
                placeholderTextColor='#999'
                value={nome}
                onChangeText={setNome}
                autoCorrect={false}
                autoCapitalize="none"
            />
            { (error.length !== 0 ) && (<ErrorMessage> {error} </ErrorMessage>) }
            <Button onPress={handleSignUp}>
                <ButtonText>Cadastrar</ButtonText>
            </Button>
            <SignInLink onPress={handleSignIn}>
                <SignInText>Voltar ao Login</SignInText>
            </SignInLink>
        </Container>
    )
}