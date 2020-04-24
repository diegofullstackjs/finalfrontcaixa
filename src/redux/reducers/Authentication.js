const INITIAL_STATE = {
}
export default function Authentication(state=INITIAL_STATE,action)
{
    switch(action.type)
    {
        case "USER_AUTHENTICATED":
            return{
                ...state,
                logado:true,
                user: action.payload
            }
        case "USER_NOT_AUTHENTICATED":
            return {
                logado:false,
                message: action.payload
            }
        default:
            return state;
    }
}