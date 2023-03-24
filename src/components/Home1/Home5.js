import React from 'react'
import styled from 'styled-components'
import home5img from "../../images/home5.jpg"
import "../../App.css"

const Home5 = () => {
  return (
    <>
    <HomeWrapper>
            <TextWrapper>
                <Text1>HIGH VALUE PEOPLE</Text1>
                <Text2>OWN PREMIUM</Text2>
            </TextWrapper>
            <ExploreWrapper>
                <ExploreText>GET PREMIUM</ExploreText>
            </ExploreWrapper>


        </HomeWrapper>
      
    </>
  )
}

const HomeWrapper=styled.div`
width: 1728px;
    height: 1117px;
    background:
        /* top, transparent black, faked with gradient */ 
        linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.7)
        ), url(${home5img});
        background-position: center;
    background-size: cover;
    background-blend-mode: darken;

`
const TextWrapper=styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
height: 240px;
width: 1080px;
left: 325px;
top: 5947px;



`
const Text1=styled.div`
font-family: 'Poison';
font-style: normal;
font-weight: 400;
font-size: 100px;
line-height: 120px;

letter-spacing: 0.1em;

color: #F0F5F9;
`
const Text2=styled.div`
font-family: 'Poison';
font-style: normal;
font-weight: 400;
font-size: 100px;
line-height: 120px;

letter-spacing: 0.1em;

color: #F0F5F9;
`

const ExploreWrapper=styled.div`
    box-sizing: border-box;
    display: flex;
align-items: center;
text-align: center;
justify-content: center;

box-sizing: border-box;

position: absolute;
width: 536px;
height: 73px;
left: 604px;
top: 6224px;

border: 2px solid #F0F5F9;
`
const ExploreText=styled.div`
font-family: 'Poison';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 48px;
/* identical to box height */


letter-spacing: 0.1em;

color: #F0F5F9;

`
export default Home5
