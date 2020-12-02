import { h, Component } from 'preact';
import style from './style.css';

export default class Login extends Component {

    constructor() {
        super();
        this.state = { username: "", pw: ""};
    }

    username_change = (event) => {
        this.setState(prev => {
            prev.username = event.target.value;
            return prev;
        });
    }

    password_change = (event) => {
        this.setState(prev => {
            prev.pw = event.target.value;
            return prev;
        })
    }

    render = (props, state) => {
        if(props.error) {
            return <div class="page background">
                <h2>log in</h2>
                <div class="clearfix" style="height:30px;"></div>
                <input placeholder="username" value={state.username} onChange={this.username_change} ></input>
                <input type="password" placeholder="password" value={state.pw} onChange={this.password_change} ></input>
                <p class={style.error} >username or password is incorrect</p>
                <div class="clearfix" style="height:19px;"></div>
                <a class="big-button" href="#" onClick={() => { let u = state.username; let p = state.pw; this.setState({username: u, pw: ""}); props.fn("login", {username: u, pw: p})}}>
                    <p>LOG IN</p>
                </a>
                <p class="footer" >new to mindful? <a href="#" onClick={() => { props.fn("goToSignUp", {}) }}>sign up</a></p>
            </div>
        }
        return <div class="page background">
            <h2>log in</h2>
            <div class="clearfix" style="height:30px;"></div>
            <input placeholder="username" value={state.username} onChange={this.username_change} ></input>
            <input type="password" placeholder="password" value={state.pw} onChange={this.password_change} ></input>
            <div class="clearfix" style="height:30px;"></div>
            <a class="big-button" href="#" onClick={() => { let u = state.username; let p = state.pw; this.setState({username: u, pw: ""}); props.fn("login", {username: u, pw: p})}}>
                <p>LOG IN</p>
            </a>
            <p class="footer" >new to mindful? <a href="#" onClick={() => { props.fn("goToSignUp", {}) }}>sign up</a></p>
        </div>
    }

}
