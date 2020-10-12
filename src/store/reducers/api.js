const apiReducers = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return true
    case 'FETCH_FAIL':
    case 'FETCH_FINISHED':
      return false
    default:
      return state
  }
}

export default apiReducers