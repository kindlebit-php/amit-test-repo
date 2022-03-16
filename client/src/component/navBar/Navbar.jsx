import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">News Book</a> */}
                    <NavLink className="navbar-brand" to="#">News Book</NavLink>
                    <button 
                    className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                  {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                                  <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                              </li>
                              <li className="nav-item">
                                  <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className="nav-link" to="/sports">Sports</NavLink>
                              </li>
                              <li className="nav-item">
                                   <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className="nav-link" to="/business">Business</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className="nav-link" to="/entertainment">entertainment</NavLink>
                              </li>
                              <li className="nav-item">
                                     <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className="nav-link" to="/science">Science</NavLink>
                              </li>
                              <li className="nav-item">
                                     <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className="nav-link" to="/technology">Technology</NavLink>
                              </li>
                        </ul>
                    </div>
        </div>
        </nav>
        </>
    )
  }
}

export default Navbar