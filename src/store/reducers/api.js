const INITIAL_STATE = {
  isFetching: false,
  error: false
}

const apiReducers = (state = INITIAL_STATE, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    case 'FETCH_FAIL':
      return {
        ...state,
        isFetching: payload.isFetching,
        error: payload.error
      }
    case 'FETCH_FINISHED':
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    default:
      return state
  }
}

export default apiReducers