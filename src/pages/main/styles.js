// libs
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

// components
    // div principal
    export const Container = styled(LinearGradient).attrs({
        colors: ['#228B22', '#deb887'],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
    })`
        flex: 1;
        align-items: center;
        align-self: auto;
    `;

    // cabeçalho
    export const Logo = styled.Text`
        font-size: 20px;
        margin-top:18px;
        font-weight: bold;
    `

    export const Header = styled.View`
        margin-top: 20px;
        width: 80%;
        height: 10%;
        color: #fff;
        flex-direction: row;
        justify-content: space-between;
    `

    export const Greetings = styled.Text`
        font-size: 12px;
        font-weight: bold;
        font-style: italic;
    `

    export const LogoutButton = styled.TouchableOpacity`
        justify-content: center;
        align-items: center;
    `

    export const LogoutText = styled.Text`
        font-size: 12px;
        font-style: italic;
    `

    // Lista de cards
    export const Content = styled.ScrollView`
        z-index: 1;
        align-self: stretch;
        background-color: #FFF;
        padding: 2% 5%;
    `

    export const List = styled.FlatList.attrs({
        showsVerticalScrollIndicator: false
    })`
        margin-top: 10px;
    `

    export const ItemList = styled.View`
        border-radius: 4px;
        background: #eee;
        margin-bottom: 15px;
        padding: 5px;
    `

    export const ItemView = styled.View`
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

    `

    export const ItemLabel = styled.Text`
        font-size: 14px;
        font-weight: bold;
        color: #333;
    `

    export const ItemText = styled.Text`
        font-size: 14px;
        color: #999;
    `

    // Botão para adicionar Cards
    export const AddView = styled.View`
        position: absolute;
        top: 90%;
        left:80%;
        z-index: 2;
        width: 10%;
        justify-content: center;
        align-items: center;
        background-color: #ccc;
        border-radius: 15px;
    `

    export const AddButton = styled.TouchableOpacity`
        border-radius: 15px;
        align-items: center;
        justify-content: center;
    `

    // Container para adicionar os cards
    export const AddContainer = styled.View`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        justify-content: center;
        align-items: center;
    `

    export const AddCard = styled.View`
        background-color: #fff;
        width: 80%;
        align-self: auto;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
    `

    export const AddCardHeader = styled.View`
        background-color: #ddd;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        border-radius: 5px;
        padding: 5px;
    `

    export const AddCardContent = styled.View`
        background-color: transparent;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        margin-left: 3px;
        margin-right: 3px;
        margin-bottom: 5px;
    `

    export const AddCardLabel = styled.Text`
        font-size: 14px;
        font-weight: bold;
        color: #333;
    `

    export const AddInput = styled.TextInput`
        padding: 5px;
        border: solid 1px #777;
        border-radius: 5px;
        align-self: stretch;
        align-items: center;
        font-size: 13px;
    `

    export const AddCardSelect = styled.Picker`
        padding: 5px;
        border: solid 1px #777;
        border-radius: 5px;
        align-self: stretch;
        align-items: center;
        text-align: right;
    `

    export const AddCardFooter = styled.View`
        padding: 5px;
        margin-top: 5px;
        align-items: center;
        justify-content: center;
        align-self: stretch;
        background-color: #ddd;
    `
