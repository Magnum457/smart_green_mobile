// libs
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// páginas
import signIn from './pages/signIn'
import signUp from './pages/signUp'
import main from './pages/main'

// navegações
export default createAppContainer(
    createSwitchNavigator({
        signIn,
        signUp,
        main
    })
)