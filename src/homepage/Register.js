import React from 'react';
import userService from "../service/userService";
class Register extends React.Component{
    register = ()=> {
        if(this.state.user.password!==this.state.validPassword){
            alert("ensure passwords are the same");
        }
        else if(this.state.user.username===null || this.state.user.username==""){
            alert("username invalid");
        }
        else if(this.state.user.password===null || this.state.user.password==""){
            alert("invalid password");
        }
        else if(this.state.user.type===null || this.state.user.type==""){
            alert("user type hasnt been choose");
        }
        else{
            userService.register(this.state.user)
                .then(status=>{
                    if(status===1){
                        this.props.history.push('/profile')

                    } else{
                        alert("user has been register");
                    }
                })
        }
    }

    state = {
        user:{
            username:"",
            password: "",
            type: ""
        },
        validPassword: ""
    }
    render(){
        return(
            <div className={"container"}>
                <br />
                <h1 className={"text-center"}>
                    Register
                </h1>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input className={"form-control"} placeholder="username" value={this.state.user.username} onChange={(e)=>{
                                let username = e.target.value;
                                this.setState(prevState=>({
                                    user:{
                                        ...prevState.user,
                                        username:username
                                    }}))}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input className={"form-control"}
                                   type="password"
                                   placeholder="password" value={this.state.user.password} onChange={(e)=>{
                                let password = e.target.value;
                                this.setState(prevState=>({
                                    user:{
                                        ...prevState.user,
                                        password:password
                                    }}))}}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Valid Password</label>
                        <div className="col-sm-10">
                            <input className={"form-control"} placeholder="valid password" value={this.state.validPassword}
                                   type="password"
                                   onChange={(e) => {
                                       let validPassword = e.target.value;
                                       this.setState(prevState => ({
                                           validPassword:validPassword
                                       }))
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className={"col-sm-2 col-form-label"}>User Type</label>
                        <select
                            placeholder={"Choose User Type"}
                            className={"col-sm-10"}
                            onChange={(e)=>{
                                let type = e.target.value;
                                this.setState(prevState=>({
                                    user: {
                                        ...prevState.user,
                                        type: type
                                    }
                                }))
                            }}
                            >
                            <option value={"RESTAURANT"}> RESTAURANT </option>
                            <option value={"CUSTOMER"}> CUSTOMER </option>
                        </select>
                    </div>

                </form>



                <button className={"btn btn-primary btn-block"} onClick={()=>this.register()}>
                    Register
                </button>

                <button className={"btn btn-block btn-success"} onClick={()=>this.props.history.push('/login')}>
                    Already Have Account ?
                </button>
            </div>

        )
    }
}
export default Register;
