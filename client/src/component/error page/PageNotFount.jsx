import React, { Component } from 'react'
 import './index.css'

export default class PageNotFount extends Component {
  render() {
    return (
        <div style={{backgroundColor: "black" , color: "black" , paddingTop: "100px"}} id="particles-js">
            <div className="page-404">
                <div className="outer">
                    <div className="middle">
                        <div className="inner">
                            <div className="inner-circle"><i className="fa fa-home"></i><span>404</span></div>
                            <span className="inner-status">Oops! You're lost</span>
                            <span className="inner-detail" style={{color:"black" , padding: "5px"}}>
                            We can not find the page you're looking for.
                            <a href="/" className="btn btn-info mtl"><i className="fa fa-home"></i>&nbsp;
                            Return home 
                            </a> 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
