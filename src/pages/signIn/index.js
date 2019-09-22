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
    SignUpLink,
    SignUpText,
    ErrorMessage
} from './styles'

// img

// services
import api from '../../services/api'

// functional component
export default function signIn({ navigation }) {
    // state
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    // effects
    useEffect(() => {
        async function recuperaUser() {
            AsyncStorage.getItem('smartGreen:token').then(token => {
                if(token) {
                    navigation.navigate('main', { token })
                }
            })
        }

        recuperaUser()
    })

    // handlers
    async function handleSignIn(){
        if (login.length === 0 || senha.length === 0) {
            setError('Preencha o Login e a Senha!')
        } else {
            try{
                console.log('teste')
                // recuperação dos dados
                const response = await api.post('/auth', {
                    login,
                    senha
                })

                if(!response) {
                    setError('Dados Inválidos')
                }

                const { token, user } = response.data

                // guarda do token no AsyncStorage
                await AsyncStorage.setItem('smartGreen:token', token)
                await AsyncStorage.setItem('user', user.nome)

                // redirecionamento para a página Main
                navigation.navigate('main')
            } catch(err) {
                console.log(err)
                setError('Erro ao recuperar os usuarios')
            }
        }
    }

    function handleSignUp(){
        navigation.navigate('signUp')
    }

    // render
    return (
        <Container>
            <StatusBar hidden />
            <Input 
                placeholder="Digite seu Login"
                placeholderTextColor='#999'
                value={login}
                onChangeText={setLogin}
                autoCorrect={false}
                autoCapitalize="none"
            />
            <Input 
                placeholder="Digite a sua senha"
                placeholderTextColor="#999"
                value={senha}
                onChangeText={setSenha}
                autoCorrect={false}
                autoCapitalize="none"
            />
            { error.length !== 0 && (<ErrorMessage> {error} </ErrorMessage>) }
            <Button onPress={handleSignIn}>
                <ButtonText>Logar</ButtonText>
            </Button>
            <SignUpLink onPress={handleSignUp}>
                <SignUpText>Cadastrar</SignUpText>
            </SignUpLink>
        </Container>
    )
}