import React from 'react'
import { Switch, Route } from 'react-router-dom'
import shelfA from './shelves/shelfA'


export default (
    <Switch>
        
        <Route component= {shelfA}  path ='/api/shelves/:id'/>
        {/* <Route component= {shelfB}  path ='/api/shelf/:id'/>
        <Route component= {shelfC}  path ='/api/shelf/:id'/>
        <Route component= {shelfD}  path ='/api/shelf/:id'/> */}
        
        
    </Switch>
)