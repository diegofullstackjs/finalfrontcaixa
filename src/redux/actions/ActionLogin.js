import {api} from '../../services/index'

export default function ActionLogin(data){
    return dispatch => {
         api.post('/user/login',data)
         .then((resultado) => {

            if(resultado.data.token)
            {
                localStorage.setItem('auth',JSON.stringify(resultado.data))
                return dispatch({
                    type : "USER_AUTHENTICATED",
                    payload: resultado.data
                })
            }
         }).catch((e) => {
             console.log(e)

             return dispatch({
                type : "USER_NOT_AUTHENTICATED",
                payload: "Nao foi possivel autenticar"
             })
         })
        }
}