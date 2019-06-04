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
import styles from './RegisterStyles'

const Register = ({ navigation }) => {
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

      <TouchableOpacity onPress={goBack} style={styles.register__backButton}>
        <Icon name="arrow-left" size={25} color="white" />
      </TouchableOpacity>

      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image source={Images.logo} style={styles.register__logo} />
        </View>

        <View style={styles.section}>
          <Text style={[styles.titleText, styles.sectionText]}>Sign Up</Text>

          <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
            <Text style={styles.sectionText}>
              Already have an account? Sign in.
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
)(Register)

Register.propTypes = {
  navigation: PropTypes.shape({}),
}

Register.defaultProps = {
  navigation: {},
}
