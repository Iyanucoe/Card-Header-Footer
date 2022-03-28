import Styled from 'styled-components'

export const MainCont =Styled.div`
display: flex;
justify-content: center;
height: 120px;
`

export const Footerlink =Styled.a`
margin-bottom: 9px;
font-size: 11px;
text-decoration: none;
`

export const Row = Styled.div`
width: 80%;
height: 100%;
background-color: #bdfd;
display: flex;
justify-content: center;

@media screen and (max-width: 860px){
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 70%;
`

export const Column = Styled.div`
width: 50%;
height: 60px;
display: flex;
flex-direction: column;
margin-left: 40px;
`

export const Head = Styled.p`
font-weight: bold;
`

export const Head1 = Styled.p`
font-weight: bold;
`

export const Head2 = Styled.p`
font-weight: bold;
`