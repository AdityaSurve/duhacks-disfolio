import React from 'react'

import { Helmet } from 'react-helmet'

import './log-in2.css'

const LogIn = (props) => {
  return (
    <div className="log-in-container">
      <Helmet>
        <title>LogIn - DisFolio</title>
        <meta property="og:title" content="LogIn - DisFolio" />
      </Helmet>
      <section className="log-in-hero">
        <div className="log-in-background">
          <img
            src="/playground_assets/line-background.svg"
            alt=''
            className="log-in-image"
          />
          <img
            alt=""
            src="/playground_assets/circle-background.svg"
            className="log-in-image1"
          />
        </div>
        <header data-thq="thq-navbar" className="log-in-navbar">
          <img
            alt=""
            src="/playground_assets/logodispolio-removebg-preview-200w.png"
            className="log-in-image2"
          />
          <span className="log-in-text">DisFolio</span>
          <button className="log-in-register button">
            <span>Sign Up</span>
            <svg viewBox="0 0 1024 1024" className="log-in-icon">
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
            </svg>
          </button>
        </header>
        <div className="log-in-hero-content">
          <div className="log-in-container1">
            <div className="log-in-caption"></div>
            <div className="log-in-container2">
              <div className="log-in-container3">
                <div className="log-in-container4">
                  <p className="log-in-caption1">Welcome to DisFolio</p>
                </div>
                <span className="log-in-text2">
                  <span>All in one Hackathon Platform</span>
                  <br></br>
                </span>
              </div>
              <div className="log-in-container5">
                <input
                  type="text"
                  placeholder="Enter Email ID"
                  className="log-in-textinput input"
                />
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="log-in-textinput1 input"
                />
              </div>
              <div className="log-in-container6">
                <div className="log-in-container7">
                  <button className="log-in-register1 button">
                    <span>Log  In</span>
                    <svg viewBox="0 0 1024 1024" className="log-in-icon2">
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LogIn
