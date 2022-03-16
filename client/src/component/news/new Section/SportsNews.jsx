import React, { Component } from 'react'
import NewsComponent from '../news component/NewsComponent'

export default class SportsNews extends Component {
    state = {
        news: []
    }
    
    componentDidMount() {
        fetch('https://newsapi.org/v2/everything?q=sports&apiKey=fc8bed73422d4c16b01fb6a6a36aaaaa&pageSize=10&page=3')
        .then((response) => response.json())
        .then(newsList => {
            console.log("newsList" ,newsList.articles)
            this.setState({ news: newsList.articles });
        });
    }
  render() {

  
    return (
    <>
          <div className="container my-3">
              <h2>News Book - Todays Sports Mews</h2>
              <div className="row">

                  {this.state.news.map((data , key) => (
                     <div className="col-md-4">
                     <NewsComponent key={key} news={data} />
                 </div>
                ))}
              </div>

          </div>
    </>
    )
  }
}
