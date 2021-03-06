import { createStackNavigator, createAppContainer } from 'react-navigation'
import { LaunchScreen } from '../views'

import styles from './styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
)

export default createAppContainer(PrimaryNav)
