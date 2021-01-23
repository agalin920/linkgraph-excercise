function userReducer(state = {users: []}, action: any) {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { ...state, users: action.payload};
    default:
      return state
  }
}

export default userReducer;