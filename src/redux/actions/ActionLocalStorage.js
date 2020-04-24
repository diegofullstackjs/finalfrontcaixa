
export function AuthLocalStorage(dispatch) {
    return (dispatch) => {
        if(localStorage.getItem('auth'))
        {
            return dispatch({
                type: "USER_AUTHENTICATED",
                payload: localStorage.getItem('auth')
            })
        }
       return  dispatch({
            type: "USER_NOT_AUTHENTICATED",
            payload: null
        })
    }
}