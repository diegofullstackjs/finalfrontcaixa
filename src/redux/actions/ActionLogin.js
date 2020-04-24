import {api} from '../../services/index'
export default function ActionLogin(data){
    return dispatch => {
         api.post('/user/login',data)
         .then((resultado) => {

            if(resultado.data.token)
            {
                localStorage.setItem('token',resultado.data.token)
                localStorage.setItem('user',resultado.data.user.email)
                return dispatch({
                    type : "USER_AUTHENTICATED",
                    payload: {
                        token : resultado.data.token,
                        email: resultado.data.user.email
                    }
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
