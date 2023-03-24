import React from 'react'
import styled from 'styled-components'
import home4img from "../../images/home4.jpg"
import "../../App.css"

const Home4 = () => {
  return (
    <>
    <HomeWrapper>
            <TextWrapper>
                <Text1>BEST TIPS & TIPS</Text1>
                <Text2>FOR YOUR CARE</Text2>
            </TextWrapper>
            <ExploreWrapper>
                <ExploreText>GET TIPS</ExploreText>
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
          rgba(0, 0, 0, 0.1), 
          rgba(0, 0, 0, 0.3)
        ), url(${home4img});
    background-position: center;
    background-size: cover;
    background-blend-mode: darken;

`
const TextWrapper=styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 240px;
    width: 1079px;
    left: 325px;
    top: 4830px;




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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    position: absolute;
    width: 536px;
    height: 73px;
    left: 604px;
    top: 5107px;

    border: 2px solid #F0F5F9;


`
const ExploreText=styled.div`
    font-family: 'Poison';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 48px;
letter-spacing: 0.1em;

color: #F0F5F9;


`

export default Home4
