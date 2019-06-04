import { StyleSheet } from 'react-native'
import {
  ApplicationStyles,
  Metrics,
  Colors,
} from '../../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background,
  },
  row: {
    flex: 1,
    backgroundColor: Colors.red,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
  },
  label: {
    textAlign: 'center',
    color: Colors.white,
  },
  listContent: {
    marginTop: Metrics.baseMargin,
  },
})
