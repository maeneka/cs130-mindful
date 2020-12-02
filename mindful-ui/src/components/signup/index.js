import { h, Component } from 'preact';
import style from './style.css';

export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {username: "", pw1: "", pw2: ""};
    }

    username_change = (event) => {
        this.setState(prev => {
            prev.username = event.target.value;
            return prev;
        });
    }

    password1_change = (event) => {
        this.setState(prev => {
            prev.pw1 = event.target.value;
            return prev;
        })
    }

    password2_change = (event) => {
        this.setState(prev => {
            prev.pw2 = event.target.value;
            return prev;
        })
    }

    render(props, state) {
        let pw_match = [<div class="clearfix" style="height:11px;"></div>]
        if(state.pw1 != state.pw2) pw_match = [<p class={style.error} >passwords do not match</p>]
        if(props.error) {
            return <div class="page background">
                <div>
                    <h2>sign up</h2>
                    <input placeholder="username" value={state.username} onChange={this.username_change} ></input>
                    <p class={style.error} >username is taken</p>
                    <input type="password" placeholder="password" value={state.pw1} onChange={this.password1_change} ></input>
                    <input type="password" placeholder="confirm password" value={state.pw2} onChange={this.password2_change} ></input>
                    { pw_match }
                </div>
                <a class="big-button" href="#" onClick={() => {props.fn("createUser", {username: state.username, pw1: state.pw1, pw2: state.pw2 })}}>
                    <p>SIGN UP</p>
                </a>
                <p class="footer" >already have an account? <a href="#" onClick={() => {props.fn("goToLogin", {})}}>log in</a></p>
            </div>
        }
        return <div class="page background">
            <div>
                <h2>sign up</h2>
                <input placeholder="username" value={state.username} onChange={this.username_change} ></input>
                <div class="clearfix" style="height:11px;"></div>
                <input type="password" placeholder="password" value={state.pw1} onChange={this.password1_change} ></input>
                <input type="password" placeholder="confirm password" value={state.pw2} onChange={this.password2_change} ></input>
                { pw_match }
            </div>
            <a class="big-button" href="#" onClick={() => {props.fn("createUser", {username: state.username, pw1: state.pw1, pw2: state.pw2 })}}>
                <p>SIGN UP</p>
            </a>
            <p class="footer" >already have an account? <a href="#" onClick={() => {props.fn("goToLogin", {})}}>log in</a></p>
        </div>
    }

}
