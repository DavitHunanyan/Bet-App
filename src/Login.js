import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './projectBet.css';

class Login extends Component {


    render() {
        return (
            <form className="form-signin flex" action="" method="POST">
                <h2 className="form-signin-heading">Login</h2>
                <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autoFocus="" />
                <input type="password" className="form-control" name="password" placeholder="Password" required=""/>
                <button className="btn" type="submit">Login</button>
            </form>
        );
    }
}

export default Login;

