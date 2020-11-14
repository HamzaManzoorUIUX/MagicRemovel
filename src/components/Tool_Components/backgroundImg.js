import React from 'react'
export default ({img,backImage})=>{
    return <div>
        <img className="back-bg-box" src={"data:image/png;base64,"+img} style={{ backgroundImage: `url(${backImage})` }} />
    </div>

}