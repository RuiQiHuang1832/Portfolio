import React from 'react'
import '../styling/Projects.css'

export default function Projects() {
  return (
    <div className='text-white border-bottom'> 
        <div className='title'>
            <div id='projectspage' className='title-name-md'>projects</div>
            <div className='text-warning'> 
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100" height="4" 
          fill="currentColor" class="bi bi-dash-lg" viewBox="2 7.5 12 1">   
          <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"></path> </svg>
          <br/>
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100" height="4" style={{marginLeft:"4rem"}}
          fill="currentColor" class="bi bi-dash-lg" viewBox="2 7.5 12 1">   
          <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"></path> </svg>
          </div>
        </div>
        <div className='d-flex justify-content-center title-name-sm  my-5'>
        <div className='col-9'>
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card border-0">
      <div  id="bgDark" class="card-body">
        <h5 class="card-title text-info"><span className='text-decoration-underline'>Tailwind </span> <span className='d-flex justify-content-end'>(01/2022 - PRESENT)</span></h5>
        <p class="card-text"><ul>
        <li>
        Designing a forum based website that allows
        users to sign up, log in, create posts, and edit various settings
        </li>
        <br/>
        <li>
          Implementing the frontend using: Reactjs, Axios, Fetch API, Bootstrap5, in Javascript CSS and HTML5.
        </li>
        <br/>
        <li>
          Implementing the backend using: SpringJPA, SpringBoot, SpringSecurity, in Java and MYSQL for Database
        </li>
        <br/>
        <li>
          Provided async HTTP methods that utilize endpoints in order to perform CRUD activities
        </li>
        <br/>
        <li>
          Utilized HDD local storage to increase performance and cache results to prevent bottlenecking and preserve resources.
        </li>

        </ul></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0">
      <div  id="bgDark" class="card-body">
        <h5 class="card-title text-info "><span className='text-decoration-underline'>Discord Bot</span> <span className='d-flex justify-content-end'>(12/2021 - 08/2021)</span></h5>
        <p class="card-text"><ul>
        <li>
          Created a discord bot in Python tha tests against a database model
        </li>
        <br/>
        <li>
          Generated 8 business rules for a Blood Donation database system.
        </li>
        <br/>
        <li>
          Implemented using: MySql, Python, DiscordAPI
        </li>
        </ul></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0">
      <div  id="bgDark" class="card-body">
        <h5 class="card-title text-info"> <span className='text-decoration-underline'>Tutoring Web App</span> <span className='d-flex justify-content-end'>(12/2021 - 08/2021)</span></h5>
        <p class="card-text"><ul>
        <li>
          Designed a web app for my senior team project
        </li>
        <br/>
        <li>
          Implemented using: AWS EC2, MySQL, Nodejs, Javascript, ExpressJS, ReactJS, Google analytics
        </li>
        <br/>
        </ul></p>
      </div>
    </div>
  </div>
  
  <div class="col">
    <div class="card border-0">
  
      <div  id="bgDark" class="card-body">
        <h5 class="card-title text-info "><span className='text-decoration-underline'>Forager</span> <span className='d-flex justify-content-end'>(07/2021 - 08/2020)</span></h5>
        <p class="card-text"><ul>
        <li>
        Designed a cross-platform Java game in a 
      development framework known as Libgdx
      which works on multiple devices
        </li>
        <br/>
        <li>
          Implemented using: Java, Libgdx Library, Tiled, paint.net, box2d and Freetype
        </li>
        <br/>
        <li>
          Rendered the animation, objects save states, cursor, sound effects and music
        </li>
        <br/>
        <li>
          Integrated collision detection using box2D
        </li>
        </ul></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0">
      <div  id="bgDark" class="card-body">
        <h5 class="card-title text-info"><span className='text-decoration-underline'>Rosie</span> <span className='d-flex justify-content-end'>(04/2021 - 12/2020)</span></h5>
        <p class="card-text"> <ul>
        <li>
          Designed a game using Jframe that allows users to pick choices and display certain results at the end.
        </li>
        <br/>
        <li>
          Implemented type writer effect, music and text narration. Done in Java and Jframe
        </li>
        <br/>
        </ul></p>
      </div>
      
    </div>
    
  </div>
  
</div>
</div>
</div>
       
    
  
    
    </div>
  )
}
