import React from 'react'
import '../styling/Projects.css'

export default function Projects() {
  return (
    <div className='text-white border-bottom'>
      <div className='title'>
        <div id='projectspage' className='title-name-md'>projects</div>
        <div className='doubleLineColors'>
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100" height="4"
            fill="currentColor" class="bi bi-dash-lg" viewBox="2 7.5 12 1">
            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"></path> </svg>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100" height="4" style={{ marginLeft: "4rem" }}
            fill="currentColor" class="bi bi-dash-lg" viewBox="2 7.5 12 1">
            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"></path> </svg>
        </div>
      </div>
      <div className='d-flex justify-content-center title-name-sm  my-5'>
        <div className='col-10 container ps-lg-4'>
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card border-0">
                <div id="bgDark" class="card-body">
                  <h5 class="card-title text-secondary"><span className='text-decoration-underline'><a className='text-warning' href='https://github.com/RuiQiHuang1832/RuiWebApp'>Interactive Web Forum</a> </span> <span className='d-flex justify-content-end'>01/2022 - 08/2023</span></h5>
                  <p class="card-text"><ul>
                    <li>
                      Independently designed an Interactive Web Forum
                      web app that allows users to sign up, log in,
                      create posts, edit posts, and edit various settings
                    </li>
                    <br />
                    <li>
                      Ensured backend conforms to REST API
                      design principles</li>
                    <br />
                    <li>
                      Provided async HTTP methods that utilize endpoints in order to perform CRUD operations
                    </li>
                    <br />
                    <li>
                      <span className='text-info'>Frontend Stack</span>: Reactjs, Bootstrap5, in Javascript CSS and HTML5.
                    </li>
                    <br />
                    <li>
                      <span className='text-info'>Backend Stack</span>: SpringJPA, SpringBoot, SpringSecurity, in Java and MYSQL for Database
                    </li>
                  </ul></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <div id="bgDark" class="card-body">
                  <h5 class="card-title text-secondary"><span className='text-decoration-underline'><a className='text-warning' href='https://github.com/RuiQiHuang1832/databases-system-fall21/tree/main/milestones/Milestone3'>Discord Bot</a></span> <span className='d-flex justify-content-end'>12/2021 - 08/2021</span></h5>
                  <p class="card-text"><ul>
                    <li>
                      Created a discord bot in Python that tests against a database model
                    </li>
                    <br />
                    <li>
                      Generated 8 business rules for a Blood Donation database system.
                    </li>
                    <br />
                    <li>
                      <span className='text-info'>Technologies & Stack</span>: MySql, Python, DiscordAPI
                    </li>
                  </ul></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <div id="bgDark" class="card-body">
                  <h5 class="card-title text-secondary"> <span className='text-decoration-underline'><a className='text-warning' href='https://github.com/RuiQiHuang1832/csc648-03-fa21-team07/tree/master'>Tutoring Web App</a></span> <span className='d-flex justify-content-end'>12/2021 - 08/2021</span></h5>
                  <p class="card-text"><ul>
                    <li>
                      Designed a web app for my senior team project
                    </li>
                    <br />
                    <li>
                      Debugged and reviewed peer code before
                      committing to a branch                    </li>
                    <br />
                    <li>
                      Coded the frontend ensuring that it conforms
                      to given specifications
                    </li>
                    <br />
                    <li>
                      Designed and planned layout and structure
                      of web app
                    </li>
                    <br />
                    <li>
                      <span className='text-info'>Technologies & Stack</span>: AWS EC2, MySQL, Nodejs, Javascript, ExpressJS, ReactJS, Google analytics
                    </li>
                    <br />
                  </ul></p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card border-0">

                <div id="bgDark" class="card-body">
                  <h5 class="card-title text-secondary "><span className='text-decoration-underline'><a className='text-warning' href='https://github.com/RuiQiHuang1832/Forager'>2D Libgdx Game for Desktop</a></span> <span className='d-flex justify-content-end'>07/2021 - 08/2020</span></h5>
                  <p class="card-text"><ul>
                    <li>
                      Designed a cross-platform Java game in a
                      development framework known as Libgdx
                      which works on multiple devices
                    </li>
                    <br />
                    <li>
                      Coded the animation, logic, objects save
                      states, cursor, sound effects, and music
                    </li>
                    <br />
                    <li>
                      Integrated collision detection using box2D allowing for increased player speed
                    </li>
                    <br />
                    <li>
                      <span className='text-info'>Technologies & Stack</span>: Java, Libgdx Library, Tiled, paint.net, box2d and Freetype
                    </li>
                  </ul></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <div id="bgDark" class="card-body">
                  <h5 class="card-title text-secondary"><span className='text-decoration-underline'><a className='text-warning' href='https://github.com/RuiQiHuang1832/Rosie'>Narration game in JFrame</a></span> <span className='d-flex justify-content-end'>04/2021 - 12/2020</span></h5>
                  <p class="card-text"> <ul>
                    <li>
                      Designed a game using Jframe that allows users to pick choices and display certain results at the end.
                    </li>
                    <br />
                    <li>
                      <span className='text-info'>Technologies & Stack</span>: Java and Jframe
                    </li>
                    <br />
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
