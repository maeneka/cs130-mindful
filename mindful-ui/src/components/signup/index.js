import { h, Component } from 'preact';
import style from './style.css';

export default class SignUp extends Component {

    render(props, state) {
        return <div class="page background">
            <h2>sign up</h2>
            <input placeholder="username" ></input>
            <input type="password" placeholder="password" ></input>
            <input type="password" placeholder="confirm password" ></input>
            <a class="big-button" href="#" onClick={() => {props.fn("createUser", {})}}>
                <p>SIGN UP</p>
            </a>
            <p class="footer" >already have an account? <a href="#" onClick={() => {props.fn("goToLogin", {})}}>log in</a></p>
        </div>
    }

}
