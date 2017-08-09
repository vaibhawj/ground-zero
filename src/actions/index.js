

export const validPassword = ()=>{
    return (
        {
            type : "VALID"
        });    
}

export const invalidPassword = ()=>{
    return (
        {
            type : "INVALID"
        });    
}

export const mismatchPassword = ()=>{
    return (
        {
            type : "MISMATCH"
        });    
}

export const updateState = (name, value)=>{
  //  console.log(name + value);
    return(
        {
            type: "UPDATE_STATE",
            name : name,
            value : value
        }
    );
}
