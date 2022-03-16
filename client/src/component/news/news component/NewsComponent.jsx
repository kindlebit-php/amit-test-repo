import React, { Component } from 'react'

export default class NewsComponent extends Component {
  render() {
      let {title , description ,urlToImage, url} = this.props.news;
      let key = this.props.key;
      console.log("key" ,key)

     // console.log("---" ,this.props.news )
    //  description = description.replace(/<[^>]+>/g, '');
  
    let NoteBook ={
      title : "",
      description: "",
      urlToImage:  "https://cdn.newsbook.com.mt/wp-content/uploads/2019/09/17134813/nb-1200-630.jpg",
      url: "/page-not-found"
    }

      description =  description ? description.replace(/<[^>]+>/g, '') : NoteBook.description ;

    return (
     < >

        <div  className="card" style={{width : "18rem"}}>
             <img src={urlToImage ? urlToImage : NoteBook.urlToImage} className="card-img-top" alt="..." />
             <div className="card-body">
                  <h5 className="card-title">{title ?  title : NoteBook.title}</h5>
                    <p className="card-text">{description  }...</p>
                    <a href={url} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
             </div>
             
        </div>
     </>
    )
  }
}
