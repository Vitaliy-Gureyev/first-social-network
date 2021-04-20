import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/Validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../Common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><Field component={Input} name={"email"} placeholder={"email"} validate={[requiredField]}/></div>
            <div><Field component={Input} name={"password"} placeholder={"password"} type={"password"}
                        validate={[requiredField]}/></div>
            <div><Field component={Input} name={"rememberMe"} type="checkbox"/>remember me</div>

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}

            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>
            login
        </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)