import React,{useState} from 'react';
import { Button } from 'react-bootstrap';

import Uploadicn from '../img/upicon.png';
export default ({img,txt,page,onChangeFileUpload,myLabel,myImg})=> {

    return <div className={page=="upload"?"upd_box p-3 mt-3 border-dotted":"upd_box"}>
    <img src={`./assets/media/${myImg}`} alt="upload-img icon" className="upload-icon-cst" />
                           
    
   
    <div class="upload-btn-wrapper">
<Button className="sfhjkahrbtn">
    <img src='./assets/media/upload1.svg' />
    {myLabel}</Button>
    <input onChange={onChangeFileUpload} type="file" name="myfile" />
</div>
<p className="sm_txt">or drop a file</p>
<div className="borderW235px">
</div>
<div className="font-11px mt-3">
    {txt}
</div>
    {/* <hr className="div_seperator"/> */}
{/* <p className="sm_txt">{txt}</p> */}

    </div>
   
    
}
 
