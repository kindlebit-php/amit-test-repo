import React, { Component } from 'react'
import loader from '../../img/loader.gif'
export default class Loader extends Component {
  render() {
    return (
      <div>
          <img className="text-aligin-center" src={loader} alt='loader'/>
      </div>
    )
  }
}
