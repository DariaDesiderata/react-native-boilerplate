// Fair Warning:  PluginExamples has a good bit of Ignite automation in editing.
// Though robust, if you should modify this file, review your changes with us
// As to not break the automated addition/subtractions.
import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import PropTypes from 'prop-types'
import { Images } from './DevTheme'

// Examples Render Engine
import { renderPluginExamples } from '../../src/services/examplesRegistry'
import '../Examples/Components/animatableExample'
import '../Examples/Components/vectorExample'

// Styles
import styles from './styles/PluginExamplesScreenStyles'

const PluginExamplesScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={Images.background}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />
      <TouchableOpacity
        onPress={() => navigation.goBack(null)}
        style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10,
        }}
      >
        <Image source={Images.backButton} />
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'center', paddingTop: 60 }}>
          <Image source={Images.usageExamples} style={styles.logo} />
          <Text style={styles.titleText}>Plugin Examples</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            {`The Plugin Examples screen is a playground for 3rd party libs and
            logic proofs. Items on this screen can be composed of multiple
            components working in concert. Functionality demos of libs and
            practices`}
          </Text>
        </View>

        {renderPluginExamples()}

        <View style={styles.screenButtons} />
      </ScrollView>
    </View>
  )
}

PluginExamplesScreen.propTypes = {
  navigation: PropTypes.shape({}),
}

PluginExamplesScreen.defaultProps = {
  navigation: {},
}

export default createStackNavigator(
  {
    PluginExamplesScreen: { screen: PluginExamplesScreen },
  },
  {
    cardStyle: {
      opacity: 1,
      backgroundColor: '#3e243f',
    },
    headerMode: 'none',
    initialRouteName: 'PluginExamplesScreen',
  },
)
