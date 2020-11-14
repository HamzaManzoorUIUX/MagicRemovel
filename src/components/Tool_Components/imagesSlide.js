import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ImgBox from './backgroundImg';
import ColorBox from '../Tool_Components/colorBox';
import { BsCloudUpload } from 'react-icons/bs';
export default ({img,changeBackImage}) => {
   console.log(img)
    const [images, setImages] = useState([{ id: 1, src: 'https://www.setaswall.com/wp-content/uploads/2017/03/Abstract-Light-4K-Wallpaper-3840x2160.jpg' }
        ,
    { id: 2, src: 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg' },
    { id: 3, src: 'https://i.pinimg.com/originals/8a/ce/59/8ace59fb64006df42df015203a27864d.jpg' },
    { id: 4, src: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-smoke-bb-5_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c8347a73d6427dda5d03bd1100c39354' },
    { id: 5, src: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg' },
    { id: 6, src: 'https://i.pinimg.com/originals/8a/ce/59/8ace59fb64006df42df015203a27864d.jpg' },
    { id: 7, src: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-smoke-bb-5_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c8347a73d6427dda5d03bd1100c39354' },
    { id: 8, src: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg' },
    { id: 9, src: 'https://i.pinimg.com/originals/8a/ce/59/8ace59fb64006df42df015203a27864d.jpg' }]);

    const [colors, setColors] = useState([{ id: 1, color: 'black' }
        ,
    { id: 2, color: 'green' },
    { id: 3, color: 'yellow' },
    { id: 4, color: 'blue' },
    { id: 5, color: 'green' },
    { id: 6, color: 'orange' },
    { id: 7, color: 'black' },
    { id: 8, color: 'black' },
    { id: 9, color: 'black' }
    ]);

    return <div>
        <div className="sliderItems-box">

            {
                images.map(x => {

                    return <div onClick={() =>{ 
                        changeBackImage(x.src)}
                        
                        }>

                        <ImgBox img={img} backImage={x.src} />

                    </div>
                })
            }
        </div>
    </div>
}