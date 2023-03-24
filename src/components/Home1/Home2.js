import React from 'react'
import styled from 'styled-components'
import home2img from "../../images/home2.jpg"
import "../../App.css"

const Home2 = () => {
  return (
    <>
        <HomeWrapper>
            <TextWrapper>
                <Text1>FIND A PERSONAL</Text1>
                <Text2>SKINCARE EXPERT</Text2>
            </TextWrapper>
            <ExpertWrapper>
                <ExpertText>FIND EXPERT</ExpertText>
            </ExpertWrapper>

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
        ), url(${home2img});
    background-position: center;
    background-size: cover;
    background-blend-mode: darken;
`
const TextWrapper=styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 240px;
    width: 1021px;
    left: 361px;
    top: 2584px;

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
    font-size: 97px;
    line-height: 120px;
    letter-spacing: 0.1em;

    color: #F0F5F9;

`

const ExpertWrapper=styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    position: absolute;
    width: 536px;
    height: 73px;
    left: 604px;
    top: 2850px;

    border: 2px solid #F0F5F9;
`
const ExpertText=styled.div`
    font-family: 'Poison';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 48px;

letter-spacing: 0.1em;

color: #F0F5F9;
`

export default Home2
