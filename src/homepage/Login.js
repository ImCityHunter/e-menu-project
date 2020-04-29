import React from 'react';
import userService from "../service/userService";
class Login extends React.Component{
    login = () => {
        userService.login(this.state.user)
            .then(status=>

                {
                    console.log( "log in status: " + status);
                    this.props.history.push('/profile')
                }


            )

    }


    state = {
        user:{
            username:'',
            password: '',
        }
    }
    render(){
        return(
            <div className={"container"}>
                <br/>
                <h1 className={"text-center"}>Login</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor={this.state.user.username} className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input className={"form-control"} placeholder="username" value={this.state.user.username}
                                   onChange={(e) => {
                                       let username = e.target.value;
                                       this.setState(prevState => ({
                                           user: {
                                               ...prevState.user,
                                               username: username
                                           }
                                       }))
                                   }}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor={this.state.user.password} className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input className={"form-control"} placeholder="password" value={this.state.user.password}
                                   onChange={(e) => {
                                       let password = e.target.value;
                                       this.setState(prevState => ({
                                           user: {
                                               ...prevState.user,
                                               password: password
                                           }
                                       }))
                                   }}/>
                        </div>
                    </div>
                </form>

                <button
                    className={"btn btn-primary btn-block"}
                    onClick={()=>this.login()}>login</button>

                <button
                    className={"btn btn-block btn-warning"}
                    onClick={()=>this.props.history.push('register')}>Sign up</button>
            </div>
        )
    }
}
export default Login;
