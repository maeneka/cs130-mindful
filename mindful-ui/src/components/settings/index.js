import { h, Component } from 'preact';
import style from './style.css';

import Entry from '../entry';

export default class Settings extends Component {

    constructor() {
        super();
        let setting_data = this.getUserData();
        let suggestion = this.buildSuggestions(setting_data);
        this.state = {
            time: 1,
            url: "",
            sites: setting_data,
            suggestions: suggestion
        };
    }

    getUserData() {

        // insert code to get time limits
        // of user
        // format as below:
        return { // keys are urls, values are time in hours
            "www.facebook.com": 2,
            "www.instagram.com": 1,
            "www.twitter.com": 1
        }
    }

    buildSuggestions(settings) {
        let master_suggestions = [
            "www.facebook.com",
            "www.instagram.com",
            "www.twitter.com",
            "www.youtube.com",
            "www.reddit.com",
            "www.netflix.com"
        ];
        let suggestions = {};
        master_suggestions.forEach(e => {
            if(!(e in settings)) {
                suggestions[e] = 1;
            }
        });
        return suggestions;
    }

    decrement = (url) => {
        if(url == "") {
            this.setState(prev => {
                if(prev.time > 0) prev.time = prev.time - 1;
                return prev;
            });
        } else if (url in this.state.sites) {

            // replace this comment block
            // insert code to decrease time limit of
            // provided url by 60 minutes
            // do not decrement if limit is already 0

            //do not modify below
            this.setState(prev => {
                if(prev.sites[url] > 0) prev.sites[url] = prev.sites[url] - 1;
                return prev;
            });
        } else if (url in this.state.suggestions) {
            this.setState(prev => {
                if(prev.suggestions[url] > 0) prev.suggestions[url] = prev.suggestions[url] - 1;
                return prev;
            });
        }
    }

    increment = (url) => {
        if(url == "") {
            this.setState(prev => {
                prev.time = prev.time + 1;
                return prev;
            });
        } else if (url in this.state.sites) {

            // replace this comment block
            // insert code to increase time limit of
            // provided url by 60 minutes

            //do not modify below
            this.setState(prev => {
                prev.sites[url] = prev.sites[url] + 1;
                return prev;
            });
        } else if (url in this.state.suggestions) {
            this.setState(prev => {
                prev.suggestions[url] = prev.suggestions[url] + 1;
                return prev;
            });
        }
    }

    add = (url, time) => {
        if(url != "" && time >= 0) {

            // replace this comment block
            // insert code to add time limit of
            // provided url and set to time*60 minutes
            // (time is in hours)

            //do not modify below
            this.setState(prev => {
                prev.sites[url] = time;
                delete prev.suggestions[url];
                return prev;
            });
        }
    }

    remove = (url) => {
        this.setState(prev => {

            // replace this comment block
            // insert code to remove time limit of
            // provided url

            //do not modify below
            if(url in prev.sites) delete prev.sites[url];
            return prev;
        });
    }

    changeHandler = (event) => {
        this.setState(prev => {
            prev.url = event.target.value;
            return prev;
        });
    }

    submit = () => {
        if(this.state.url != "") {

            // replace this comment block
            // insert code to add a time limit
            // with this.state.url and set time
            // limit to
            // this.state.time * 60 Minutes
            // (this.state.time is in hours)

            //do not modify below
            this.setState(prev => {
                if(prev.url.toLowerCase() in prev.suggestions) delete prev.suggestions[prev.url.toLowerCase()];
                if(!(prev.url.toLowerCase() in prev.sites)) prev.sites[prev.url.toLowerCase()] = prev.time;
                prev.time = 1;
                prev.url = "";
                return prev;
            });
        }
    }

    render(props, state) {
        let sites = []
        let suggestions = []
        Object.keys(state.sites).forEach(e => {
            sites.push(<Entry action='remove' url={e} time={state.sites[e]} inc={this.increment} dec={this.decrement} rem={this.remove} />);
        });
        Object.keys(state.suggestions).forEach(e => {
            suggestions.push(<Entry action='add' url={e} time={state.suggestions[e]} inc={this.increment} dec={this.decrement} add={this.add}/>);
        });
        return <div class="page">
            <h3>mindful settings</h3>
            <div class={style.entries}>
            <table class={style.table}>
                <tr>
                    <th></th>
                    <th>MY SITES</th>
                    <th>HOURS</th>
                </tr>
                { sites }
                <tr>
                    <td><a class={style.btn} onClick={this.submit} href="#"><img src="/assets/images/+.png" /></a></td>
                    <td><input class={style.inpt} value={this.state.url} onChange={this.changeHandler}/></td>
                    <td><div class={style.right}><a class={style.btn} href="#" ><img src="/assets/images/<.png" onClick={() => {this.decrement("")}} /></a>{state.time}<a class={style.btn} href="#" ><img src="/assets/images/>.png" onClick={() => {this.increment("")}} /></a></div></td>
                </tr>
                <tr>
                    <th></th>
                    <th class={style.gray}>MINDFUL SUGGESTIONS</th>
                    <th></th>
                </tr>
                { suggestions }
            </table>
            </div>
            <a class="small-button" onClick={() => {props.fn('dashboard', {})}} href="#">
                <p>DASHBOARD</p>
            </a>
        </div>
    }

}
