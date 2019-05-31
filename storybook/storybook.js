import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'

// import stories
configure(() => {
  // eslint-disable-next-line global-require
  require('../src/components/Stories')
}, module)

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true })
AppRegistry.registerComponent('CuttlesoftBoilerplate', () => StorybookUI)
export default StorybookUI
