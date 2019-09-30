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
import firebase from 'react-native-firebase'

// functional component
export default function signIn({ navigation }) {
    // state
    const [email, setEmail] = useState('')
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
        if (email.length === 0 || senha.length === 0) {
            setError('Preencha o Email e a Senha!')
        } else {
            try{
                // recuperação dos dados pela API Local
                    // const response = await api.post('/auth', {
                    //     login,
                    //     senha
                    // })

                    // if(!response) {
                    //     setError('Dados Inválidos')
                    // }

                    // const { token, user } = response.data

                // recuperação dos dados pela API do Firebase
                    const response = await firebase.auth()
                                             .signInWithEmailAndPassword(email, senha)

                    if (response){
                        console.log(response)

                        const email = response.user._user.email
                        const token = response.user._user.uid

                        await AsyncStorage.setItem('smartGreen:token', token)
                        await AsyncStorage.setItem('user', email)

                        navigation.navigate('main', { email })
                    } else {
                        setError('Erro ao recuperar os dados')
                    }
 
                // guarda do token no AsyncStorage
                //await AsyncStorage.setItem('smartGreen:token', token)
                //await AsyncStorage.setItem('user', user.nome)

                // redirecionamento para a página Main
                //navigation.navigate('main')
            } catch(err) {
                setError(err.message)
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
                placeholder="Digite o seu email"
                placeholderTextColor='#999'
                value={email}
                onChangeText={setEmail}
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