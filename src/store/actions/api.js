export const fetchInit = () => {
  return {
    type: 'FETCH_INIT',
    payload: true
  }
}

export const fetchFail = error => {
  return {
    type: 'FETCH_FAIL',
    payload: false,
    error
  }
}

export const fetchFinished = () => {
  return {
    type: 'FETCH_FINISHED',
    payload: false
  }
}