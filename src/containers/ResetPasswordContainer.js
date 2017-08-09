
import ResetPasswordComponent from '../components/ResetPasswordComponent';
import {connect} from 'react-redux';


const mapStateToProps = (state)=>{
    return ({
       inValidError : state.inValidError,
       misMatchError : state.misMatchError
    });
}

const mapDispatchToProps  = (dispatch)=>{
    return ({
        handlePasswordBlur :(evt) => {
            dispatch({type:"VALIDATE_PASSWORD", payload:{name:"password", value:evt.target.value}})    
        },
        handleConfirmPasswordBlur : (evt) =>{
            dispatch({type:"MATCH_PASSWORD", payload:{name:"confirmPassword", value:evt.target.value}});
        },
        handleSubmit: (evt) => {
            evt.preventDefault();
            dispatch({type:"RESET_PASSWORD"});
        }
    })
}

const ResetPassword = connect(mapStateToProps, mapDispatchToProps)(ResetPasswordComponent);

export default ResetPassword;


