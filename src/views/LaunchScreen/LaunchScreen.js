import React from 'react'
import { ScrollView, Image, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import PropTypes from 'prop-types'

import { Images } from '../../themes'
import { RoundedButton } from '../../components'

// TMP
import DevscreensButton from '../../../ignite/DevScreens/DevscreensButton'

// Styles
import styles from './LaunchScreenStyles'

// Screens
import Register from '../Register/Register'
import SignIn from '../SignIn/SignIn'

const LaunchScreen = ({ navigation }) => {
  const openRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <View style={styles.mainContainer}>
      <Image
        source={Images.backgroundSolid}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />
      <ScrollView style={styles.launchScreen__container}>
        <View style={styles.launchScreen__centered}>
          <Image source={Images.logo} style={styles.launchScreen__logo} />
        </View>

        <View style={styles.section}>
          <RoundedButton onPress={openRegister}>Sign Up</RoundedButton>
          <DevscreensButton />
        </View>
      </ScrollView>
    </View>
  )
}

export default createAppContainer(
  createStackNavigator(
    {
      LaunchScreen: { screen: LaunchScreen },
      Register: { screen: Register },
      SignIn: { screen: SignIn },
    },
    {
      initialRouteName: 'LaunchScreen',
      headerMode: 'none',
    },
  ),
)

LaunchScreen.propTypes = {
  navigation: PropTypes.shape({}),
}

LaunchScreen.defaultProps = {
  navigation: {},
}
