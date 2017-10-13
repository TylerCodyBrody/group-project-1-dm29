import React, { Component } from 'react'
import logo from '../assets/logo.png'
import router from '../router.js'


export default class ShelfA extends Component {

constructor() {

   super(); 

    this.state = {




    }



}

    render() {
        return (
                <div className="shlefa_wrapper">
                        <div className="shelfa_header">

                        </div>
                        <img src={logo} id="shelf_logo"/>
                        <div className="shelfa_bins_container">
                        <div className="shelfa_bin">
                            <span className="shelfa_bintext">
                                + Add inventory to bin 
                            </span>
                            </div>
                            <div className="shelfa_bin">
                            <span className="shelfa_bintext">
                                + Add inventory to bin 
                            </span>
                            </div>
                            <div className="shelfa_bin">
                            <span className="shelfa_bintext">
                                + Add inventory to bin 
                            </span>
                            </div>
                            <div className="shelfa_bin">
                            <span className="shelfa_bintext">
                                + Add inventory to bin 
                            </span>
                            </div>
                            <div className="shelfa_bin">
                            <span className="shelfa_bintext">
                                + Add inventory to bin 
                            </span>
                            </div>
                            </div>
                            </div>
                            
                            
                    
                




        )
    }
    




}