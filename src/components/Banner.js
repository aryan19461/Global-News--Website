import React, { Component } from 'react'
import vb from './vb.png'
import "./banner.css"
export class Banner extends Component {
  render() {
    return (
      <div className='bg__banner'>
        <img className='ban' src={vb} alt="" />
       
      </div>
    )
  }
}

export default Banner
