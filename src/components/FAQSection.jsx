import React from "react";
import styled from "styled-components";
import { StyledLayout } from "../styles";

const FAQSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            commodi odit aspernatur minus, animi saepe doloribus quae mollitia
            eos recusandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa
            quam enim molestias, quod blanditiis odio illum nesciunt! Similique,
            cumque.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different Payment Methods?</h4>
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            commodi odit aspernatur minus, animi saepe doloribus quae mollitia
            eos recusandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa
            quam enim molestias, quod blanditiis odio illum nesciunt! Similique,
            cumque.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            commodi odit aspernatur minus, animi saepe doloribus quae mollitia
            eos recusandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa
            quam enim molestias, quod blanditiis odio illum nesciunt! Similique,
            cumque.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What time of day can you film/photograph?</h4>
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            commodi odit aspernatur minus, animi saepe doloribus quae mollitia
            eos recusandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa
            quam enim molestias, quod blanditiis odio illum nesciunt! Similique,
            cumque.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FAQSection;
