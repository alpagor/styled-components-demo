import styled, { css } from 'styled-components'

export const Theme = styled.div`
  ${props => props.dark && css` 
  background-color: black;
  padding: 40px;
  h1 {
    color: palevioletred;
  }
  p {
    color: white;
  } 
  `}
`