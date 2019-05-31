import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles/ButtonBoxStyles'

const ButtonBox = ({ style, onPress, image, text }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onPress()}
    >
      <Image resizeMode="contain" source={image} style={styles.image} />
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  )
}

ButtonBox.propTypes = {
  onPress: PropTypes.func,
  image: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  text: PropTypes.string,
}

ButtonBox.defaultProps = {
  onPress: () => {},
  image: 0,
  style: 0,
  text: '',
}

export default ButtonBox
