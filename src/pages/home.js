import React,{useState} from 'react';
import Upload from "../components/Upload";
import Procedure from "../components/Procedure";
import Matchless_Result from "../components/Matchless_Results";
import Review from "../components/Review";
import Footer1 from "../components/footer1";
import Nav from '../components/Navbar';
import NewId from '../utiles/newId';
import "../App.css";
import { useHistory } from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay';
import Fade from 'react-reveal/Fade';


import { repository } from '../utiles/repository'

export default () => {
    let history = useHistory();

    const [display,setDisplay]=useState(false);
    const [fileDrop,setfileDrop]=useState(false);
    const [message,setMessage]=useState("");
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const onChangeFileUpload=e=>{
        if(e.target.files.length>0)
        history.push({
            pathname: '/upload',
    
            state: { newImages:e.target.files[0] }
        })
    }

    //drag over not drop
    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
       // setfileDrop(true);

    };
    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();

    };
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
       // setfileDrop(false);

       
    };
    const handleDrop = async e => {
        e.preventDefault();
        e.stopPropagation();
     //   setfileDrop(false);

        if (e.dataTransfer.files) {
            if (e.dataTransfer.files.length > 0) {
                if (e.dataTransfer.files.length == 1) {
                    const file =e.dataTransfer.files[0]                
                    history.push({
                        pathname: '/upload',
                
                        state: { newImages:file }
                    })
                
                     setDisplay(true);
                    // const formData = new FormData();
                    // formData.append("image", e.dataTransfer.files[0]);
                    // const dropedImage = await toBase64(e.dataTransfer.files[0]);

                    // const { data, status } = await repository.postImage(formData).then(x => x).then(x => x).catch(x => console.log(x));

                    // if (status == 200) {
                    //     const dataFinal=data.status.slice(2,-1);

                    //     const newImages = [{ id: NewId(), orignalImage:dropedImage, removedImage: dataFinal }]
                    //     history.push({
                    //         pathname: '/upload',

                    //         state: { newImages }
                    //     })

                    // }  
                  

                    setDisplay(false);
                }
            }

        }
    };

    
    return <LoadingOverlay
    active={display}
    spinner
    text='Loading your image...'
    >
 <div onDrop={e => handleDrop(e)}
    onDragOver={e => handleDragOver(e)}
    onDragEnter={e => handleDragEnter(e)}
    onDragLeave={e => handleDragLeave(e)} >
        {
         fileDrop?<div id="loadingOverlay" class="loader-overlay">
         <div class="loader-content loader-center">
            
             <div class="loader-center loader-text"><h1>Drop image anywhere.</h1>
             <p>(1 file at a time).</p></div>
         </div></div>:<></>
        }
    
    <Fade top>
    <Nav />
        </Fade>
    <Upload  onChangeFileUpload={onChangeFileUpload} />
    <div className="mt-5 pt-2 myContainer">
        <div style={{ width: '90%', margin: 'auto' }}>
            <hr />
        </div>
    </div>
    <Procedure />
    <Matchless_Result />
    <Fade bottom>
    <Review />
    </Fade>

    <Footer1 />

</div>
  </LoadingOverlay> 
   
}

/*
<Procedure/>
      <Footer1/>

      */