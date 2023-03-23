import React from 'react'
import styled from 'styled-components';
import homeimg from "../../images/homepic.jpg"
import gnalimg from "../../images/GNAL.png"
import l1img from "../../images/Line1.png"
import l2img from "../../images/Line2.png"
import gnsnimg from "../../images/GnsnAlvero.png"
import searchimg from "../../images/search.png"
 
const Home0 = () => {
  return (
    <>
    <HomeWrapper>
        <GnalWrapper src={gnalimg} alt=""></GnalWrapper>
        <ServiceWrapper>SERVICES</ServiceWrapper>
        <ShopWrapper>SHOP</ShopWrapper>
        <SignWrapper>SIGN UP</SignWrapper>
        <LineWrapper1 src={l1img}></LineWrapper1>
        <LineWrapper2 src={l2img}></LineWrapper2>
        <Gnsn>
            <GnsnWrapper src={gnsnimg}></GnsnWrapper>
        </Gnsn>
        <Search src={l1img}></Search>
        <SearchIcon src={searchimg}></SearchIcon>
        <Inputarea>

        <Inputs type="text" placeholder="SEARCH FOR THE SERVICES YOU WANT"></Inputs>
        </Inputarea>




    </HomeWrapper>
        {/* <h1>HOME PAGE</h1> */}
        
      
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
        ), url(${homeimg});
    /* background-image: url(${homeimg}) ; */
    background-position: top;
    background-size: cover;
    background-blend-mode: darken;
    /* filter: brightness(0.7); */
`
const GnalWrapper=styled.img`
    /* border-radius: nullpx; */
    position: absolute;
    width: 276px;
    height: 100px;
    left: 726px;
    top: 35px;

    font-family: 'Otto Attac Type';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 100px;
/* identical to box height */

    text-align: center;

    


    /* width: 1728px; */
    /* height: 1117px; */
`

const ServiceWrapper=styled.div`
    position: absolute;
    width: 164px;
    height: 48px;
    left: 1097px;
    top: 51px;

    font-family: 'Poison';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #F0F5F9;
`

const ShopWrapper=styled.div`
    position: absolute;
    width: 101px;
    height: 48px;
    left: 1331px;
    top: 51px;

    font-family: 'Poison';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #F0F5F9;
`

const SignWrapper=styled.div`
    position: absolute;
    /* width: 146px; */
    height: 48px;
    left: 1482px;
    top: 51px;

    font-family: 'Poison';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #F0F5F9;
`

const LineWrapper1=styled.img`
    position: absolute;
    width: 230px;
    height: 7px;
    left: 100px;
    top: 65px;

    /* border: 7px solid #F0F5F9; */
`

const LineWrapper2=styled.img`
    position: absolute;
    width: 125px;
    height: 7px;
    left: 100px;
    top: 85px;

    /* border: 7px solid #F0F5F9; */
`
const Gnsn=styled.div`
    position: absolute;
    height: 270px;
    width: 1533px;
    left: 98px;
    top: 847px;
    border-radius: nullpx;

`
const GnsnWrapper=styled.img`
    /* position: absolute;
    width: 1533px;
    height: 270px;
    left: 98px;
    top: 847px; */
    font-family: 'Otto Attac Type';
    font-style: normal;
    font-weight: 400;
    font-size: 270px;
    line-height: 270px;
    /* identical to box height */

    text-align: center;
`
const Search=styled.img`
    position: absolute;
    width: 1310px;
    height: 2px;
    left: 209px;
    /* border: 2px solid #F0F5F9; */
    top: 606px;

`
const SearchIcon=styled.img`
    position: absolute;
    height: 60.01933670043945px;
    width: 60.01933670043945px;
    left: 219px;
    top: 521px;
    border-radius: 0px;
/* background: #F0F5F9;     */
`

const Inputarea=styled.div`
    position: absolute;
    height: 48px;
    width: 713px;
    left: 313px;
    top: 527px;
    border-radius: nullpx;

`
const Inputs=styled.input`
    font-family: 'Poison';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 48px;
/* identical to box height */

background: none;
border: none;
display: flex;
align-items: center;
text-align: center;

color: rgba(240, 245, 249, 0.5);
width: 753px;
:focus{
    outline: none;
    border: none;

}
`




export default Home0
