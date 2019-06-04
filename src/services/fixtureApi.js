import DATA from '../fixtures/root.json'
import RATE_LIMIT from '../fixtures/rateLimit.json'
import GANTMAN_DATA from '../fixtures/gantman.json'
import SKELLOCK_DATA from '../fixtures/skellock.json'

export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: DATA,
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: RATE_LIMIT,
    }
  },
  getUser: username => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = GANTMAN_DATA
    const skellockData = SKELLOCK_DATA
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData,
    }
  },
}
