import React, { useState, useEffect } from 'react';
import Nav from '../components/Navbar'
import { FaUpload } from 'react-icons/fa'
import UploadImg from '../img/picture 1.png';
import UploadBox from '../components/uploadBox';
import uploadOne from '../img/uploadOne.png';
import uploadTwo from '../img/uploadTwo.png';
import uploadThree from '../img/uploadThree.png';
import NewId from '../utiles/newId';
import ImageBox from '../components/imageBox';
import ImageBox1 from '../components/imageBox1';
import { useLocation } from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay';
import { repository } from '../utiles/repository'
import ContentLoader, { Facebook } from 'react-content-loader'
export default (props) => {


    const [images, setImages] = useState([]);
    const location = useLocation();
    const [display, setDisplay] = useState(false);

    useEffect(() => {

        if (location.state)
            if (location.state.newImages) {
                let widthtypex=0;
                let heighttypex=0;
                let imgx = new Image()
                imgx.src = window.URL.createObjectURL(location.state.newImages)
                imgx.onload = () => {
                    heighttypex=imgx.height
                    widthtypex=imgx.width
                }

                    const sendImage=async ()=>{
                        setDisplay(true);

                        const formData = new FormData();
                        formData.append("", location.state.newImages);
                        const dropedImage = await toBase64(location.state.newImages);
        
                        const { data, status } = await repository.postImage(formData).then(x => x).then(x => x).catch(x => console.log(x));
                        if (status == 200) {
                            const dataFinal = data.status.slice(2, -1);
                            const newImagesx = [{ id: NewId(), orignalImage: dropedImage, removedImage: dataFinal,width:widthtypex,height:heighttypex }]
                            newImagesx.push(...images);
                            setImages(newImagesx);

    
                        }

                        setDisplay(false);

                    //    const dataFinal = data.status.slice(2, -1);
    
                    //     const newImagesx = [{ id: NewId(), orignalImage:dropedImage, removedImage: dropedImage }]
                    //     newImagesx.push(...images);
                    //     setImages(newImagesx);

                }
                    sendImage();
            
            }
        //setImages([...images.push(location.state.newImages[0])]);
           // setDisplay(false);

    }, [])

    const [reangeVal, setreangeVal] = useState(5);
    const handleClick = (event) => {

        /* call prompt() with custom message to get user input from alert-like dialog */
        const enteredName = prompt('Please enter your name')

        /* update state of this component with data provided by user. store data
           in 'enteredName' state field. calling setState triggers a render of
           this component meaning the enteredName value will be visible via the
           updated render() function below */
        // this.setState({ enteredName : enteredName })

    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    //drag over not drop
    const handleDragEnter = e => {

        e.preventDefault();
        e.stopPropagation();
    };
    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDragOver = e => {


        e.preventDefault();
        e.stopPropagation();
    };

    const onChangeFileUpload=async e=>{
        if(e.target.files.length>0)
        {
            let widthtypex=0;
let heighttypex=0;
let imgx = new Image()
imgx.src = window.URL.createObjectURL(location.state.newImages)
imgx.onload = () => {
    heighttypex=imgx.height
    widthtypex=imgx.width

}

            setDisplay(true);
            const formData = new FormData();
            formData.append("", e.target.files[0]);
            const dropedImage = await toBase64(e.target.files[0]);

            const { data, status } = await repository.postImage(formData).then(x => x).then(x => x).catch(x => console.log(x));

            if (status == 200) {
                const dataFinal = data.status.slice(2, -1);

                const newImages = [{ id: NewId(), orignalImage: dropedImage, removedImage: dataFinal }]
                newImages.push(...images);
                setImages(newImages);

            }
            setDisplay(false);

        }
        // history.push({
        //     pathname: '/upload',
    
        //     state: { newImages:e.target.files[0] }
        // })
    }

    const handleDrop = async e => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files) {
            if (e.dataTransfer.files.length > 0) {
                if (e.dataTransfer.files.length == 1) {
                    let widthtypex=0;
                    let heighttypex=0;
                    let imgx = new Image()
                    imgx.src = window.URL.createObjectURL(location.state.newImages)
                    imgx.onload = () => {
                        heighttypex=imgx.height
                        widthtypex=imgx.width

                    }
                    setDisplay(true);
                    const formData = new FormData();
                    formData.append("", e.dataTransfer.files[0]);
                    const dropedImage = await toBase64(e.dataTransfer.files[0]);

                    const { data, status } = await repository.postImage(formData).then(x => x).then(x => x).catch(x => console.log(x));

                    if (status == 200) {
                        const dataFinal = data.status.slice(2, -1);

                        const newImagesx = [{ id: NewId(), orignalImage: dropedImage, removedImage: dataFinal,width:widthtypex,height:heighttypex }]
                        newImagesx.push(...images);
                        setImages(newImagesx);

                    }
                    setDisplay(false);

                }
            }

        }
    };


    const handleRemove = id => {
        const filterdImages = images.filter(x => x.id != id);
        setImages(filterdImages);
    }

    if (images.length > 0 || display==true) {
        return <div className={'drag-drop-zone'} onDrop={e => handleDrop(e)}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}>
        <Nav />
        <div className="upload-parent">
             
<div class="upload-btn-wrapper">
<button className="remove-backgroundBtn btn btn-primary mb-2 p-2"><span className="pr-2 pl-2"><FaUpload /></span>Upload Image</button>
<input onChange={onChangeFileUpload} type="file" name="myfile" />
</div>
            <p>or drop a file, paste an image or <a className="cursor" onClick={handleClick}>URL</a></p>
        </div>
       {
            display==true?<ImageBox1 />:<></>
           
       }
        {

            images.map(x => {
               return <ImageBox key={x.id} img={x} handleRemove={handleRemove} />
            })
        }
    </div>

    }

    else
        return <> <div className={'drag-drop-zone'} onDrop={e => handleDrop(e)}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}>
        <Nav />

        <div className="upload-parent">
            <h5 className="mt-3 mt-md-5 font-wight-bold">
                What do you want to edit?
            </h5>
            <p className="font-11px">
                You can choose on of the ready-to-use photos below for a quick try
            </p>
            <div className='d-flex justify-content-center'>
                <img src={uploadOne} className="UploadGridImg"/>
                <img src={uploadTwo} className="UploadGridImg" />
                <img src={uploadThree} className="UploadGridImg" />
            </div>
            <UploadBox myImg={'ImgBorder.svg'} myLabel={"Upload Image"} onChangeFileUpload={onChangeFileUpload} page="upload" img={UploadImg} page="upload" txt="Supported formats: .jpg, .jpeg, .png" />

        </div>

    </div>


        </>



}