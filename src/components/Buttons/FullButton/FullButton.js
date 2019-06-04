import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './FullButtonStyles'

const FullButton = ({ onPress, propStyles, text }) => {
  return (
    <TouchableOpacity
      style={[styles.fullButton__button, propStyles]}
      onPress={() => onPress()}
    >
      <Text style={styles.fullButton__text}>{text && text.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

FullButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  propStyles: PropTypes.shape({}),
}

FullButton.defaultProps = {
  text: '',
  onPress: () => {},
  propStyles: {},
}

export default FullButton
