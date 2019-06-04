import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import FJSON from 'format-json'
import { Images } from './DevTheme'
import { FullButton } from '../../src/components/Buttons'

// For API
import API from '../../src/services/api'
import APIResult from './APIResult'

// Styles
import styles from './styles/APITestingScreenStyles'

// API buttons here:
const endpoints = [
  { label: 'Github Root', endpoint: 'getRoot' },
  { label: 'Github Rate Limit', endpoint: 'getRate' },
  { label: 'Search User (gantman)', endpoint: 'getUser', args: ['gantman'] },
  { label: 'Search User (skellock)', endpoint: 'getUser', args: ['skellock'] },
]

class APITestingScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // visibleHeight: Metrics.screenHeight, // import { Metrics } from './DevTheme'
    }
    this.containerRef = React.createRef()
    this.resultRef = React.createRef()
    this.api = API.create()
  }

  showResult(response, title = 'Response') {
    this.containerRef.current.scrollTo({ x: 0, y: 0, animated: true })
    if (response.ok) {
      this.resultRef.current.setState({
        message: FJSON.plain(response.data),
        title,
      })
    } else {
      this.resultRef.setState({
        message: `${response.problem} - ${response.status}`,
        title,
      })
    }
  }

  tryEndpoint(apiEndpoint) {
    const { label, endpoint, args = [''] } = apiEndpoint
    this.api[endpoint].apply(this, args).then(result => {
      this.showResult(result, label || `${endpoint}(${args.join(', ')})`)
    })
  }

  renderButton(apiEndpoint) {
    const { label, endpoint, args = [''] } = apiEndpoint
    return (
      <FullButton
        text={label || `${endpoint}(${args.join(', ')})`}
        onPress={() => this.tryEndpoint(apiEndpoint)}
        styles={{ marginTop: 10 }}
        key={`${endpoint}-${args.join('-')}`}
      />
    )
  }

  renderButtons() {
    return endpoints.map(endpoint => this.renderButton(endpoint))
  }

  render() {
    const {
      navigation: { goBack },
    } = this.props
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <TouchableOpacity
          onPress={() => goBack()}
          style={{
            position: 'absolute',
            paddingTop: 30,
            paddingHorizontal: 5,
            zIndex: 10,
          }}
        >
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container} ref={this.containerRef}>
          <View style={{ alignItems: 'center', paddingTop: 60 }}>
            <Image source={Images.api} style={styles.logo} />
            <Text style={styles.titleText}>API</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Testing API with Postman or APIary.io verifies the server works.
              The API Test screen is the next step; a simple in-app way to
              verify and debug your in-app API functions.
            </Text>
            <Text style={styles.sectionText}>
              Create new endpoints in Services/api.js then add example uses to
              endpoints array in Containers/APITestingScreen.js
            </Text>
          </View>
          {this.renderButtons()}
          <APIResult ref={this.resultRef} />
        </ScrollView>
      </View>
    )
  }
}

APITestingScreen.propTypes = {
  navigation: PropTypes.shape({}),
}

APITestingScreen.defaultProps = {
  navigation: {},
}

export default APITestingScreen
