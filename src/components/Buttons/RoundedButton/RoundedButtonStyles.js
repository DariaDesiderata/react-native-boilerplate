import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../themes'

export default StyleSheet.create({
  roundedButton__button: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
  },
  roundedButton__text: {
    color: Colors.blue,
    fontSize: Fonts.size.medium,
    fontWeight: 'bold',
    marginVertical: Metrics.baseMargin,
    textAlign: 'center',
  },
})
