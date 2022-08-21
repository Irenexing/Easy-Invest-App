import React from 'react'
import { Button } from '../Button/Button'
import "../../App.scss"
import "./HeroSection.scss"
function HeroSection() {
  return (
    <div className="hero-container">
        <video className="hero-video" src="/videos/video.mp4" autoPlay loop muted />
        <h1>Be Money Confident</h1>
        <div className='hero-btns'>
            <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">GET STARTED <i className="far fa-play-circle"/></Button>
        </div>
    </div>
  )
}

export default HeroSection