import React from 'react'
import styled from 'styled-components'
import home2img from "../../images/home01pic.jpg"
import homeicon from "../../images/homeicon.png"
import circleicon from "../../images/circle.png"
import shopicon from "../../images/shop.png"
import diaicon from "../../images/dia.png"
import accounticon1 from "../../images/account1.png"
import accounticon2 from "../../images/account2.png"
import searchicon from "../../images/search1.png"
import shopcircleicon from "../../images/shopcircle.png"
import diaicon2 from "../../images/dia2.png"
import "../../App.css"


const Home1 = () => {
  return (
    <>
    <HomeWrapper>
      <FontWrapper>
        <First>FIND THE BEST</First>
        <Sec>SALON NEAR YOU</Sec>
      </FontWrapper>
      <ExploreWrapper>
        <ExploreText>EXPLORE</ExploreText>
      </ExploreWrapper>
      <BottomWrapper>
        <HomeIcon src={homeicon}></HomeIcon>
        {/* <SearchIcon> */}
          <CircleIcon src={circleicon}></CircleIcon>
          <CircleIcon2 src={searchicon}></CircleIcon2>
        {/* </SearchIcon> */}
        <ShopIcon src={shopicon}></ShopIcon>
        <ShopCircleIcon1 src={shopcircleicon}></ShopCircleIcon1>
        <ShopCircleIcon2 src={shopcircleicon}></ShopCircleIcon2>

        <DiaIcon src={diaicon}></DiaIcon>
        <DiaIcon2 src={diaicon2}></DiaIcon2>
        <AccountIcon>
          <AccountIcon1 src={accounticon1}></AccountIcon1>
          <AccountIcon2 src={accounticon2}></AccountIcon2>
        </AccountIcon>

      </BottomWrapper>

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
    background-position: top;
    background-size: cover;
    background-blend-mode: darken;
`
const FontWrapper=styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 240px;
  width: 1021px;
  left: 353px;
  top: 1506px;
  /* border-radius: undefinedpx; */
`
const First=styled.div`
  /* position: absolute; */

  font-family: 'Poison';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 120px;
/* display: flex; */
/* align-items: flex-end; */
/* text-align: center; */
  letter-spacing: 0.1em;

  color: #F0F5F9;
`
const Sec=styled.div`

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
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 73px;
  width: 536px;
  left: 596px;
  top: 1772px;
  border-radius: 0px;
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
const BottomWrapper=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  width: 1012px;
  height: 80px;
  left: 358px;
  top: 2057px;

  background: rgba(30, 32, 34, 0.5);
  backdrop-filter: blur(3.5px);
/* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`

const HomeIcon=styled.img`
  /* position: absolute; */
  left: 14.58%;
  right: 14.58%;
  top: 14.04%;
  bottom: 16.67%;
`

const SearchIcon=styled.div`
  display: flex;
  flex-direction: column;
`
const CircleIcon=styled.img`
/* position: absolute; */
left: 8.33%;
right: 12.5%;
top: 8.33%;
bottom: 12.5%;
`
const CircleIcon2=styled.img`
/* position: absolute; */
  height: 8.16666px;
    width: 5.16666px;
    border-radius: 0px;
    position: inherit;
    left: 319.67px;
    top: 58.67px;

`

const ShopCircleIcon1=styled.img`
  position: inherit;
  width:6.12px;
  height: 6.12px;
  left: 501.13px;
    top: 58.72px;
  
  `
const ShopCircleIcon2=styled.img`
position: inherit;
left: 516.28px;
top: 58.72px;
width:6.12px;
  height: 6.12px;

`

const ShopIcon=styled.img`
  left: 11.8%;
  right: 11.8%;
  top: 18.28%;
  bottom: 28.72%;
`
const DiaIcon=styled.img`
  left: 12.47%;
  right: 12.47%;
  top: 16.67%;
  bottom: 17.59%;
`
const DiaIcon2=styled.img`
position: inherit;
left: 702.29px;
    top: 30.63px;

`

const AccountIcon=styled.div`
  display: flex;
  flex-direction: column;
`
const AccountIcon1=styled.img`
left: 23.44%;
right: 23.44%;
top: 11.72%;
bottom: 35.16%;


`
const AccountIcon2=styled.img`
left: 14.61%;
right: 14.61%;
top: 74.22%;
bottom: 6.72%;


`

export default Home1
