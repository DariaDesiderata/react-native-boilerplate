import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { FullButton } from '../../src/components'

test('FullButton component renders correctly', () => {
  const tree = renderer
    .create(<FullButton onPress={() => {}} text="hi" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('onPress', () => {
  const i = 0 // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i + 1
  const wrapperPress = shallow(<FullButton onPress={onPress} text="hi" />)

  expect(wrapperPress.prop('onPress')).toBe(onPress) // uses the right handler
  expect(i).toBe(0)
  wrapperPress.simulate('press')
  expect(i).toBe(1)
})
