import React from 'react'
import '../styling/Home.css'
import dude from '../images/dude.png'
import '../styling/vivify.min.css'


export default function Home() {
  return (
      <div className='text-white'>
          <div className='title'>
          <h1 className='title-name vivify fadeInLeft duration-1000'>RUI<br/> HUANG</h1>
          <div className='text-warning'> 
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100" height="4" 
          fill="currentColor" class="bi bi-dash-lg" viewBox="2 7.5 12 1">   
          <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"></path> </svg>
          <br/>
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100" height="4" style={{marginLeft:"4rem"}}
          fill="currentColor" class="bi bi-dash-lg" viewBox="2 7.5 12 1">   
          <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"></path> </svg>
          </div>
          <h4 className='title-title vivify popInBottom duration-2000'>web developer</h4>
          </div>

        <div className='d-flex justify-content-end'>
            <div className='vivify popInTop duration-1000'>
            <img src={dude} style={{marginTop:"-30rem", marginRight:"19vw"}} alt="illustration of guy walking"  height="600"></img>

            </div>
            
        </div>
       
    </div>

  )
}
