// libs
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

// components
export const Container = styled(LinearGradient).attrs({
    colors: ['#228B22', '#deb887'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  })`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput`
    padding: 15px 20px;
    border-radius: 5px;
    background-color: #FFF;
    align-self: stretch;
    margin: 15px 20px;
    font-size: 16px;
`
export const ErrorMessage = styled.Text`
    text-align: center;
    color: #ce2029;
    font-size: 16px;
    margin-bottom: 15px;
    margin-left: 20px;
    margin-right: 20px;
`

export const Button = styled.TouchableHighlight`
    padding: 20px;
    border-radius: 5px;
    background-color: #226655;
    align-self: stretch;
    margin: 15px;
    margin-left: 20px;
    margin-right: 20px;
`

export const ButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`

export const SignUpLink = styled.TouchableHighlight`
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
`

export const SignUpText = styled.Text`
    color: #333;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`
