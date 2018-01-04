export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESSFUL = 'FETCH_USER_SUCCESFUL';

export function fetchUser() {
  return { type: FETCH_USER };
}

export function fetchUserSuccesful() {
  return { type: FETCH_USER_SUCCESSFUL };
}

export function getUserDetails(UserName) {
  // MOCK ASYNC RETURN VALUE
  if (UserName === 'Dinesh') {
    return {
      UserName: 'Dinesh',
      Password: 'Baba',
    };
  }

  return {
    UserName: '',
    Password: '',
  };
}

// export function fetchUserFromServer() {
//   // Simulation for an Async Call - We should make a server call here.
//   // We should be using Thunk or Sagas for redux call.
//   return (dispatch) => {
//     dispatch(fetchUser());
//     getUserDetails().then(() => {
//       dispatch(fetchUserSuccesful());
//     });
//   // We can add dispatch(fetchUserUnSuccesful) if any error exist inside catch.
//   };
// }
