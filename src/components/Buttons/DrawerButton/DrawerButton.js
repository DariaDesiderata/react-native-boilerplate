import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import styles from './DrawerButtonStyles'

const DrawerButton = ({ onPress, text }) => (
  <TouchableOpacity onPress={() => onPress()}>
    <Text style={styles.drawerButton__text}>{text}</Text>
  </TouchableOpacity>
)

DrawerButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
}

DrawerButton.defaultProps = {
  onPress: () => {},
  text: '',
}

export default DrawerButton
