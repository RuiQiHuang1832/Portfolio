import React from 'react'

export default function About() {
  return (
    <div className='text-white border-bottom' >
      <div className='title'>
        <div id="aboutpage" className='title-name-md'>about me</div>
        <div className='doubleLineColors'>
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100" height="4"
            fill="currentColor" class="bi bi-dash-lg" viewBox="2 7.5 12 1">
            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"></path> </svg>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100" height="4" style={{ marginLeft: "4rem" }}
            fill="currentColor" class="bi bi-dash-lg" viewBox="2 7.5 12 1">
            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"></path> </svg>
        </div>
        <div className='title-text mb-5 col-7 mt-4 fontDidact'>
          Hi there! My name is Rui and I'm a frontend developer based in California. Currently, I'm actively pursuing entry-level positions as a software engineer. I'm driven by the prospect of utilizing my skills to elevate user experiences and make meaningful contributions to cutting-edge projects.

        </div>
      </div>

    </div>
  )
}
