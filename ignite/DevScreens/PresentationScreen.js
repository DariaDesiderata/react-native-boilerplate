import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { createStackNavigator, NavigationActions } from 'react-navigation'
import PropTypes from 'prop-types'
import { Images } from './DevTheme'
import ButtonBox from './ButtonBox'
// Screens
import APITestingScreen from './APITestingScreen'
import ComponentExamplesScreen from './ComponentExamplesScreen'
import DeviceInfoScreen from './DeviceInfoScreen'
import PluginExamplesScreen from './PluginExamplesScreen'
import ThemeScreen from './ThemeScreen'
import FaqScreen from './FaqScreen'

// Styles
import styles from './styles/PresentationScreenStyles'

class PresentationScreen extends Component {
  goBack = () => {
    const backAction = NavigationActions.back()
    const {
      navigation: { dispatch },
    } = this.prop
    dispatch(backAction)
  }

  openComponents() {
    this.navigateTo('ComponentExamplesScreen')
  }

  openUsage() {
    this.navigateTo('PluginExamplesScreen')
  }

  openApi() {
    this.navigateTo('APITestingScreen')
  }

  openTheme() {
    this.navigateTo('ThemeScreen')
  }

  openDevice() {
    this.navigateTo('DeviceInfoScreen')
  }

  openFaq() {
    this.navigateTo('FaqScreen')
  }

  navigateTo(screenName) {
    const {
      navigation: { navigate },
    } = this.props
    navigate(screenName)
  }

  render() {
    // const {
    //   screenProps: { toggle },
    // } = this.props
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />

        <TouchableOpacity
          onPress={() => this.goBack()}
          style={{
            position: 'absolute',
            paddingTop: 30,
            paddingHorizontal: 10,
            zIndex: 10,
          }}
        >
          <Image source={Images.closeButton} />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.container}
        >
          <View style={styles.centered}>
            <Image source={Images.igniteClear} style={styles.logo} />
          </View>

          <Text style={styles.sectionText}>
            Default screens for development, debugging, and alpha testing are
            available below.
          </Text>
          <View style={styles.buttonsContainer}>
            <ButtonBox
              onPress={() => this.openComponents()}
              style={styles.componentButton}
              image={Images.components}
              text="Components"
            />
            <ButtonBox
              onPress={() => this.openUsage()}
              style={styles.usageButton}
              image={Images.usageExamples}
              text="Plugin Examples"
            />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonBox
              onPress={() => this.openApi()}
              style={styles.apiButton}
              image={Images.api}
              text="API Testing"
            />
            <ButtonBox
              onPress={() => this.openTheme()}
              image={Images.theme}
              text="Theme"
            />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonBox
              onPress={() => this.openDevice()}
              style={styles.deviceButton}
              image={Images.deviceInfo}
              text="Device Info"
            />
            <ButtonBox
              onPress={() => this.openFaq()}
              style={styles.usageButton}
              image={Images.faq}
              text="FAQ"
            />
          </View>
        </ScrollView>
        <View style={styles.banner} />
      </View>
    )
  }
}

PresentationScreen.propTypes = {
  navigation: PropTypes.shape({}),
  screenProps: PropTypes.shape({}),
}

PresentationScreen.defaultProps = {
  navigation: {},
  screenProps: {},
}

export default createStackNavigator(
  {
    PresentationScreen: { screen: PresentationScreen },
    APITestingScreen: { screen: APITestingScreen },
    ComponentExamplesScreen: { screen: ComponentExamplesScreen },
    DeviceInfoScreen: { screen: DeviceInfoScreen },
    PluginExamplesScreen: { screen: PluginExamplesScreen },
    ThemeScreen: { screen: ThemeScreen },
    FaqScreen: { screen: FaqScreen },
  },
  {
    cardStyle: {
      opacity: 1,
      backgroundColor: '#3e243f',
    },
    initialRouteName: 'PresentationScreen',
    headerMode: 'none',
    // Keeping this here for future when we can make
    navigationOptions: {
      header: {
        left: (
          <TouchableOpacity onPress={() => window.alert('pop')}>
            <Image
              source={Images.closeButton}
              style={{ marginHorizontal: 10 }}
            />
          </TouchableOpacity>
        ),
        style: {
          backgroundColor: '#3e243f',
        },
      },
    },
  },
)
