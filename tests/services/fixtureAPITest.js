import R from 'ramda'
import API from '../../src/services/api'
import FixtureAPI from '../../src/services/fixtureApi'
import RATE_LIMIT from '../../src/fixtures/rateLimit.json'
import GANTMAN_DATA from '../../src/fixtures/gantman.json'
import SKELLOCK_DATA from '../../src/fixtures/skellock.json'

test('All fixtures map to actual API', () => {
  const fixtureKeys = R.keys(FixtureAPI).sort()
  const apiKeys = R.keys(API.create())

  const intersection = R.intersection(fixtureKeys, apiKeys).sort()

  // There is no difference between the intersection and all fixtures
  expect(R.equals(fixtureKeys, intersection)).toBe(true)
})

test('FixtureAPI getRate returns the right file', () => {
  const expectedFile = RATE_LIMIT

  expect(FixtureAPI.getRate()).toEqual({
    ok: true,
    data: expectedFile,
  })
})

test('FixtureAPI getUser returns the right file for gantman', () => {
  const expectedFile = GANTMAN_DATA

  expect(FixtureAPI.getUser('GantMan')).toEqual({
    ok: true,
    data: expectedFile,
  })
})

test('FixtureAPI getUser returns the right file for skellock as default', () => {
  const expectedFile = SKELLOCK_DATA

  expect(FixtureAPI.getUser('Whatever')).toEqual({
    ok: true,
    data: expectedFile,
  })
})
