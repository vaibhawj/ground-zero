import React from 'react';

const ResetPasswordComponent = ({handlePasswordBlur, handleConfirmPasswordBlur, handleSubmit, inValidError, misMatchError})=>{
        return (
            <div>
                <form onSubmit = {handleSubmit}>    
                    Password: <input type="text" name="password" onBlur={handlePasswordBlur}/><br/>
                    {inValidError}<br/>
                    Confirm Password: <input type="text" name="confirmPassword" onBlur={handleConfirmPasswordBlur}/><br/>
                    {misMatchError}<br/>
                    <button type="Submit" onClick={handleSubmit}> Reset Password </button>
                </form>
            </div>);
    
}
export default ResetPasswordComponent;