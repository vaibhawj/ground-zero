

export const checkPassword = (text) => {   
     
    return text.length > 4;
}

export const matchPassword = (v1, v2) => {   
    return v1===v2;
}
