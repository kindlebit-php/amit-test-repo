import React, { Component } from 'react'
import './App.css';
import NavBar from './component/navBar/Navbar'
import NewsSection from './component/news/new Section/NewsSection';
import SportsNews from './component/news/new Section/SportsNews';
import {Routes , Route} from 'react-router-dom'
import PageNotFount from './component/error page/PageNotFount'

// we can pass props
// country='in'
// category
// sources
// q
// pageSize={this.pageSize}
// int
// page
// int

 //business entertainment general health 
 //science  sports technology


export default class App extends Component {
  //  c = 'jhon';
  pageSize = 10;
  render() {


    return (
     <>
      <NavBar />
      <Routes>
          <Route path="/" element={<NewsSection  country='in' key='generalse' category='general' pageSize={this.pageSize} />} ></Route>
          <Route path="general"   element={<NewsSection key='general' country='in'  category='general' pageSize={this.pageSize}  />} ></Route>
          <Route path="sports"   element={<NewsSection key='sports' country='in'   category='sports' pageSize={this.pageSize} />} ></Route>
          <Route path="business"   element={<NewsSection key='business' country='in'  category='business' pageSize={this.pageSize} />} ></Route>
          <Route path="entertainment"    element={<NewsSection key='general' country='in'  category='entertainment' pageSize={this.pageSize} />} ></Route>
          <Route path="health"   element={<NewsSection key='entertainment' country='in'  category='health' pageSize={this.pageSize} />} ></Route>
          <Route path="technology"   element={<NewsSection key='technology' country='in'   category='technology' pageSize={this.pageSize} />} ></Route>
          <Route path="science"   element={<NewsSection key='science' country='in'   category='science' pageSize={this.pageSize} />} ></Route>
          <Route path="*"  element={<PageNotFount />} ></Route>
      </Routes>
     
      <h5> &copy; : This application is made for just learning purpose.</h5>
     </>
    )
  }
}
