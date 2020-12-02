import { h, Component } from 'preact';
import style from './style.css';

export default class Entry extends Component {

    render(props, state) {
        if(props.action == 'add') {
            return <tr>
                <td class={style.left} ><a class={style.btn} href="#" onClick={() => {props.add(props.url, props.time)}} ><img src="/assets/images/+.png" /></a></td>
                <td>{props.url.toUpperCase()}</td>
                <td class={style.right} >
                    <a class={style.btn} href="#" onClick={() => {props.dec(props.url)}} >
                        <img src="/assets/images/<.png" />
                    </a>
                    {props.time}
                    <a class={style.btn} href="#" onClick={() => {props.inc(props.url)}} >
                        <img src="/assets/images/>.png" />
                    </a>
                </td>
            </tr>
        } else {
            return <tr>
                <td class={style.left} ><a class={style.btn} href="#" onClick={() => {props.rem(props.url)}} ><img src="/assets/images/x.png" /></a></td>
                <td>{props.url.toUpperCase()}</td>
                <td class={style.right} >
                    <a class={style.btn} href="#" onClick={() => {props.dec(props.url)}} >
                        <img src="/assets/images/<.png" />
                    </a>
                    {props.time}
                    <a class={style.btn} href="#" onClick={() => {props.inc(props.url)}} >
                        <img src="/assets/images/>.png" />
                    </a>
                </td>
            </tr>
        }
    }

}
