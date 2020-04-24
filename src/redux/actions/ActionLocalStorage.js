
export function AuthLocalStorage(dispatch) {
    return (dispatch) => {
        console.log("entrou aqui")
        if(localStorage.getItem('token'))
        {
            
            return dispatch({
                type: "USER_AUTHENTICATED",
                payload: {
                    token : localStorage.getItem('auth'),
                    email: localStorage.getItem('user')
                }
            })
        }
       return  dispatch({
            type: "USER_NOT_AUTHENTICATED",
            payload: null
        })
    }
}