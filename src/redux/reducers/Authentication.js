
export default function Authentication(state={},action)
{
    switch(action.type)
    {
        case "USER_AUTHENTICATED":
            return{
                ...state,
                logado:true
            }
        default:
            return state;
    }
}