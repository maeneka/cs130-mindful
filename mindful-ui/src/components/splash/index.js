import { h, Component } from 'preact';
import style from './style.css';

export default class Splash extends Component {

    render(props, state) {
        return <div class="page background">
            <div class={style.center}>
                <p class="subtitle" >WELCOME TO</p>
                <h1>mindful</h1>
                <img class={style.welcome} src="/assets/images/welcome.png" />
                </div>
            <a class="big-button" href="#" onClick={() => {props.fn('goToLogin', {})}}>
                <p>LOG IN</p>
            </a>
            <p class="footer" >new to mindful? <a href="#" onClick={() => {props.fn('goToSignUp', {})}} >sign up</a></p>
        </div>
    }

}
