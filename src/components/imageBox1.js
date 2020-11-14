import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import { SplitButton, Dropdown } from 'react-bootstrap';
import HighResolutionModal from './Tool_Components/hightResModal';
import ImageTool from './Tool_Components/imagetool';
import ContentLoader, { Facebook } from 'react-content-loader'

export default () => {

    const [modalShow, setModalShow] = useState(false);
    const [imageModalShow, setimageModalShow] = useState(false);

    function downloadURI(uri, name) {
        var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    //
    return <div>

        <div className="container mb-5 card bxsasdhsah">
            <div>
                <button className="btn btn-xros" ><MdClose /></button>
            </div>
            <Tabs defaultActiveKey="Images" defaultActiveKey="removedBackground" id="uncontrolled-tab-example">
                <Tab eventKey="orignal" title="Orignal">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="or-Img mt-3 mb-2">
                                    <ContentLoader viewBox="0 0 380 200">
                                        {/* Only SVG shapes */}
                                        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                                       
                                    </ContentLoader>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="upload-parent mt-p50 ">
                                      <ContentLoader style={{height:56,marginBottom:10,marginLeft:'25%'}} >
                                        {/* Only SVG shapes */}
                                        <rect x="0" y="0" rx="5" ry="5" width="181" height="56" />
                                        
                                    </ContentLoader>
                             
                                      <ContentLoader style={{height:23,marginBottom:10,marginLeft:'25%'}}  >
                                        {/* Only SVG shapes */}
                                        <rect x="0" y="0" rx="5" ry="5" width="181" height="23" />
                                        
                                    </ContentLoader>
                             
                                      <ContentLoader style={{height:56,marginBottom:10,marginLeft:'25%'}}   >
                                        {/* Only SVG shapes */}
                                        <rect x="0" y="0" rx="5" ry="5" width="181" height="56" />
                                        
                                    </ContentLoader>
                             
                                      <ContentLoader style={{height:23,marginLeft:'25%'}}  >
                                        {/* Only SVG shapes */}
                                        <rect x="0" y="0" rx="5" ry="5" width="181" height="23" />
                                        
                                    </ContentLoader>
                             

                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="removedBackground" title="Removed Background">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 cstMtrt4">
                                <div className="or-Img mt-3">

                                <div className="or-Img mt-3 mb-2">
                                    <ContentLoader viewBox="0 0 380 200">
                                        {/* Only SVG shapes */}
                                        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                                       
                                    </ContentLoader>

                                </div>

                                </div>
                            </div>
                            <div className="col-md-6 cstMtrt4">
                                <div className="upload-parent mt-p50">
                                <ContentLoader style={{height:56,marginBottom:10,marginLeft:'25%'}} >
                                        {/* Only SVG shapes */}
                                        <rect x="0" y="0" rx="5" ry="5" width="181" height="56" />
                                        
                                    </ContentLoader>
                             
                                      <ContentLoader style={{height:23,marginBottom:10,marginLeft:'25%'}}  >
                                        {/* Only SVG shapes */}
                                        <rect x="0" y="0" rx="5" ry="5" width="181" height="23" />
                                        
                                    </ContentLoader>
                             
                                      <ContentLoader style={{height:56,marginBottom:10,marginLeft:'25%'}}   >
                                        {/* Only SVG shapes */}
                                        <rect x="0" y="0" rx="5" ry="5" width="181" height="56" />
                                        
                                    </ContentLoader>
                             
                                      <ContentLoader style={{height:23,marginLeft:'25%'}}  >
                                        {/* Only SVG shapes */}
                                        <rect x="0" y="0" rx="5" ry="5" width="181" height="23" />
                                        
                                    </ContentLoader>
                             
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>

            </Tabs>

        </div>
    </div>
}