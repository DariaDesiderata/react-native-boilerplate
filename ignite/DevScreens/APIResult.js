import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'

class APIResult extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: false,
      title: false,
    }
  }

  onApiPress() {
    this.setState({ message: false })
  }

  renderView() {
    const { title, message } = this.state
    return (
      <ScrollView
        style={{ top: 0, bottom: 0, left: 0, right: 0, position: 'absolute' }}
        overflow="hidden"
      >
        <TouchableOpacity
          style={{ backgroundColor: 'white', padding: 20 }}
          onPress={() => this.onApiPress()}
        >
          <Text>{title} Response:</Text>
          <Text
            allowFontScaling={false}
            style={{ fontFamily: 'CourierNewPS-BoldMT', fontSize: 10 }}
          >
            {message}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

  render() {
    const { message } = this.state
    const messageView = null
    if (message) {
      return this.renderView()
    }

    return messageView
  }
}

export default APIResult
