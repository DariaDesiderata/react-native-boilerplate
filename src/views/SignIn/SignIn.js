import React from 'react'
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationActions } from 'react-navigation'
import { Images } from '../../themes'

// Styles
import styles from './SignInStyles'

const SignInView = ({ navigation }) => {
  const goBack = () => {
    const backAction = NavigationActions.back()
    navigation.dispatch(backAction)
  }

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <Image
        source={Images.backgroundSolid}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      <TouchableOpacity onPress={goBack} style={styles.signIn__backButton}>
        <Icon name="arrow-left" size={25} color="white" />
      </TouchableOpacity>

      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image source={Images.logo} style={styles.signIn__logo} />
        </View>

        <View style={styles.section}>
          <Text style={[styles.titleText, styles.sectionText]}>Sign In</Text>

          <TouchableOpacity onPress={() => navigation.replace('Register')}>
            <Text style={styles.sectionText}>
              {`Don't have an account? Register.`}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => {
  return {}
}

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInView)

SignInView.propTypes = {
  navigation: PropTypes.shape({}),
}

SignInView.defaultProps = {
  navigation: {},
}
