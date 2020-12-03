import React from 'react'
import { connect } from 'react-redux'
import auth from './auth'

const Login = (props) =>{
    let [error,setError] = React.useState(false);
    const inputLogin = React.useRef();
    const inputPassword = React.useRef();
    const handlerSubmit = () =>{
        auth({
            email: inputLogin.current.value,
            password: inputPassword.current.value,
        })
    }
    return ( 
        <div className="login">
            <div className="login-form">
                <img src="img/main-logo.svg" alt="Аватар" className="form-logo"/>
                <div className="authorizations">
                    <label htmlFor="login">
                        Username:
                        <img src="./login.svg" alt="login"/>
                    </label>
                    <input type="text" id ="login" ref ={inputLogin} />
                    <label htmlFor="password">
                        Password:
                        <img src="./password.svg" alt="password"/>
                    </label>
                    <input type="text" id ="password" ref ={inputPassword} />
                    {
                        error ?  <div className="error">
                                    Пользователь не найден, попробуйте снова.
                                    </div>
                              : ''
                    }
                    <input type="submit" id ="submit" value ="Sign-in" onClick = {handlerSubmit} />
                </div>
            </div>
        </div> 
    )
}   

const mapDispatchToProps = (dispatch) =>({
    login: (action) => dispatch(action)
})

export default connect(null,mapDispatchToProps)(Login)
