import React from 'react';
import styled from 'styled-components';

// import './Contact.css';
import { StyledButton } from '../styles/elements'

const StyledContactContainer = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`

// const style = { 
//   width: '60%',
//   margin: '16px auto',
//   border: '1px solid #eee',
//   boxShadow: '0 2px 3px #ccc',
//   padding: '16px',
//   textAlign: 'center',
// }


function Contact(props) {
  return (
    <StyledContactContainer>
    {/* <div className="Contact" /> */}
      <p>Name: {props.name}</p>
      <p>Project: {props.project}</p>
      <StyledButton>Contact {props.name}</StyledButton>
      {/* <button style={style}>Contact {props.name}</button> */}
    {/* </div> */}
    </StyledContactContainer>
  )
}

export default Contact;
