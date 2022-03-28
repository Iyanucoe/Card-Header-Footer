import React from 'react'
import {
 MainCont,
 Row,
 Column,
 Head,
 Head1,
 Head2,
 Footerlink
} from './FooterStyle';

function Footer() {
  return (
    
        <MainCont>
        <Row>
            <Column>
            <Head> ABOUT US</Head>
            <Footerlink href='#'>Aim</Footerlink>
            <Footerlink href='#'>Vision</Footerlink>
            <Footerlink href='#'>Mission</Footerlink>
            </Column>
            <Column>
            <Head1>SERVICE</Head1>
            <Footerlink href='#'>Project Management</Footerlink>
            <Footerlink href='#'>Business Development</Footerlink>
            <Footerlink href='#'>Technology Procurement</Footerlink>
            </Column>
            <Column>
            <Head2>CONTACT US</Head2>
            <Footerlink href='#'>Lagos</Footerlink>
            <Footerlink href='#'>Abuja</Footerlink>
            <Footerlink href='#'>Dubai UAE</Footerlink>
            </Column>
        </Row>
        
        </MainCont>
  )
}

export default Footer