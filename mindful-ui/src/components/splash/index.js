import { h, Component } from 'preact';
import style from './style.css';

export default class Splash extends Component {

    render(props, state) {
        return <div class="page background">
            <p class="subtitle" >WELCOME TO</p>
            <h1>mindful</h1>
            <img src="/assets/images/welcome.png" />
            <a class="big-button" href="#" onClick={() => {props.fn('goToLogin', {})}}>
                <p>LOG IN</p>
            </a>
            <p class="footer" >new to mindful? <a href="#" onClick={() => {props.fn('goToSignUp', {})}} >sign up</a></p>
        </div>
    }

}
