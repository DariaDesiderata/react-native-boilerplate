// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import {
  Platform,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import { Images } from './DevTheme'
import styles from './styles/ComponentExamplesScreenStyles'

// Examples Render Engine
import { renderComponentExamples } from '../../src/services/examplesRegistry'

const renderAndroidWarning = platform => {
  if (platform.OS === 'android') {
    return (
      <Text style={styles.sectionText}>
        Android only: Animations are slow? You are probably running the app in
        debug mode. It will run more smoothly once your app will be built.
      </Text>
    )
  }
  return null
}
const ComponentExamplesScreen = ({ navigation: { goBack } }) => {
  return (
    <View style={[styles.container, styles.mainContainer]}>
      <Image
        source={Images.background}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />
      <TouchableOpacity
        onPress={() => goBack()}
        style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10,
        }}
      >
        <Image source={Images.backButton} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={{ alignItems: 'center', paddingTop: 60 }}>
          <Image source={Images.components} style={styles.logo} />
          <Text style={styles.titleText}>Components</Text>
        </View>
        <View style={styles.description}>
          {renderAndroidWarning(Platform)}
          <Text style={styles.sectionText}>
            {`Sometimes called a 'Style Guide', or 'Pattern Library', Examples
              Screen is filled with usage examples of fundamental components for
              a given application. Use this merge-friendly way for your team to
              show/use/test components. Examples are registered inside each
              component's file for quick changes and usage identification.`}
          </Text>
        </View>

        {renderComponentExamples()}
      </ScrollView>
    </View>
  )
}

ComponentExamplesScreen.propTypes = {
  navigation: PropTypes.shape({}),
}

ComponentExamplesScreen.defaultProps = {
  navigation: {},
}

export default ComponentExamplesScreen
