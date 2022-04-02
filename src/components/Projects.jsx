import React from 'react'

export default function Projects() {
  return (
    <div className='text-white '> 
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

        <div className='d-flex justify-content-center my-5'>
            <div className='col-10'>
          <table class="table text-white">
                <thead>
                <tr>
      <th scope="col">name</th>
      <th scope="col">summary</th>
      <th scope="col">technology</th>
      <th scope="col">date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
</div>
    </div>
  )
}
