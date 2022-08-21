import React from "react";
import { Button } from "../Button/Button";
import Lottie from "lottie-react";
import animationData from "../../lotties/homepage-lottie.json";
import "../../App.scss";
import "./HeroSection.scss";
function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-container-left">
        {/* <video
          className="hero-video"
          src="/videos/video.mp4"
          autoPlay
          loop
          muted
        /> */}
        <h1>Be Money Confident</h1>
        <p>Learn how to invest in less as a beginner</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Let's get started! <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
      <div className="hero-container-right">
        <Lottie animationData={animationData} loop={true} />;{" "}
      </div>
    </div>
  );
}

export default HeroSection;
