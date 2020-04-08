const localStorage = {
    login:false
}

const reducer = (state=localStorage,action) =>{
    if(action.type==="CHANGE_FLAG"){
        return {
            ...state,
            login:action.payload
        }
    }
    return state;

}


export default reducer;