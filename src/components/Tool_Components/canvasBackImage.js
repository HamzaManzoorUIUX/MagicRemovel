import React from 'react';
import {Image} from 'react-konva';
import useImage from 'use-image';

export default ({ img }) => {
    const [imgx] = useImage(img.img);
    console.log(imgx);
    return (
      <Image
        image={imgx}
        width={img.width}
        height={img.height}
       x={img.x}
        y={img.y}
      
        // I will use offset to set origin to the center of the image
       //offsetX={img ? img.width / 2 : 0}
       // offsetY={img ? img.height / 2 : 0}
      />
    );
  };

