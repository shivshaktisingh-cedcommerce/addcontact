
const initialState={
    contact:[]
}

const function1 =(state= initialState , action)=>{
    var temp = state.contact;
    switch(action.type){
        case "SAVE":

            temp.push(action.payload)
            return {
                ...state   , contact:state.contact=temp
            }
        case "REMOVE":
         
            temp.splice(action.payload , 1)
            return {
                ...state   , contact:state.contact=temp
            }
         default:
            return state;
    }
}


export default function1
