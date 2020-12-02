import { h, Component } from 'preact';
import style from './style.css';

export default class Login extends Component {

    render(props, state) {
        return <div class="page background">
            <h2>log in</h2>
            <div class="clearfix" style="height:30px;"></div>
            <input placeholder="username" ></input>
            <input type="password" placeholder="password" ></input>
            <div class="clearfix" style="height:30px;"></div>
            <a class="big-button" href="#" onClick={() => {props.fn("login", {})}}>
                <p>LOG IN</p>
            </a>
            <p class="footer" >new to mindful? <a href="#" onClick={() => {props.fn("goToSignUp", {})}}>sign up</a></p>
        </div>
    }

}
