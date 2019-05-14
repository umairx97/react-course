const initialState = {
  isAuth: false,
  currentUser: null,
  name: 'Umair'
};

export const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        isAuth: true,
        currentUser: action.data
      };

    default:
      return state;
  }
};

  
  

