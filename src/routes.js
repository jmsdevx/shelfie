import React from 'react'

import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'

import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/add" component={Form}/>
        <Route path="/edit/:id" component={Form} />
    </Switch>
)