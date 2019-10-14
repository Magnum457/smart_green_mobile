// libs
import React, { useState, useEffect } from 'react'
import { StatusBar, Text, TouchableHighlight, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-community/async-storage'

// style
import { 
    Container,
    Logo,
    Header,
    Greetings,
    LogoutButton,
    LogoutText,
    Content,
    AddView,
    AddButton,
    AddContainer,
    AddCard,
    AddCardHeader,
    AddCardContent,
    AddCardLabel,
    AddInput,
    AddCardSelect,
    AddCardFooter,
    List,
    ItemList,
    ItemText,
    ItemView,
    ItemHeader,
    ItemHeaderText,
    ItemLabel,
    ItemFooter,
    SendButton,
    DeleteButton,
    SendContainer,
    DeleteContainer,
    ContainerContent,
    SimButton,
    NaoButton
} from './styles'

// services
import api from '../../services/api'
import getRealm from '../../services/realm'

//functional component
export default function main({ navigation }) {
    // state
    const [ fazenda, setFazenda ] = useState('')
    const [ campo, setCampo ] = useState('')
    const [ ponto, setPonto ] = useState(1)
    const [ profundidade, setProfundidade ] = useState(1)
    const [ umidade, setUmidade ] = useState('')
    const [ user, setUser ] = useState('')
    const [ addCard, setAddCard ] = useState(false)
    const [ sendCard, setSendCard ] = useState(false)
    const [ deleteCard, setDeleteCard ] = useState(false)
    const [ sucessMessage, setSucess ] = useState('')
    const [ errorMessage, setError ] = useState('')
    const [ data, setData] = useState([])
    const [ item, setItem ] = useState([])

    // recupera os cards
    async function loadData() {
        const realm = await getRealm()

        const data = realm.objects('Soil')

        // console.log(data[1].fazenda)
        if(data.length !== 0) {
            setData(data)
        } else {
            setError('Sem dados')
        }
    }

    // effects
    useEffect(() => {
        // recupera o usuario logado
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
        loadData()
    }, [])

    // handlers
    async function handleLogout() {
        await AsyncStorage.clear()

        navigation.navigate('signIn')
    }

    function handleAddCard() {
        setAddCard(true)
    }

    function handleSendCard({ item }) {
        setItem(item)
        setSendCard(true)
    }

    function handleDeleteCard({ item }) {
        setItem(item)
        setDeleteCard(true)
    }
    
    function handleCloseCard() {
        setAddCard(false)
        setDeleteCard(false)
        setSendCard(false)
        setItem([])
    }

    async function handleCreateCard() {
        try{
            if(fazenda.length === 0 && campo.length === 0 && ponto <= 0 && profundidade <= 0 && umidade <= 0){
                setError("Preencha todos os campos")
                return errorMessage
            }

            const data = {
                id: Math.random()*1000,
                fazenda: fazenda,
                campo: campo,
                ponto: ponto,
                profundidade: profundidade,
                umidade: Number(umidade)
            }

            const realm = await getRealm()

            realm.write(() => {
                realm.create('Soil', data, 'modified')
            })

            setFazenda('')
            setCampo('')
            setUmidade('')
            setSucess('Card adicionado')
            Keyboard.dismiss()

            return data

        } catch (err) {
            setError(err.message)
        }
    }

    async function handleDropCard() {
        try{
            const realm = await getRealm()

            const datas = realm.objects('Soil')

            let card = datas.filtered(`campo = "${item.campo}"`)

            setError(card.id)

            setItem([])
        } catch(err) {
            setError(err.message)
        }
    }

    async function handleSendingCard() {
        try{
            console.log(item)
        } catch(err) {
            setError(err.message)
        }
    }

    // render
    return (
        <Container>
            <StatusBar hidden />
            {/* cabeçalho */}
                <Logo>Smart Green</Logo>
                <Header>
                    <Greetings>Bem Vindo { user }</Greetings>
                    <LogoutButton onPress={handleLogout}>
                        <LogoutText>Sair</LogoutText>
                    </LogoutButton>
                </Header>

            {/* conteúdo */}
                <Content>

                    { data.length === 0
                        ? <Text>{errorMessage}</Text>
                        : (
                            <List 
                                keyboardShouldPersistTaps="handled"
                                data={data}
                                keyExtractor={item => String(item.id)}
                                renderItem={({ item }) => (
                                    <ItemList data={item}>
                                        <ItemHeader>
                                            <ItemHeaderText>Dados</ItemHeaderText>
                                        </ItemHeader>
                                        <ItemView>
                                            <ItemLabel>Fazenda:</ItemLabel>
                                            <ItemText>{item.fazenda}</ItemText>
                                        </ItemView>
                                        <ItemView>
                                            <ItemLabel>campo:</ItemLabel>
                                            <ItemText>{item.campo}</ItemText>
                                        </ItemView>
                                        <ItemView>
                                            <ItemLabel>Ponto de monitoramento:</ItemLabel>
                                            <ItemText>{item.ponto}</ItemText>
                                        </ItemView>
                                        <ItemView>
                                            <ItemLabel>Profundidade:</ItemLabel>
                                            <ItemText>{item.profundidade}</ItemText>
                                        </ItemView>
                                        <ItemView>
                                            <ItemLabel>Umidade:</ItemLabel>
                                            <ItemText>{item.umidade}</ItemText>
                                        </ItemView>
                                        <ItemFooter>
                                            <SendButton onPress={() => handleSendCard({item})}>
                                                <Icon name="eject" size={30} />
                                            </SendButton>
                                            <DeleteButton onPress={() => handleDeleteCard({item})}>
                                                <Icon name="delete" size={30} />
                                            </DeleteButton>
                                        </ItemFooter>
                                    </ItemList>
                                  )}
                            />
                        )
                    }
                    
                </Content>
                
                {/* botão para adicionar um card */}
                <AddView>
                        <AddButton onPress={handleAddCard}>
                            <Icon name="add" size={30} />
                        </AddButton>
                </AddView>

                {/* tela para adicionar o card */}
                {
                    addCard && (
                        <AddContainer>

                            <AddCard>
                                <AddCardHeader>
                                    <Text>Adicionar Card</Text>
                                    <TouchableHighlight onPress={handleCloseCard}>
                                        <Icon name="close" size={20} />
                                    </TouchableHighlight>
                                </AddCardHeader>

                                <AddCardContent>
                                    <AddCardLabel>Fazenda</AddCardLabel>
                                    <AddInput 
                                        value={fazenda}
                                        onChangeText={setFazenda}
                                    />

                                    <AddCardLabel>Campo</AddCardLabel>
                                    <AddInput 
                                        value={campo}
                                        onChangeText={setCampo}
                                    />

                                    <AddCardLabel>Ponto de Monitoramento</AddCardLabel>
                                    <AddCardSelect
                                        selectedValue={ponto}
                                        onValueChange={(itemValue) => setPonto(itemValue)}
                                    >
                                        <AddCardSelect.Item label="1" value={1} />
                                        <AddCardSelect.Item label="2" value={2} />
                                        <AddCardSelect.Item label="3" value={3} />
                                    </AddCardSelect>

                                    <AddCardLabel>Profundidade</AddCardLabel>
                                    <AddCardSelect
                                        selectedValue={profundidade}
                                        onValueChange={(itemValue) => setProfundidade(itemValue)}
                                    >
                                        <AddCardSelect.Item label="1" value={1} />
                                        <AddCardSelect.Item label="2" value={2} />
                                        <AddCardSelect.Item label="3" value={3} />
                                    </AddCardSelect>

                                    <AddCardLabel>Umidade</AddCardLabel>
                                    <AddInput 
                                        value={umidade}
                                        onChangeText={setUmidade}
                                    />

                                    { sucessMessage.length !== 0 && <Text>{sucessMessage}</Text> }
                                </AddCardContent>

                                <AddCardFooter>
                                    <TouchableHighlight onPress={handleCreateCard}>
                                        <Icon name="save" size={30} />
                                    </TouchableHighlight>
                                </AddCardFooter>
                            </AddCard>
   
                        </AddContainer>
                    )
                }

                {/* modal de enviar os dados */}
                {
                   sendCard && (
                   <SendContainer>
                       <ContainerContent>
                        <Text>Deseja enviar este card?</Text>
                        <SimButton>
                            <Text>Sim</Text>
                        </SimButton>
                        <NaoButton onPress={handleCloseCard}>
                            <Text>Não</Text>
                        </NaoButton>
                        </ContainerContent>
                    </SendContainer>)
                }

                {/* modal de deletar os dados */}
                {
                   deleteCard && (
                   <DeleteContainer>
                       <ContainerContent>
                        <Text>Deseja deletar este card?</Text>
                        <SimButton onPress={handleDropCard}>
                            <Text>Sim</Text>
                        </SimButton>
                        <NaoButton onPress={handleCloseCard}>
                            <Text>Não</Text>
                        </NaoButton>
                        { (errorMessage.length !== 0 ) && (<Text> {errorMessage} </Text>) }
                        </ContainerContent>
                    </DeleteContainer>)
                }
        </Container>
    )
}