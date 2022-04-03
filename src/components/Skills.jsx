import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
        <div className='text-white '> 
        <div className='title'>
            <div id="educationpage" className='title-name-md'>education</div>
            <div className='text-warning'> 
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100" height="4" 
          fill="currentColor" class="bi bi-dash-lg" viewBox="2 7.5 12 1">   
          <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"></path> </svg>
          <br/>
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100" height="4" style={{marginLeft:"4rem"}}
          fill="currentColor" class="bi bi-dash-lg" viewBox="2 7.5 12 1">   
          <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"></path> </svg>
          </div>
            <div className='title-text mb-5 col-10 mt-4'>

            <table class="table text-white title-name-sm">
                <thead>
                <tr>
      <th scope="col">date</th>
      <th scope="col">school</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">08/2018 - 05/2022</td>
      <td  scope="row"><h3>Bachelor of Computer Science at San Francisco State University </h3><br/>
      <td >GPA: 3.9, Magna Cum Laude, Consistent Deans List</td>
      <td> <span className='text-success'>Courses: </span> <br></br>Programming Paradigms and Languages, Artifical Intelligence, Computer Networks Intro to Database Systems, Software Engineering, Software Development</td>
      <br></br>
      <td> <span className='text-success'>Languages: </span> <br></br>ES6 Javascript, SQL, HTML5, CSS3, Java, Python, Typescript <br/><br/>
      <span className='text-success'>Technologies: </span><br></br>ReactJs, RESTful APIs, Git, SpringJPA, SpringBoot, SpringSecurity, MySQL, NodeJS, Bootstrap5, Bcrypt<br/><br/>
      </td>
     

      </td>
   
    </tr>

    
  </tbody>
</table>

             
        </div>
        </div>
       
    </div>
    )
  }
}
