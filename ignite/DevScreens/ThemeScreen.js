import React from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import R from 'ramda'
import { Colors, Fonts, Images } from './DevTheme'

// Styles
import styles from './styles/ThemeScreenStyles'

// Colors
const colors = R.keys(Colors)
// Font Types
const types = R.keys(Fonts.type)
// Font Styles
const fontStyles = R.keys(Fonts.style)

const renderColor = (color: string) => {
  return (
    <View style={styles.colorContainer} key={`${color}Container`}>
      <View
        style={styles.backgroundContainer}
        key={`${color}BackgroundContainer`}
      >
        <Image
          style={styles.backerImage}
          source={Images.tileBg}
          key={`${color}BackgroundImage`}
        />
        <View
          style={[styles.colorSquare, { backgroundColor: Colors[color] }]}
          key={`${color}Square`}
        />
      </View>
      <Text style={styles.colorName} key={`${color}Text`}>
        {color}
      </Text>
    </View>
  )
}

const renderColors = () => {
  return colors.map(color => renderColor(color))
}

const renderFont = (font: string) => {
  return (
    <Text
      style={[styles.fontRow, { fontFamily: Fonts.type[font] }]}
      key={font}
    >{`${font}: ${Fonts.type[font]}`}</Text>
  )
}
const renderFonts = () => {
  return types.map(font => renderFont(font))
}

const renderStyle = (fontStyle: string) => {
  return (
    <Text
      style={[styles.fontRow, { ...Fonts.style[fontStyle] }]}
      key={fontStyle}
    >{`This is ${fontStyle} style`}</Text>
  )
}

const renderStyles = () => {
  return fontStyles.map(fontStyle => renderStyle(fontStyle))
}

const ThemeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainerPrimary}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10,
        }}
      >
        <Image source={Images.backButton} />
      </TouchableOpacity>

      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'center', paddingTop: 60 }}>
          <Image source={Images.theme} style={styles.logo} />
          <Text style={styles.titleText}>Themes</Text>
        </View>
        <View style={styles.section} key="colors-header">
          <Text style={styles.sectionText} key="colors">
            List of Theme specific settings. Auto-generated from Themes folder.
          </Text>
        </View>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Colors</Text>
        </View>
        <View style={styles.colorsContainer}>{renderColors()}</View>

        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Fonts</Text>
        </View>
        {renderFonts()}

        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Styles</Text>
        </View>
        {renderStyles()}
      </ScrollView>
    </View>
  )
}

ThemeScreen.propTypes = {
  navigation: PropTypes.shape({}),
}

ThemeScreen.defaultProps = {
  navigation: {},
}
export default ThemeScreen
