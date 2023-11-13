export default {
  // the name becomes the reducer name in the resulting state
  name: 'users',
  // the Redux reducer function
  reducer: (state = [], action) => {
    // state here is the "users" slice of full state object
    return state
  },
  // anything that starts with `select` is treated as a selector
  // selectors get full state object so they can use state from other bundles
  selectActiveUsers: state => state.users.filter(user => user.isActive),
  // anything that starts with `do` is treated as an action creator
  doUpdateUser: (userId, attrs) => ({ dispatch, apiFetch }) =>
    dispatch({ type: 'USER_UPDATE_STARTED' })
    apiFetch('/users', { type: 'PUT' }, attrs)
      .then(res => {
      dispatch({ type: 'USER_UPDATE_FINISHED' })
    })
    .catch(err => {
      dispatch({ type: 'USER_UPDATE_FAILED' })
    }),
  // optional init method is ran after store is created and passed the
  // store object.
  init: store => {
    // action creators are bound and attached to store as methods
    store.doUpdateUser()

    // selectors are also "bound" and attached to store as methods
    store.selectActiveUsers()
  }
}
