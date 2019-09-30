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
import firebase from 'react-native-firebase'

// functional component
export default function signUp({ navigation }) {
    // state
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
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
        if(email.length === 0 || senha.length === 0) {
            setError('Preencha todos os dados pedidos')
        } else {
            try{
                // cadastro na API local
                    // const response = await api.post('/users', {
                    //     login,
                    //     senha,
                    //     email
                    // })
                    // const { user } = response.data

                    // if(user) {
                    //     setSucess(`O usuario ${user.email} foi inserido como sucesso`)
                    // } else {
                    //     setError('Erro ao inserir')
                    // }

                // cadastro na API do Firebase
                    const response = await firebase.auth()
                                             .createUserWithEmailAndPassword(email, senha)

                    {  }

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
                placeholder="Digite o seu email"
                placeholderTextColor='#999'
                value={email}
                onChangeText={setEmail}
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