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

export const Header = styled.View`
    color: transparent;
    padding: 5px;
    margin: 5px;
`;

export const HeaderText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin: 5px 2px; 
`;

export const Card = styled.View`
    position: relative;
    background-color: #e0f0e0;
    border-width: 1;
    border-color: #DDD;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
    margin-top: 5px;
    margin-bottom: 2px;
`;

export const CardHeader = styled.View`
    padding: 10px;
    background-color: #a0f0a0;
`;

export const CardTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const CardContent = styled.View`
    align-self: stretch;
    margin-bottom: 10px;
    font-size: 13px;
`

export const Label = styled.Text`
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #111;
`;

export const CardFooter = styled.View`
    padding: 15px;
    background-color: #a0f0a0;
`

export const Date = styled.Text`
    text-align: right;
    font-size: 10px;
    color: #555;
`

export const ButtonField = styled.View`
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
`

export const SaveButton = styled.TouchableOpacity`
    height: 42px;
    border-radius: 5px;
    border-width: 2px;
    border-color: #260;
    background-color: #260;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const SendButton = styled.TouchableOpacity`
    height: 42px;
    border-radius: 5px;
    border-width: 2px;
    border-color: #260;
    background-color: #260;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const AltButton = styled.TouchableOpacity`
    height: 42px;
    border-radius: 5px;
    border-width: 2px;
    border-color: #DA7825;
    background-color: #DA7825;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const CancelButton = styled.TouchableOpacity`
    height: 42px;
    border-radius: 5px;
    border-width: 2px;
    border-color: #EA0425;
    background-color: #EA0425;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
`

export const Input = styled.Text`
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    border-color: #666;
    border-width: 0.5px;
    background-color: #fff;
    align-self: stretch;
    text-align: center;
    font-size: 13px;
`

export const Select = styled.Picker`
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    border-color: #666;
    border-width: 0.5px;
    background-color: #fff;
    align-self: stretch;
    text-align: center;
    font-size: 13px;
`

export const ErrorMessage = styled.Text`
    text-align: center;
    color: #ce2029;
    font-size: 16px;
    margin-bottom: 15px;
    margin-left: 20px;
    margin-right: 20px;
`

export const SucessMessage = styled.Text`
    text-align: center;
    color: #325A11;
    font-size: 16px;
    margin-bottom: 15px;
    margin-left: 20px;
    margin-right: 20px;
`