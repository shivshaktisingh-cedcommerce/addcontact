export const saveuserdata =(t)=>{
 
    return {
        type:"SAVE" ,
        payload:t
    }
}

export const removeuserdata =(t)=>{
 
    return {
        type:"REMOVE" ,
        payload:t
    }
}