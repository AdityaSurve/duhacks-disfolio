import React from 'react'

import { Helmet } from 'react-helmet'

import './sign-in.css'

const SignIn = (props) => {
  let org=false;

  return (
    <div className="sign-in-container">
      <Helmet>
        <title>SignIn - DisFolio</title>
        <meta property="og:title" content="SignIn - DisFolio" />
      </Helmet>
      <section className="sign-in-hero">
        <div className="sign-in-background">
          <img
            src="/playground_assets/line-background.svg"
            className="sign-in-image"
            alt=''
          />
          <img
            alt=""
            src="/playground_assets/circle-background.svg"
            className="sign-in-image1"
          />
        </div>
        <header data-thq="thq-navbar" className="sign-in-navbar">
          <img
            alt=""
            src="/playground_assets/logodispolio-removebg-preview-200w.png"
            className="sign-in-image2"
          />
          <span className="sign-in-text">DisFolio</span>
          <button className="sign-in-register button">
            <span>
              <span>Log In</span>
              <br></br>
            </span>
            <svg viewBox="0 0 1024 1024" className="sign-in-icon">
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
            </svg>
          </button>
        </header>
        <div className="sign-in-hero-content">
          <div className="sign-in-container01">
            <div className="sign-in-caption"></div>
            <div className="sign-in-container02">
              <div className="sign-in-container03">
                <div className="sign-in-container04">
                  <p className="sign-in-caption1">Welcome to DisFolio</p>
                </div>
                <span className="sign-in-text04">
                  <span>All in one Hackathon Platform</span>
                  <br></br>
                </span>
              </div>
              <div className="sign-in-container05">
                <div className="sign-in-container06">
                  <div className="sign-in-container07">
                    <button className="sign-in-register1 button" onClick={org=false}>
                      <span>Participant</span>
                    </button>
                    <button className="sign-in-register2 button" onClick={org=true}>
                      <span>Organizer</span>
                    </button>
                  </div>
                </div>
                {!org && <>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="sign-in-textinput input"
                />
                <input
                  type="text"
                  placeholder="Enter College Name"
                  className="sign-in-textinput1 input"
                />
                <input
                  type="text"
                  placeholder="Enter Email ID"
                  className="sign-in-textinput2 input"
                />
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="sign-in-textinput3 input"
                />
                <input
                  type="text"
                  placeholder="Re-enter Password"
                  className="sign-in-textinput4 input"
                />
                <input
                  type="text"
                  placeholder="Enter GitHub Account Link"
                  className="sign-in-textinput5 input"
                />
                </>}


                {org && <>
                <input
                  type="text"
                  placeholder="Enter Organizer name"
                  className="sign-in-textinput input"
                />
                <input
                  type="text"
                  placeholder="Enter College Name"
                  className="sign-in-textinput1 input"
                />
                <input
                  type="text"
                  placeholder="Enter Email ID"
                  className="sign-in-textinput2 input"
                />
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="sign-in-textinput3 input"
                />
                <input
                  type="text"
                  placeholder="Re-enter Password"
                  className="sign-in-textinput4 input"
                />
                </>}
                <button className="sign-in-register3 button">
                  <span>Sign In</span>
                  <svg viewBox="0 0 1024 1024" className="sign-in-icon2">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignIn
