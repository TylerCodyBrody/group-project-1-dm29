import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ShelfA  from './shelves/shelfA.js'


export default (
    <Switch>
        
        <Route component= {ShelfA}  path ='/aaa'/>
        {/* <Route component= {shelfB}  path ='/api/shelf/:id'/>
        <Route component= {shelfC}  path ='/api/shelf/:id'/>
        <Route component= {shelfD}  path ='/api/shelf/:id'/> */}
        
        
    </Switch>
)