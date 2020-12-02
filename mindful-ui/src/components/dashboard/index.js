import { h, Component } from 'preact';
import style from './style.css';

import Delta from '../delta';
import Metric from '../metric';

export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = { state: 0 };
    }

    action = (name) => {
        switch(name) {
            case 'today':
                this.setState({ state: 0 });
                break;
            case 'week':
                this.setState({ state: 1 });
                break;
            case 'month':
                this.setState({ state: 2 });
                break;
        }
    }

    render = (props, state) => {
        if(state.state == 0) {
            return <div class="page">
                <div>
                    <h3>mindful dashboard</h3>
                    <div class={style.nav}>
                        <a class="mini-button" onClick={() => {this.action('today')}} href="#">TODAY</a>
                        <a class="white-btn" onClick={() => {this.action('week')}} href="#">WEEK</a>
                        <a class="white-btn" onClick={() => {this.action('month')}} href="#">MONTH</a>
                    </div>
                    <h1 class={style.hr}>5 Hrs</h1>
                    <h2 class={style.min}>43 Minutes</h2>
                    <Delta delta={-5} timescale="yesterday" />
                </div>
                <div>
                    <p class={style.gray} >BREAKDOWN</p>
                    <div class={style.breakdown} >
                    <Metric url="facebook.com" time={1.5} width={100}/>
                    <Metric url="facebook.com" time={1.5} width={100}/>
                    <Metric url="facebook.com" time={1.5} width={100}/>
                    <Metric url="facebook.com" time={1.5} width={100}/>
                    </div>
                </div>
                <a class="small-button" onClick={() => {props.fn('settings', {})}} href="#">
                    <p>SETTINGS</p>
                </a>
            </div>
        } else if(state.state == 1) {
            return <div class="page">
                <div>
                    <h3>mindful dashboard</h3>
                    <div class={style.nav}>
                        <a class="white-btn" onClick={() => {this.action('today')}} href="#">TODAY</a>
                        <a class="mini-button" onClick={() => {this.action('week')}} href="#">WEEK</a>
                        <a class="white-btn" onClick={() => {this.action('month')}} href="#">MONTH</a>
                    </div>
                    <h1 class={style.hr}>5 Hrs</h1>
                    <h2 class={style.min}>43 Minutes</h2>
                    <Delta delta={-5} timescale="last week" />
                </div>
                <div>
                    <p class={style.gray} >BREAKDOWN</p>
                    <div class={style.breakdown} >
                    <Metric url="facebook.com" time={1.5} width={100}/>
                    <Metric url="facebook.com" time={1.5} width={100}/>
                    <Metric url="facebook.com" time={1.5} width={100}/>
                    <Metric url="facebook.com" time={1.5} width={100}/>
                    </div>
                </div>
                <a class="small-button" onClick={() => {props.fn('settings', {})}} href="#">
                    <p>SETTINGS</p>
                </a>
            </div>
        } else if(state.state == 2) {
             return <div class="page">
                <div>
                    <h3>mindful dashboard</h3>
                    <div class={style.nav}>
                        <a class="white-btn" onClick={() => {this.action('today')}} href="#">TODAY</a>
                        <a class="white-btn" onClick={() => {this.action('week')}} href="#">WEEK</a>
                        <a class="mini-button" onClick={() => {this.action('month')}} href="#">MONTH</a>
                    </div>
                    <h1 class={style.hr}>5 Hrs</h1>
                    <h2 class={style.min}>43 Minutes</h2>
                    <Delta delta={-5} timescale="last month" />
                </div>
                <div>
                    <p class={style.gray} >BREAKDOWN</p>
                    <div class={style.breakdown} >
                    <Metric url="facebook.com" time={1.5} width={100}/>
                    <Metric url="facebook.com" time={1.5} width={100}/>
                    <Metric url="facebook.com" time={1.5} width={100}/>
                    <Metric url="facebook.com" time={1.5} width={100}/>
                    </div>
                </div>
                <a class="small-button" onClick={() => {props.fn('settings', {})}} href="#">
                    <p>SETTINGS</p>
                </a>
            </div>
        }
    }

}
