import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Lists from './Lists'
import Settings from './Settings'



class Main extends Component {
    render() {
        return(

            <main>
             <Switch>
                 <Route exact path='/' component={Home} />
                 <Route path='/lists' component={Lists} />
                 <Route path='/settings' component={Settings} />
             </Switch>
             </main>
        )
    }
}
export default Main;