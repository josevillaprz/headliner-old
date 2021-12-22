import React from 'react';

import { Route, Switch } from 'react-router-dom';

// import pages
import HomePage from '../pages/Homepage'
import Blog from '../pages/Blog'
import EventDetail from '../pages/EventDetail'

const Routes = (props) => {
    return(
        <React.Fragment>
        <Switch>
            <Route exact path='/' render={() => <HomePage events={props.events}/>}/>
            <Route exact path='/blog' component={Blog}/>
            <Route path='/:id' component={EventDetail}/>
        </Switch>
        </React.Fragment>
    )
}

export default Routes;