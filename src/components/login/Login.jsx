import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/Validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={"login"} placeholder={"login"} validate={[requiredField]}/></div>
            <div><Field component={Input} name={"password"} placeholder={"password"} validate={[requiredField]}/></div>
            <div><Field component={Input} name={"remember me"} type="checkbox"/>remember me</div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>
            login
        </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login