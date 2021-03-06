import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  sectionHeaderContainer: {
    ...ApplicationStyles.darkLabelContainer,
  },
  sectionHeader: {
    ...ApplicationStyles.darkLabel,
    paddingTop: 50,
  },
  cardTitle: {
    alignSelf: 'center',
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    marginVertical: Metrics.baseMargin,
    color: Colors.white,
  },
  cardContainer: {
    backgroundColor: Colors.washedRed,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
    shadowColor: Colors.black,
    shadowOffset: {
      height: 7,
      width: 7,
    },
    shadowRadius: 2,
    paddingBottom: Metrics.baseMargin,
    margin: Metrics.baseMargin,
  },
  rowContainer: {
    flexDirection: 'row',
    borderColor: Colors.border,
    borderWidth: 0.5,
    borderRadius: 2,
    marginHorizontal: Metrics.baseMargin,
  },
  rowLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  rowLabel: {
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin,
  },
  rowInfoContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: Colors.gray,
  },
  rowInfo: {
    fontSize: Fonts.size.regular,
    margin: Metrics.baseMargin,
  },
})
