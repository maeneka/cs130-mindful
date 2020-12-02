import { h, Component } from 'preact';
import style from './style.css';

import Entry from '../entry';

export default class Settings extends Component {

    constructor() {
        super();
        this.state = { 
            time: 1, 
            url: "",
            sites: {
                "www.facebook.com": 2,
                "www.instagram.com": 1,
                "www.twitter.com": 1
            },
            suggestions: {"www.reddit.com": 2}, 
        };
    }

    decrement = (url) => {
        if(url == "") {
            this.setState(prev => {
                if(prev.time > 0) prev.time = prev.time - 1;
                return prev;
            });
        } else if (url in this.state.sites) {
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
            this.setState(prev => {
                prev.sites[url] = time;
                delete prev.suggestions[url];
                return prev;
            });
        }
    }
    
    remove = (url) => {
        this.setState(prev => {
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
            console.log(this.state.url + " " + this.state.time);
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
