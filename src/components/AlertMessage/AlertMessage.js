import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './AlertMessageStyles'

const AlertMessage = ({ show, title, style }) => {
  const messageComponent = null
  if (show) {
    return (
      <View style={[styles.alert__container, style]}>
        <View style={styles.alert__contentContainer}>
          <Text allowFontScaling={false} style={styles.alert__message}>
            {title && title.toUpperCase()}
          </Text>
        </View>
      </View>
    )
  }
  return messageComponent
}

AlertMessage.propTypes = {
  title: PropTypes.string,
  style: PropTypes.shape({}),
  show: PropTypes.bool,
}

export default AlertMessage
