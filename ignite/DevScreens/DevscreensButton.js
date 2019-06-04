import React from 'react'
import { View, Modal } from 'react-native'
import DebugConfig from '../../src/config/DebugConfig'
import { RoundedButton } from '../../src/components/Buttons'
import PresentationScreen from './PresentationScreen'

export default class DevscreensButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  toggleModal() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  }

  render() {
    const { showModal } = this.state
    if (DebugConfig.showDevScreens) {
      return (
        <View>
          <RoundedButton onPress={() => this.toggleModal()}>
            Open DevScreens
          </RoundedButton>
          <Modal visible={showModal} onRequestClose={() => this.toggleModal()}>
            <PresentationScreen
              screenProps={{ toggle: () => this.toggleModal() }}
            />
          </Modal>
        </View>
      )
    }
    return <View />
  }
}
