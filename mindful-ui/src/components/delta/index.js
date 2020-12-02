import { h, Component } from 'preact';
import style from './style.css';

import Entry from '../entry';

export default class Delta extends Component {

    render(props, state) {
        if(props.delta < 0) {
            return <div class={style.delta} ><img src="/assets/images/down.png" /><p class={style.green} >{props.delta * -1}%</p> <p> from {props.timescale}</p></div>
        } else {
            return <div class={style.delta} ><img src="/assets/images/up.png" /><p class={style.red} >{props.delta}%</p> <p> from {props.timescale}</p></div>
        }
    }

}
