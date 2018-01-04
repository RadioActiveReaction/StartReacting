export default function reducer(state = {
  UserName: '',
  Password: '',
  isUserBeingFetched: false,
  hasUserFetchedSuccessful: false,
}, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return Object.assign({}, state, {
        isUserBeingFetched: true,
      });
    case 'FETCH_USER_SUCCESFUL':
      return Object.assign({}, state, {
        isUserBeingFetched: false,
        hasUserFetchedSuccessful: true,
      });
    default:
      return state;
  }
}
