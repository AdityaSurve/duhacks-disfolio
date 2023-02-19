import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from "react-router-dom";
import Teammembers from '../components/teammembers2'
import './mentor.css'
import { app, database, storage } from '../components/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, setDoc, onSnapshot, query, where,arrayUnion, arrayRemove } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Mentor = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  
  console.log(user?.uid,'hemlooo');
  const handleLogout = () => {
    props.setmentor(1)
    signOut(auth);
    navigate("/")
  }
  const [mdata,setmdata]=useState({});
  const getmentor=async()=>{
    const docRef = doc(database, "mentors", user.uid);
    const docSnap = await getDoc(docRef);
    setmdata(docSnap.data());
    
  }
  

  useEffect(()=>{
   
    getmentor();

  },[])

 



  return (
    <div className="mentor-container">
      <Helmet>
        <title>organizer</title>
        <meta property="og:title" content="organizer" />
      </Helmet>
      <section className="mentor-hero">
        <div className="mentor-background">
          <img
            alt="image"
            src="/playground_assets/circle-background.svg"
            className="mentor-image"
          />
          <img
            alt="image"
            src="/playground_assets/line-background.svg"
            className="mentor-image1"
          />
        </div>
        <header data-thq="thq-navbar" className="mentor-navbar">
          <img
            alt="image"
            src="/playground_assets/logodispolio-removebg-preview-200w.png"
            className="mentor-image2"
          />
          <h2 className="mentor-text">DisFolio</h2>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="mentor-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="mentor-nav"
            >
              <span className="navLink">Announcements</span>
            </nav>
            <button className="button" onClick={handleLogout}>
              <span>Log Out</span>
              <svg viewBox="0 0 1024 1024" className="mentor-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
        </header>
        <div className="mentor-hero-content">
          <div className="mentor-caption">
            <p className="mentor-caption1">Welcome Mentor</p>
          </div>
        </div>
      </section>
      <section className="mentor-team">
        <div className="mentor-header">
          <div data-aos="fade-right" className="mentor-heading">
            <h2 className="mentor-title">Teams </h2>
          </div>
        </div>
        <div className="mentor-container1">
          <div className="mentor-add">
            <div className="mentor-row">

              <Teammembers rootClassName="teammembers-root-class-name"></Teammembers>
              <Teammembers rootClassName="teammembers-root-class-name3"></Teammembers>
              <Teammembers rootClassName="teammembers-root-class-name2"></Teammembers>
              <Teammembers rootClassName="teammembers-root-class-name1"></Teammembers>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mentor
