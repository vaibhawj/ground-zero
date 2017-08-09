import { matchPassword, checkPassword } from '../validation'

const initialState = {
    inValidError : "",
    misMatchError : "",
    password : "",
    confirmPassword : ""
}

const resetPasswordReducer = (state = initialState, action)=>{
    console.log(action.type);
    switch(action.type){

        case 'MATCH_PASSWORD' :
        state =  updateStateWithChangedValues(state, action.payload);
        if(!matchPassword(state.password, state.confirmPassword)){ 
            return {
            ...state,
            misMatchError: "Password must match",
            inValidError : ""
            }
        } else {
            if(!checkPassword(state.password) || !checkPassword(state.confirmPassword)){ 
            return {
            ...state,
            misMatchError: "",
            inValidError : "Password is invalid"
            }
        } else {
            return {
                ...state,
            inValidError : "",
            misMatchError : ""
          }
        } 
            
        }
        
        case 'VALIDATE_PASSWORD' :
        state =  updateStateWithChangedValues(state, action.payload);
        if(!checkPassword(state.password)){ 
            return {
            ...state,
            misMatchError: "",
            inValidError : "Password is invalid"
            }
        } else {
            return {
                ...state,
            inValidError : "",
            misMatchError : ""
          }
        }
        
        case 'RESET_PASSWORD' : 
        if(state.inValidError==="" && state.misMatchError===""){
            console.log("Submission successful")
        } else {
            console.log("Cant submit untill the validation pass");
        }

        default : return state;
    }

}

const updateStateWithChangedValues = (state, payload) =>{
         switch(payload.name){
             case "password" : return{
            ...state,
            "password" : payload.value
            }

            case "confirmPassword" : return {
                ...state,
                "confirmPassword" : payload.value
            }

            default : return state;
         }
}
    
    
    //return state;


export default resetPasswordReducer;