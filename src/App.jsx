import React, { PureComponent } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Demo from 'containers/Demo';

export default class App extends PureComponent {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Demo} />
                </Switch>
            </Router>
        )
    }
}