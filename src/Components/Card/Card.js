import React from 'react'
import Styled from 'styled-components'
import './Card.css'
import loft from '../../Components/loftyinclogo.png'
import {FaCommentAlt, FaThumbsUp, FaAccessibleIcon} from 'react-icons/fa'


const Card = () => {
  return(

  
    <Main>
      <CardHolder>
        <Head>
          <Image src={loft} className='logo'/> LOFTYINC</Head>
        <About>LoftyInc is an Innovation development 
      company with vast experience in Business and 
      Project development. At loftyInc, 
      we facilitate impact projects in sub-saharan Africa.</About>
      <BottenH>
      <ActionButtion><FaCommentAlt/>2 Comments </ActionButtion>
      <ActionButtion1><FaThumbsUp/>89 Likes</ActionButtion1>
      <ActionButtion2><FaAccessibleIcon/>100 Views</ActionButtion2>
      </BottenH>
      </CardHolder>
    </Main>
    
  
  );
}
  

export default Card

const Main = Styled.div`
height: 200px;
width: 100%;
display: flex;
justify-content: center;
`
const CardHolder = Styled.div`
height: 200px;
width: 80%;
background-color: #bdfd;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 860px){
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 70%;
}
`

const Head = Styled.h2`
color: orange;
display: flex;
justify-content: center;
`
const About = Styled.p`
font-weight: bold;
`
const ActionButtion = Styled.button`
  border-radius: 5px;
margin: 0 5px;
padding: 4px 10px;
background: rgba(155, 155, 155, 0);
color: #fff;
border: 1px solid #fff;
cursor: pointer;
svg {
  transform: translateY(2px);
  margin-right: 5px;
}
`
const ActionButtion1 = Styled.button`
border-radius: 5px;
margin: 0 5px;
padding: 4px 10px;
background: rgba(155, 155, 155, 0);
color: #fff;
border: 1px solid #fff;
cursor: pointer;
svg {
  transform: translateY(2px);
  margin-right: 5px;
}
`
const ActionButtion2 = Styled.button`
border-radius: 5px;
margin: 0 5px;
padding: 4px 10px;
background: rgba(155, 155, 155, 0);
color: #fff;
border: 1px solid #fff;
cursor: pointer;
svg {
  transform: translateY(2px);
  margin-right: 5px;
}
`

const Image = Styled.img`
height: 40px;
`
const BottenH = Styled.div`
width: 100%;
justify-content: space-between;
`
