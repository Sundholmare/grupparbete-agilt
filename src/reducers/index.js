const flipReducer = (state = true, action) => {
    switch(action.type){
        case "FLIP":
            return state = action.payload
        default:
            return state
    }
}

export default flipReducer;