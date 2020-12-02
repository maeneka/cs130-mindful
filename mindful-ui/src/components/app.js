import { h, Component } from 'preact';

import Splash from './splash';
import Login from './login';
import SignUp from './signup';
import Settings from './settings';
import Dashboard from './dashboard';

export default class App extends Component {

    constructor() {
        super();
        this.state = { state: 0 };
    }

    action = (name, payload) => {
        switch(name) {
            case 'goToSignUp':
                this.setState({ state: 2 });
                break;
            case 'goToLogin':
                this.setState({ state: 1 });
                break;
            case 'settings':
                this.setState({ state: 3 });
                break;
            case 'login':
                this.setState({ state: 3 });
                break;
            case 'createUser':
                this.setState({ state: 3 });
                break;
            case 'dashboard':
                this.setState({ state: 4 });
                break;
        }
    }

    render(props, state) {
        switch(state.state) {
            case 0:
	            return <div id="app">
	            	<Splash fn={this.action} />
	            </div>
            case 1:
	            return <div id="app">
	            	<Login fn={this.action} />
	            </div>
            case 2:
	            return <div id="app">
	            	<SignUp fn={this.action} />
	            </div>
            case 3:
	            return <div id="app">
	            	<Settings fn={this.action} />
	            </div>
            case 4:
	            return <div id="app">
	            	<Dashboard fn={this.action} />
	            </div>
        }
    }

}
