const viewBook = (state = [], action) => {
    switch (action.type){
    case "VIEW_BOOK":
        return [ action.payload ]
    default:
    return state
    }
}
export default viewBook;