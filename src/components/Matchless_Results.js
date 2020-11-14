import React, { Component, useState,useCallback } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { jsx, css } from "@emotion/core";
import Fade from 'react-reveal/Fade';
export const CustomHandle = ({ style,images, ...props }) => {
    const handlePositionChange = useCallback(
      (position) => console.log("[Portrait]", position),
      []
    );
  
    return (
      <ReactCompareSlider
        {...props}
        handle={
          <div
            className="cstsdfsdfh23"
          >
            {/** Arrow Box @NOTE Using separate component to amplify blur */}
            <div
           className="dsfjai323"
            />
  
            {/* Arrows */}
            <div
            className="sdfjadih233"
              
            />
          </div>
        }
        itemOne={
          <ReactCompareSliderImage
            src={images.x}
            alt="one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
          src={images.y}      
          alt="two"
          />
        }
        onPositionChange={handlePositionChange}
        style={{
          display: "flex",
          width: "100%",
          height: "85vh",
          ...style
        }}
      />
    );
  };
export default () => {

    const images=[
      {x:require('../img/home/1a.jpg')
    ,y:require('../img/home/1b.png')},
    {x:require('../img/home/2a.jpg')
    ,y:require('../img/home/2b.png')},
    {x:require('../img/home/3a.jpg')
    ,y:require('../img/home/3b.png')}]
    const [activeIndex,setactiveIndex]=useState(0);


    return (
        <React.Fragment>
<Fade Big>
            <div className="container match-div">
                <h3 className="bold-head_match">Matchless Results</h3>
                <div className="tabBox">
                    <p className="match-title_min pl-5 activeTile" onClick={() => { setactiveIndex(0) }} >People</p>

                    <p className="match-title_min pl-5 " onClick={() => { setactiveIndex(1) }}>Animals</p>
                    <p className="match-title_min pl-5 " onClick={() => { setactiveIndex(2) }}>Cars</p>
                </div>
                <div className="container mt-3">
                    <div className="row">
                    <CustomHandle images={images[activeIndex]} />
                 </div>
                </div>
            </div>
            </Fade>
        </React.Fragment>
    );
}


/*
  <div className="sm-green match_sm-green" />



                            */