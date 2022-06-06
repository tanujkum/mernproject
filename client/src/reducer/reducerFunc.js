export const iState=false;

export const reducer=(state=iState,action)=>{
    if(action.type==='USER'){
        return action.payload
    }
    return state;

}