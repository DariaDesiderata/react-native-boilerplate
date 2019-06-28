import { Sentry } from 'react-native-sentry'

function log(message, param) {
  Sentry.captureMessage(
    `${message}: ${param ? String(param) : '(No additional data)'}`,
  )
  console.info(message, { param })
}

/**
 * Custom logging of an error object to easier log the status code and response
 *
 * If logging the error object fails, fallback to a standard log
 *
 * @param {string} message
 * @param {object} error an error object caught from an Axios call
 */
function logAPIError(message, error) {
  try {
    log(
      `${message}: STATUS CODE ${error.response.data.error.code}: ERROR ${
        error.response.data.error.message
      }`,
      error,
    )
  } catch {
    log(message, error)
  }
}

export { log, logAPIError }
