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
                if(payload.username == "" || payload.pw == "") this.setState({ state: 5 });

                // inset code to log in user
                // payload argument will look like { username: <username>, pw: <password> }
                // set state to 3 on success
                // set state to 5 on failure

                // replace the 4 lines below
                if(payload.username && payload.pw && payload.username != "" && payload.pw != "")
                    this.setState({ state: 3 });
                else
                    this.setState({ state: 5 });
                break;
            case 'createUser':
                if(payload.username == "" || payload.pw1 == "" || payload.pw1 != payload.pw2) return;

                // inset code to create user
                // payload argument will look like { username: <username>, pw1: <password>, pw2: <password> }
                // set state to 3 on success
                // set state to 6 on failure

                // replace the 4 lines below
                if(payload.username && payload.pw1 && payload.pw2 && payload.pw1 == payload.pw2 && payload.pw1 != "" && payload.username != "")
                this.setState({ state: 3 });
                else if (payload.username == "")
                this.setState({state: 6});
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
            case 5:
                return <div id="app">
                    <Login fn={this.action} error={true} />
                </div>
            case 6:
    	        return <div id="app">
    	            <SignUp fn={this.action} error={true} />
    	        </div>
        }
    }

}
