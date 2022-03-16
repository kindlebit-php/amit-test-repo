import React from 'react';
import {NavLink , Outlet} from 'react-router-dom'

let Layout = ()=>{
    return(
        <>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <div className="container-fluid">
                        <NavLink  className='navbar-brandS' to='#'>NavBar </NavLink>
                    

                        <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target='#navbarNavAltMarkup' aria-controls="navNavAltMarkup" aria-expanded="false" arai-label="Toggle naigation"></button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                               <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className='nav-item nav-link active' to='/'> home</NavLink>
                               <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className='nav-item nav-link ' to='/mission'> our mission</NavLink>
                               <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className='nav-item nav-link' to='/about-us'> about us</NavLink>
                               <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className='nav-item nav-link' to='/product/:id'>Products </NavLink>
                               <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className='nav-item nav-link' to='/dashboard'>Dashboard </NavLink>
                               <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className='nav-item nav-link' to='/searchImg'>Search image </NavLink>
                               <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className='nav-item nav-link' to='/sign-up'>Sign up </NavLink>
                               <NavLink style={({isActive})=>{return{backgroundColor: isActive ? 'red' : ''}}} className='nav-item nav-link' to='/table'>Table </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
                <Outlet />

        </>
    )
}

export default Layout;