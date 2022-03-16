import React, { Component } from 'react'
import NewsComponent from '../news component/NewsComponent'
import Loader from '../../loader/Loader'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


// parseInt("10")


let api_key = 'fc8bed73422d4c16b01fb6a6a36aaaaa'
// url
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`


export default class NewsSection extends Component {

    static defaultProps = {
        country: 'in',
        category: '',
        pageSize: 10
      };
      static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string ,
        pageSize: PropTypes.number
      };


    constructor() {
        super();
        this.state = {
            news: [],
            page:1,
            precolor:"#8d8d88",
            loader: false,
            totalResults: 0
            
        }
    }
    

   // https://newsapi.org/v2/top-headlines?country=$in&apiKey=fc8bed73422d4c16b01fb6a6a36aaaaa&pageSize=10&page=1&category=general
    

   // update news function
    updateNews() {
        this.setState({loader:true})
       // console.log(`hh ${this.props.category} , = ${this.props.pageSize}`)
        fetch(`${url}&pageSize=${this.props.pageSize}&page=${this.state.page}&category=${this.props.category}`)
        .then((response) => response.json())
        .then(newsList => {
           // console.log("newsList" ,newsList.articles)
            this.setState({ 
                            news: newsList.articles , 
                            loader : false
            });
        });
    }



    componentDidMount() {
        this.updateNews()
    }

    handleNext =()=>{
        // console.log("state" ,this.state.page)
        // console.log("hello")
        this.setState({page:this.state.page +1})
        this.updateNews()
    }
        
    


    handlePrevious=()=>{
        this.setState({page:this.state.page -1})
        this.updateNews()
    }


    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const urlis = `${url}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(urlis);
        let parsedData = await data.json()
        this.setState({
            news: this.state.news.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
    };
    
    // handlePrevious=()=>{
    //     this.setState({loader:true})
    //     fetch(`${url}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}&category=${this.props.category}`)
    //     .then((response) => response.json())
    //     .then(newsList => {
          
    //         this.setState((state)=>({
    //              news: newsList.articles ,
    //              page: state.page-1,
    //              precolor: state.page <= 1? "#8d8d88" : "#edfbff",
    //              loader : false
    //             } ));
    //     });
    // }

//   render() {

  
//     return (
//      <>
//      {this.state.loader &&  <Loader  /> }
//           <div className="container my-3">
//               <h2 className="text-center">News Book - Todays Top Headlines</h2>
//               { !this.state.loader && 
//               <div className="row">

//                   {this.state.news.map((data , key) => (
//                      <div key={key}  className="col-md-4">
//                      <NewsComponent news={data} />
//                  </div>
//                 ))}
//               </div>
//               }
//               <div className="d-flex justify-content-between">
//                 <button style={{backgroundColor: this.state.precolor}} 
//                 onClick={this.handlePrevious} type="button" 
//                 className="btn btn-outline-primary">Previous</button>

//                 <button onClick={this.handleNext} type="button"
//                 className="btn btn-outline-primary">Next</button>
//               </div>

//           </div>
//     </>
//     )
//   }



render() {

  
    return (
     <>

         
              <InfiniteScroll
              
                dataLength={this.state.news.length}
                next={this.fetchMoreData}
                hasMore={this.state.news.length !== this.state.totalResults}
                loader={<Loader />}
                >
             <div className="container my-3">
              <h2 className="text-center">News Book - Todays Top Headlines</h2>
                 <div className="row">
                    {this.state.news.map((data , key) => (
                    <div key={key}  className="col-md-4">
                    <NewsComponent news={data} />
                    </div>
                    ))}
                </div>
                </div>
        </InfiniteScroll>

        
    </>
    )
  }        
}
