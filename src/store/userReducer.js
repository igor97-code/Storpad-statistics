const initialUser = {
    isAuth: false
}

export default function userReducer(state = initialUser,action){
    if(action.type === 'login'){
       return {
           ...state,
           isAuth:action.isAuth
       }
    }
    return state
}