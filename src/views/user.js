import React from 'react'

import { Helmet } from 'react-helmet'

import './user.css'

const User = (props) => {
  return (
    <div className="user-container">
      <Helmet>
        <title>user</title>
        <meta property="og:title" content="user" />
      </Helmet>
      <section className="user-hero">
        <div className="user-background">
          <img
            alt="image"
            src="/playground_assets/circle-background.svg"
            className="user-image"
          />
          <img
            alt="image"
            src="/playground_assets/line-background.svg"
            className="user-image1"
          />
        </div>
        <header data-thq="thq-navbar" className="user-navbar">
          <img
            alt="image"
            src="/playground_assets/logodispolio-removebg-preview-200w.png"
            className="user-image2"
          />
          <h2 className="user-text">DisFolio</h2>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="user-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="user-nav"
            >
              <span className="navLink">Announcements</span>
              <span className="navLink">Team</span>
            </nav>
            <button className="button">
              <span>Log Out</span>
              <svg viewBox="0 0 1024 1024" className="user-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
        </header>
        <div className="user-hero-content">
          <div className="user-caption">
            <p className="user-caption1">Welcome User</p>
          </div>
          <div className="user-container1">
            <div className="user-container2">
              <span className="user-text02">Create Team</span>
              <input
                type="text"
                placeholder="Enter team name"
                className="user-textinput input"
              />
            </div>
            <div className="user-container3">
              <span className="user-text03">Join Team</span>
              <input
                type="text"
                placeholder="Enter team code"
                className="user-textinput1 input"
              />
            </div>
          </div>
          <div className="user-container4">
            <button className="button">
              <span>Enter</span>
              <svg viewBox="0 0 1024 1024" className="user-icon2">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="user-hackathons">
        <div className="user-header">
          <div data-aos="fade-right" className="user-heading">
            <h2 className="user-title">Hackathons</h2>
          </div>
        </div>
        <div className="user-upcoming-hackathons">
          <span className="user-text05">Upcoming Hackathons : </span>
          <div className="user-row">
            <div className="user-item">
              <img
                alt="image"
                src="/playground_assets/why-1.svg"
                className="user-image3"
              />
              <div className="user-details">
                <h3 className="user-title1">Hackathon 1</h3>
                <p className="user-description">Description</p>
                <span className="user-text06">
                  <span>Date</span>
                  <br></br>
                </span>
                <span className="user-text09">
                  <span>Organizing Committee</span>
                  <br></br>
                </span>
                <span className="user-text12">
                  <span>Domains</span>
                  <br></br>
                </span>
                <span className="user-text15">
                  <span>APPLY NOW ➡️</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="user-item1">
              <img
                alt="image"
                src="/playground_assets/why-1.svg"
                className="user-image4"
              />
              <div className="user-details1">
                <h3 className="user-title2">Hackathon 2</h3>
                <p className="user-description1">Description</p>
                <span className="user-text18">
                  <span>Date</span>
                  <br></br>
                </span>
                <span className="user-text21">
                  <span>Organizing Committee</span>
                  <br></br>
                </span>
                <span className="user-text24">
                  <span>Domains</span>
                  <br></br>
                </span>
                <span className="user-text27">
                  <span>APPLY NOW ➡️</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="user-item2">
              <img
                alt="image"
                src="/playground_assets/why-1.svg"
                className="user-image5"
              />
              <div className="user-details2">
                <h3 className="user-title3">Hackathon3</h3>
                <p className="user-description2">Description</p>
                <span className="user-text30">
                  <span>Date</span>
                  <br></br>
                </span>
                <span className="user-text33">
                  <span>Organizing Committee</span>
                  <br></br>
                </span>
                <span className="user-text36">
                  <span>Domains</span>
                  <br></br>
                </span>
                <span className="user-text39">
                  <span>APPLY NOW ➡️</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="user-applied-hackathons">
          <span className="user-text42">Applied Hackathons</span>
          <div className="user-row1">
            <div className="user-item3">
              <img
                alt="image"
                src="/playground_assets/why-1.svg"
                className="user-image6"
              />
              <div className="user-details3">
                <h3 className="user-title4">Hackathon 1</h3>
                <p className="user-description3">Description</p>
                <span className="user-text43">
                  <span>Date</span>
                  <br></br>
                </span>
                <span className="user-text46">
                  <span>Organizing Committee</span>
                  <br></br>
                </span>
                <span className="user-text49">
                  <span>Domains</span>
                  <br></br>
                </span>
                <span className="user-text52">
                  <span>VIEW MORE ➡️</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="user-item4">
              <img
                alt="image"
                src="/playground_assets/why-1.svg"
                className="user-image7"
              />
              <div className="user-details4">
                <h3 className="user-title5">Hackathon 2</h3>
                <p className="user-description4">Description</p>
                <span className="user-text55">
                  <span>Date</span>
                  <br></br>
                </span>
                <span className="user-text58">
                  <span>Organizing Committee</span>
                  <br></br>
                </span>
                <span className="user-text61">
                  <span>Domains</span>
                  <br></br>
                </span>
                <span className="user-text64">
                  <span>VIEW MORE➡️</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="user-item5">
              <img
                alt="image"
                src="/playground_assets/why-1.svg"
                className="user-image8"
              />
              <div className="user-details5">
                <h3 className="user-title6">Hackathon3</h3>
                <p className="user-description5">Description</p>
                <span className="user-text67">
                  <span>Date</span>
                  <br></br>
                </span>
                <span className="user-text70">
                  <span>Organizing Committee</span>
                  <br></br>
                </span>
                <span className="user-text73">
                  <span>Domains</span>
                  <br></br>
                </span>
                <span className="user-text76">
                  <span>VIEW MORE ➡️</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default User
