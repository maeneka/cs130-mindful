import { h, Component } from 'preact';
import style from './style.css';

export default class Metric extends Component {

    render(props, state) {
        var sty = {
            width: props.width + "%"
        }
        return <div>
            <div class={style.title}><p>{props.url.toUpperCase()}</p><p>~{props.time} HR</p></div>
            <div class={style.bar} style={sty}></div>
        </div>
    }

}
