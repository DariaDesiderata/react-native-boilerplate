import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './RoundedButtonStyles'

const RoundedButton = ({ onPress, text, children }) => {
  const getText = () => {
    const buttonText = text || children || ''
    return buttonText.toUpperCase()
  }

  return (
    <TouchableOpacity
      style={styles.roundedButton__button}
      onPress={() => onPress()}
    >
      <Text style={styles.roundedButton__text}>{getText()}</Text>
    </TouchableOpacity>
  )
}

RoundedButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

RoundedButton.defaultProps = {
  onPress: () => {},
  text: '',
  children: [],
}

export default RoundedButton
