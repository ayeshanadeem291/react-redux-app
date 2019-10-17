
import React, { Component } from 'react'
import Notifications from '/Notifications'
export default class Dashboard extends Component {
    render() {
        return (

            <div className= "dasboard container">
                <div className="row">
                    <div className="col s12 m6"></div>
                    <div className="col s12 m6 offset-m1"></div>
                <Notifications/>
                </div>
                
            </div>
        )
    }
}
