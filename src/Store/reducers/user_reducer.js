



const initialState = { 
    isLoggedin: 'Umair',
    age: 20
}

export const user_reducer = (state = initialState , action) => { 
    switch(action.type){ 
        case 'ADD_USER':
            return { 
                ...state,
                isLoggedin: action.name
            }


        default: 
            return state

    }



}