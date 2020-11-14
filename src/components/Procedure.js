import React, { Component } from 'react';
import Tick from '../img/tick.png';
import VidBtn from '../img/vidbtn.png';
import UploadIcon from '../img/upload 2.png';
import EditIcon from '../img/edit 1.png';
import Wand from '../img/magic-wand 1.png';
import Fade from 'react-reveal/Fade';

class Procedure extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="proc_div mrt-84">
                    <div className="myContainer">
                        <div className="row">

                            <div className="col-md-6">
                            <Fade left>
                                <div className="sm-green" />
                                <h3 className="bold_head">How it Works</h3>
                                <p className="proc-title_min font-work-all" style={{ maxWidth: 448 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </p>
                                <p className="proc-title_min font-work-all"><img className="pl-0 pr-2" src={Tick} alt="tick" />Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="proc-title_min font-work-all "><img className="pl-0 pr-2" src={Tick} alt="tick" />Lorem Ipsum is simply dummy </p>
                                <p className="proc-title_min font-work-all"><img className="pl-0 pr-2" src={Tick} alt="tick" />Lorem Ipsum is simply</p>
                                <img className="vid_btn" src={VidBtn} alt="video Icon" />
                                </Fade>
                            </div>
                          
                            <div className="col-md-6">
                            <Fade right>
                                <div>
                                <div class="process-box-main">
                                    <div className="rectangle_box">
                                        <div className="upd-icn-bx">
                                            <img src={UploadIcon} className="upld-icn" alt="Upload Icon" />

                                        </div>
                                        <div>
                                            <p className="mini-bold">Upload a picture</p>
                                            <p className="mini-p">Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                                        </div>
                                    </div>
                                    <div className="rectangle_box">
                                        <div className="upd-icn-bx">
                                            <img src={EditIcon} className="upld-icn" alt="Upload Icon" />

                                        </div>
                                        <div>
                                            <p className="mini-bold">Edit your picture</p>
                                            <p className="mini-p">Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                                        </div>
                                    </div>
                                    <div className="rectangle_box">
                                        <div className="upd-icn-bx">
                                            <img src={Wand} className="upld-icn" alt="Upload Icon" />

                                        </div>
                                        <div>
                                            <p className="mini-bold">Apply filters</p>
                                            <p className="mini-p">Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                                        </div>
                                    </div>

                                </div>
                                </div>
                           </Fade>
                            </div>
                       
                        </div>
                    </div>
                </div>

                <div className="gray-div mrt-84 " style={{paddingTop:100,paddingBottom:100}}>
                    <div className="myContainer">
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <Fade left>
                               <div className="des_box"></div>
                                <div className="des_box des_box2"></div>
                               </Fade>
                            </div>
                            <div className="col-md-6 des_div">
                            <Fade right>

                                <div className="sm-green" />
                                <h3 className="bold_head bold-head_des">Remove backgrounds 100% automatically in 5 seconds with zero clicks</h3>
                                <p className="mini-p mt-3">There are approximately 20 million more interesting activities than removing backgrounds by hand.</p>
                                <p className="mini-p pr-0">There are approximately 20 million more interesting activities than removing backgrounds by hand. There are approximately 20 million more interesting activities than removing backgrounds by hand.</p>
                          </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Procedure;

/*


                */

/*
<div className="rectangle_box">
                    <img src={EditIcon} className="upld-icn" alt="Edit Icon" />
                    <p className="mini-bold"></p>
                    <p className="rect-box_text">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
                <div className="rectangle_box">
                    <img src={Wand} className="upld-icn" alt="Wand Icon" />
                    <p className="mini-bold">Apply filters</p>
                    <p className="rect-box_text">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
*/