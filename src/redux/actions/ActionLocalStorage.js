
export function AuthLocalStorage(dispatch) {
    return (dispatch) => {
        if(localStorage.getItem('auth'))
        {
            dispatch({
                type: "USER_AUTHENTICATED",
                payload: localStorage.getItem('auth')
            })
        }
        dispatch({
            type: "USER_NOT_AUTHENTICATED",
            payload: "Usuario nao autenticado"
        })
    }
}