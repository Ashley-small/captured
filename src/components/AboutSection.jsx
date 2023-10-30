import React from "react";
import home1 from "/images/home1.png";
import styled from "styled-components";
import {
  StyledLayout,
  StyledImage,
  StyledDescription,
  StyledHide,
} from "../styles";
const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              Your<span> dreams </span>come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>True</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography requirements that you
          have. We have the expertise to deliver the results
        </p>
        <button>Contact us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with camera" />
      </StyledImage>
    </StyledLayout>
  );
};

export default AboutSection;
