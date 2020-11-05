import React from 'react'

import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Login from '../pages/login'
import Register from '../pages/register'
import Navbar from '../components/Navbar';
import Home from '../pages/dani/Home';
import Reports from '../pages/dani/Reports';
import Products from '../pages/dani/Products';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Register} exact path="/register"/>
            <Route path='/' exact component={Login} />
            <Navbar />
            <Route path='/home' exact component={Home} />
            <Route path='/reports' component={Reports} />
            <Route path='/trips' component={Products} />
        </Switch>
    </BrowserRouter>
)

export default Routes
