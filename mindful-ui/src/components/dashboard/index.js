import { h, Component } from 'preact';
import style from './style.css';

import Delta from '../delta';
import Metric from '../metric';

export default class Dashboard extends Component {

    constructor() {
        super();
        let daily_data = this.getTodayData();
        this.state = { state: 0, total_min: daily_data.total_min, stats: daily_data.stats, delta: daily_data.delta };
    }

    getTodayData() {
        // insert code to get metrics
        // for the current day
        // format as below:
        return {
            total_min: 345, // whole number minutes
            delta: -5, // whole number percents ( down 5% => -5, not -0.05 )
            stats: { // usage data, key is url, value is time in minutes
                "www.facebook.com": 200,
                "www.instagram.com": 80,
                "www.twitter.com": 65
            }
        }
    }

    getWeekData() {
        return {
            // insert code to get metrics
            // for the current week
            // format as below:
            total_min: 1025, // whole number minutes
            delta: 10, // whole number percents ( down 5% => -5, not -0.05 )
            stats: { // usage data, key is url, value is time in minutes
                "www.facebook.com": 600, // whole number minutes
                "www.instagram.com": 300,
                "www.twitter.com": 125
            }
        }
    }

    getMonthData() {
        return {
            // insert code to get metrics
            // for the current month
            // format as below:
            total_min: 4040, // whole number minutes
            delta: -10, // whole number percents ( down 5% => -5, not -0.05 )
            stats: { // usage data, key is url, value is time in minutes
                "www.facebook.com": 3000,
                "www.instagram.com": 700,
                "www.twitter.com": 340
            }
        }
    }

    action = (name) => {
        switch(name) {
            case 'today':
                console.log(0);
                let daily_data = this.getTodayData();
                this.setState({ state: 0, total_min: daily_data.total_min, stats: daily_data.stats, delta: daily_data.delta });
                break;
            case 'week':
                console.log(3);
                let week_data = this.getWeekData();
                this.setState({ state: 1, total_min: week_data.total_min, stats: week_data.stats, delta: week_data.delta });
                break;
            case 'month':
                console.log(4);
                let month_data = this.getMonthData();
                this.setState({ state: 2, total_min: month_data.total_min, stats: month_data.stats, delta: month_data.delta });
                break;
        }
    }

    render = (props, state) => {
        let minutes = state.total_min % 60;
        let hours = (state.total_min - minutes) / 60;

        let delta_component = []
        let button_components = []
        if(state.state == 0) {
            delta_component = [<Delta delta={state.delta} timescale="yesterday" />];
            button_components = [
                <a class="mini-button" onClick={() => {this.action('today')}} href="#">TODAY</a>,
                <a class="white-btn" onClick={() => {this.action('week')}} href="#">WEEK</a>,
                <a class="white-btn" onClick={() => {this.action('month')}} href="#">MONTH</a>
            ];
        } else if(state.state == 1) {
            delta_component = [<Delta delta={state.delta} timescale="last week" />];
            button_components = [
                <a class="white-btn" onClick={() => {this.action('today')}} href="#">TODAY</a>,
                <a class="mini-button" onClick={() => {this.action('week')}} href="#">WEEK</a>,
                <a class="white-btn" onClick={() => {this.action('month')}} href="#">MONTH</a>
            ];
        } else if(state.state == 2) {
            delta_component = [<Delta delta={state.delta} timescale="last month" />];
            button_components = [
                <a class="white-btn" onClick={() => {this.action('today')}} href="#">TODAY</a>,
                <a class="white-btn" onClick={() => {this.action('week')}} href="#">WEEK</a>,
                <a class="mini-button" onClick={() => {this.action('month')}} href="#">MONTH</a>
            ];
        }

        let max = Math.max(...Object.values(state.stats));
        let entries = [];
        Object.keys(state.stats).forEach(e => {
            entries.push(<Metric url={e} time={Math.round(state.stats[e]/15)/4} width={(state.stats[e] * 100/max)} />);
        });

        return <div class="page">
            <div>
                <h3>mindful dashboard</h3>
                <div class={style.nav}>
                    { button_components }
                </div>
                <h1 class={style.hr}>{hours} Hrs</h1>
                <h2 class={style.min}>{minutes} Minutes</h2>
                { delta_component }
            </div>
            <div>
                <p class={style.gray} >BREAKDOWN</p>
                <div class={style.breakdown} >
                    { entries }
                </div>
            </div>
            <a class="small-button" onClick={() => {props.fn('settings', {})}} href="#">
                <p>SETTINGS</p>
            </a>
        </div>
    }

}
