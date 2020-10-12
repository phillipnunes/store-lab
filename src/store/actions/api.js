export const fetchInit = () => {
  return {
    type: 'FETCH_INIT',
    payload: {
      isFetching: true,
      error: false
    }
  }
}

export const fetchFail = error => {
  return {
    type: 'FETCH_FAIL',
    payload: {
      isFetching: false,
      error: error
    }
  }
}

export const fetchFinished = () => {
  return {
    type: 'FETCH_FINISHED',
    payload: {
      isFetching: false,
      error: false
    }
  }
}