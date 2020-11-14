import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { GoPlus } from 'react-icons/go';
import { Scrollbars } from 'react-custom-scrollbars';
import { FaMinus } from 'react-icons/fa';
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi';
import { GiPencilBrush } from 'react-icons/gi';
import { GrErase } from 'react-icons/gr';
import { FiCrop } from "react-icons/fi";
import { BsBrush, BsSquare } from 'react-icons/bs';
import { GoMirror } from 'react-icons/go'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { CgFormatText } from 'react-icons/cg'
import { CgShapeSquare } from 'react-icons/cg'
import { BsTextCenter, BsTextLeft, BsTextRight, BsFillSquareFill, BsFillTriangleFill } from 'react-icons/bs';
import { TwitterPicker} from 'react-color';
import Slider from 'react-rangeslider';
import ImgBox from '../Tool_Components/backgroundImg'
import ImageSlider from '../Tool_Components/imagesSlide'
import 'react-rangeslider/lib/index.css';
import { saveAs } from 'file-saver';

import FunImage from './canvasBackImage';
import useImage from 'use-image';
import newId from '../../utiles/newId'
import Image from './UriImage';
import {FaDownload} from 'react-icons/fa';
import {VscSymbolColor} from 'react-icons/vsc'
import TransformerComponent from './transformer'
import { Stage, Layer, Group, Text, Rect, Arrow, Star, Circle, Shape, TextPath, Label, Tag, Line } from "react-konva";
import imagetobase64 from 'image-to-base64';
import URLImage from './UriImage';
let historyStep;
let historyPanObj = [];
let currentSelectedIndex;
let textEnb = false;
let startPoint={x:0,y:0}
let url = 'https://konvajs.github.io/assets/yoda.jpg';


function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
export default (props) => {
  const modalRef = useRef(null);
  let stageSize={ width: modalRef!=null &&modalRef.current && modalRef.current.offsetWidth?modalRef.current.offsetWidth:512, height: 400 }

  const [backimage,setbackimage]=useState('');
  const [brushSize, setbrushSize] = useState(5);
  const textAreaRef = useRef(null);
  //const selectedNodeRef = useRef(null);
  const [tool, setTool] = React.useState('eraser');
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);
  const [isToolactive, setisToolactive] = React.useState(false);
  const [stgscale, setstgscale] = React.useState({
    stageScale: 1,
    stageX: 0,
    stageY: 0
  });


  

  const updateZoom = e => {

   
   if(e==1)
   {
    const scaleBy = 1.02;
    const stage = stageRef.current.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
    };
    const newScale = 1 > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setstgscale({
      stageScale: newScale,
      stageX:
        -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      stageY:
        -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    });
   }
   else
   {
    const scaleBy = 1.02;
    const stage = stageRef.current.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
    };
    const newScale = 0 > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setstgscale({
      stageScale: newScale,
      stageX:
        -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      stageY:
        -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    });
   }

  };

  const stageRef = React.useRef();
  const imageRef = React.useRef();

  const textRef = React.useRef();

  const fontsizeRef = React.useRef();
  const fontfamilyRef = React.useRef();

  const [rangeValue, setRangeValue] = useState(0);
  //background Image
  // const [img] = useImage(require('../images/tools/Cube.png'));
  const dragObject = React.useRef();
  const [selectedShapeName, setSelectedShape] = useState("");
  //objects and Images
  const [panObject, SetPanObject] = useState([{
    type: 'line',
    name: newId(), lines: []
  }]);
  const [objecDefaultColor, setobjecDefaultColor] = useState("#22194D");
  const [textDefaultColor, settextDefaultColor] = useState("#22194D");
  const [backDefaultColor, setbackDefaultColor] = useState("transparent");
  const [boxDefaultColor, setboxDefaultColor] = useState("#bd8d64");
  const [imageRender, setimageRender] = useState();

  const [normalResponsive,setnormalResponsive]=useState(false);


  const [toolIndex, setToolIndex] = useState(0);
  //const [renderImage,setrenderImage]=useState();
  const [fontSize, setfontSize] = useState();
  //depth height width
  //76.2 76.2 76.2
  const [fontSizescst, setfontSizescst] = useState([12, 14, 16, 18, 22, 24, 26, 30, 32, 36, 40, 45, 51, 61, 75])
  const [imagezx] = useImage(url);

  const [fontModal, setfontModal] = useState(false);
  const [imageData,setimageData]=useState('')
const changeBackImage=(src)=>{
  var can = document.getElementById("imgCanvas");
  var img = document.getElementById("imageid");
  img.src=src;
  var ctx = can.getContext("2d");
  ctx.drawImage(img, 10, 10);
  var encodedBase = can.toDataURL();
  setimageData(encodedBase)
}
  const getToolType = () => {
    if (toolIndex == 1) {
      return <div>
      
      <div style={{ marginLeft: 50, marginBottom: 10, justifyContent: 'center', display: 'flex' }}>
        <img onDragStart={e => {
          dragObject.current = { type: 'shape', src: 'circle' };

        }} style={{ width: 45, height: 45, marginLeft: 13, marginRight: 13 }} src={require('../../img/tool/Ellipse 28 (1).png')} />

        <img onDragStart={e => {
          dragObject.current = { type: 'shape', src: 'square' };

        }} style={{ width: 45, height: 45, marginLeft: 13, marginRight: 13 }} src={require('../../img/tool/Rectangle 74 (1).png')} />
        <img onDragStart={e => {
          dragObject.current = { type: 'shape', src: 'triangle' };

        }} style={{ width: 45, height: 45, marginLeft: 13, marginRight: 13 }} src={require('../../img/tool/Polygon 2 (1).png')} />
      </div>
     <div style={{justifyContent:'center',display:'flex',marginBottom: 20}}>
     <TwitterPicker className="" color={objecDefaultColor}
              onChangeComplete={e => handleObjectColorCange(e)} />
       </div>
      </div>
    }
    if (toolIndex == 2) {
      return <div style={{ marginLeft: 50, marginBottom: 50, justifyContent: 'center', display: 'flex' }}>
        <img onDragStart={e => {
          dragObject.current = { type: 'text', src: 'f1' };

        }} style={{ width: 199, height: 60, marginLeft: 13, marginRight: 13 }} src={require('../../img/tool/tx-1.png')} />
  <TwitterPicker className="" color={textDefaultColor}
              onChangeComplete={e => handleTextColor(e)} />
      </div>
    }
    if (toolIndex == 3) {
      return  <>        <h5 style={{textAlign:'center',fontWeight:'bold'}}>Background Color</h5>
      <div style={{justifyContent:'center',display:'flex'}}>
     <TwitterPicker className="" color={backDefaultColor}
              onChangeComplete={e => handleBackColor(e)} />
        </div></>
    }
  }


  const handleObjectColorCange = (color) => {

    setobjecDefaultColor(color.hex);
    if (selectedShapeName != "") {

      const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
      const newPanObject = [...panObject];
      if (newPanObject[indexGet] && newPanObject[indexGet].type == "shape") {
        newPanObject[indexGet].fill = color.hex;
        const npm = JSON.stringify([...newPanObject]);
        updateHistory(JSON.parse(npm));
        SetPanObject(newPanObject);

      }
    }


  }


  const handleTextColor = (color) => {

    settextDefaultColor(color.hex);
    if (selectedShapeName != "") {

      const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
      const newPanObject = [...panObject];
      if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
        newPanObject[indexGet].fill = color.hex;
        const npm = JSON.stringify([...newPanObject]);
        updateHistory(JSON.parse(npm));
        SetPanObject(newPanObject);
      }
    }




  }

  const handleFontFamily = (family) => {

    if (selectedShapeName != "") {
      const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
      const newPanObject = [...panObject];
      if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
        newPanObject[indexGet].fontFamily = family;
        SetPanObject(newPanObject);
        const npm = JSON.stringify([...newPanObject]);
        updateHistory(JSON.parse(npm));
      }
    }
  }

  const handleDragControl = () => {
    if (selectedShapeName != "") {
      const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
      const newPanObject = [...panObject];
      newPanObject[indexGet].draggable = !newPanObject[indexGet].draggable;
      const npm = JSON.stringify([...newPanObject]);
      updateHistory(JSON.parse(npm));
      SetPanObject(newPanObject);


    }

  }


  const handleDelete = () => {
    if (selectedShapeName != "") {
      let newPanObject = [...panObject];
      newPanObject = newPanObject.filter(x => x.name != selectedShapeName)
      const npm = JSON.stringify([...newPanObject]);
      updateHistory(JSON.parse(npm));
      SetPanObject(newPanObject);


    }
  }

  const handleCopyLeft = () => {
    if (selectedShapeName != "") {
      const id = newId();

      const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
      const newPanObject = [...panObject];
      let cloneObj = { ...newPanObject[indexGet] }
      cloneObj.id = id;

      cloneObj.name = id;
      cloneObj.x = newPanObject[indexGet].x - 10;
      cloneObj.y = newPanObject[indexGet].y - 10;
      SetPanObject(panObject.concat(cloneObj));
      updateHistory([...panObject.concat({ ...cloneObj })]);

    }
  }

  const handleCopyRight = () => {
    if (selectedShapeName != "") {
      const id = newId();

      const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
      const newPanObject = [...panObject];
      let cloneObj = { ...newPanObject[indexGet] }
      cloneObj.id = id;

      cloneObj.name = id;
      cloneObj.x = newPanObject[indexGet].x + 10;
      cloneObj.y = newPanObject[indexGet].y + 10;
      SetPanObject(panObject.concat(cloneObj));
      updateHistory([...panObject.concat({ ...cloneObj })]);

    }
  }



  const updateFont = () => {

    if (selectedShapeName != "") {
      const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
      const newPanObject = [...panObject];
      if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
        setfontSize(newPanObject[indexGet].fontSize);

      }
    }


  }

  const handleFontSizeChange = (e) => {
    if (e.key === 'Enter') {
      if (selectedShapeName != "") {
        const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
        const newPanObject = [...panObject];
        if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
          newPanObject[indexGet].fontSize = fontSize;
          const npm = JSON.stringify([...newPanObject]);
          updateHistory(JSON.parse(npm));
          SetPanObject(newPanObject);

        }
      }
    }
  }
  const handleTextAlignhange = (e) => {

    switch (e) {
      case 'center': {

        if (selectedShapeName != "") {
          const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
          const newPanObject = [...panObject];
          if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
            newPanObject[indexGet].align = 'center';
            const npm = JSON.stringify([...newPanObject]);
            updateHistory(JSON.parse(npm));
            SetPanObject(newPanObject);

          }
        }
        break;
      }
      case 'left':
        {

          if (selectedShapeName != "") {
            const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
            const newPanObject = [...panObject];
            if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
              newPanObject[indexGet].align = 'left';
              const npm = JSON.stringify([...newPanObject]);
              updateHistory(JSON.parse(npm));
              SetPanObject(newPanObject);

            }
          }
          break;
        }

      case 'right':
        {

          if (selectedShapeName != "") {
            const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
            const newPanObject = [...panObject];
            if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
              newPanObject[indexGet].align = 'right';
              const npm = JSON.stringify([...newPanObject]);
              updateHistory(JSON.parse(npm));
              SetPanObject(newPanObject);

            }
          }
          break;
        }
    }
  }


  const handleBackColor = (color) => {

    setbackDefaultColor(color.hex);
   


  }

  const handleTextDblClick = (e, obj) => {
    setfontModal(true);
    const indexGet = panObject.findIndex(x => x.name == e.target.attrs.id);
    textRef.current.innerText = panObject[indexGet].text;
    currentSelectedIndex = indexGet;
   

  };


  const handleTransformEnd = () => {

    if (selectedShapeName != "") {
      const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
      const newPanObject = [...panObject];
      let textx = document.createElement("span");
      document.body.appendChild(textx);
      textx.style.font = "times new roman";
      textx.style.fontSize = newPanObject[indexGet].fontSize + "px";
      textx.style.height = 'auto';
      textx.style.width = 'auto';
      textx.style.position = 'absolute';
      textx.style.whiteSpace = 'no-wrap';
      textx.style.display = 'none';
      textx.innerHTML = textRef.current.value;
      if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {

        if (fontfamilyRef.current.value != "") {
          newPanObject[indexGet].fontFamily = fontfamilyRef.current.value;
        }

        if (fontsizeRef.current.value != "") {
          newPanObject[indexGet].fontFamily = parseInt(fontsizeRef.current.value);
        }


        let widthx = Math.ceil(textx.clientWidth);
        let formattedWidth = widthx;
        newPanObject[indexGet].text = textRef.current.value;
        newPanObject[indexGet].width = 1000;
        newPanObject[indexGet].height = textRef.current.clientHeight;
        SetPanObject(newPanObject);
        const npm = JSON.stringify([...newPanObject]);
        updateHistory(JSON.parse(npm));
      }
    }
    // panObject[currentSelectedIndex].text = textAreaRef.current.innerText;
    // panObject[currentSelectedIndex].width = textAreaRef.current.style.width;
    // panObject[currentSelectedIndex].visable = true;
    // textAreaRef.current.innerHtml = "";
    // textAreaRef.current.innerText = "";
    // textAreaRef.current.style.display = 'none!important';
    // textEnb = false;

  }
  const handleTextEdit = e => {
    /*
    setAvailText({
        textValue: e.target.value
    });
    */
  };
  const handleTextareaKeyDown = e => {
    if (e.keyCode === 13) {
      /*
       setAvailText({
           textEditVisible: false
       });
       */
    }
  };


  const handleStageMouseDown = e => {



    if (isToolactive) {
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      panObject[0].lines=[...panObject[0].lines, { tool, points: [pos.x, pos.y],brushSize }];
     const stringF= JSON.stringify(panObject);
      SetPanObject(JSON.parse(stringF));
      updateHistory(JSON.parse(stringF));
      startPoint.x=pos.x;
      startPoint.y=pos.y;
    }
    else {
      //all objects un selected
      if (e.target === e.target.getStage()) {

        setSelectedShape("");

        return;
      }



      // clicked on transformer - do nothing
      const clickedOnTransformer =
        e.target.getParent().className === "Transformer";
      if (clickedOnTransformer) {
        return;
      }

      // find clicked rect by its name
      const name = e.target.name();
      // const rect = this.state.rectangles.find(r => r.name === name);
      if (name) {
        setSelectedShape(name);
      } else {
        setSelectedShape("");
      }
    }

  }

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = panObject[0].lines[panObject[0].lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lastLine.brushSize=brushSize;
    // replace last
    panObject[0].lines.splice(panObject[0].lines.length - 1, 1, lastLine);
    const stringF= JSON.stringify(panObject);
    SetPanObject(JSON.parse(stringF));
    updateHistory(JSON.parse(stringF));
   
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };
  const getPanObject = (obj) => {
    if (obj) {
      switch (obj.type) {

        case 'text':
          {

            if (obj.src != "f4") {
              return <Label onMouseLeave={() => updateFont()} x={obj.x}
                y={obj.y}>
                <Tag fill={obj.background} />
                <Text
                  text={obj.text}
                  width={200}
                  onDblClick={(e) => handleTextDblClick(e, this)}
                  name={obj.name}
                  id={obj.name}
                  align={obj.align}
                  fontFamily={obj.fontFamily}
                  fontSize={obj.fontSize}
                  fill={obj.fill}
                  fontWeight={obj.fontWeight}
                  visible={obj.visbale}
                  onTransformEnd={() => alert()}
                /></Label>
            }
            else {
              return <Label onMouseLeave={() => updateFont()} x={obj.x}
                y={obj.y} >
                <Tag fill={obj.background} />
                <TextPath
                  text={obj.text}
                  width={200}
                  onDblClick={(e) => handleTextDblClick(e, this)}
                  name={obj.name}
                  id={obj.name}
                  align={obj.align}
                  fontFamily={obj.fontFamily}
                  fontSize={obj.fontSize}
                  fill={obj.fill}
                  fontWeight={obj.fontWeight}
                  visible={obj.visbale}
                  data='M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97'
                />
              </Label>

            }
          }
        case 'image':
          {
            return <Image fill={obj.fill} name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y} />
          }
        case 'svg':
          {
            return <Image fill={obj.fill} width={40} height={40} name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y} />
          }
        case 'shape':
          {

            switch (obj.src) {
              case 'arrow':
                {
                  return <Arrow

                    name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y}
                    width={100}
                    height={100}
                    fill={obj.fill}
                    shadowBlur={1}
                    points={[0, 0, stageSize.width / 4, stageSize.height / 4]}
                    pointerLength={20}
                    pointerWidth={20}
                    fill={obj.fill}
                    stroke={obj.fill}
                    strokeWidth={10}

                  />
                }
              case 'circle':
                {
                  return <Circle

                    name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y}
                    width={100}
                    height={100}
                    fill={obj.fill}
                    shadowBlur={1}
                  />
                }
              case 'square':
                {
                  return <Rect

                    name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y}
                    width={100}
                    height={100}
                    fill={obj.fill}
                    shadowBlur={1}
                  />
                }

              case 'triangle':
                {
                  return <Shape
                    sceneFunc={(context, shape) => {
                      context.beginPath();
                      context.moveTo(100, 0);
                      context.lineTo(0, 100);
                      context.quadraticCurveTo(0, 0, 0, 0);
                      context.closePath();
                      // (!) Konva specific method, it is very important
                      context.fillStrokeShape(shape);
                    }}
                    name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y}
                    width={100}
                    height={100}
                    fill={obj.fill}
                    shadowBlur={1} />
                }

              case 'star':
                {
                  return <Star

                    name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y}
                    width={100}
                    height={100}
                    fill={obj.fill}
                    shadowBlur={1}
                    innerRadius={20}
                    outerRadius={40}
                    numPoints={5}

                  />
                }

            }

          }
      }
    }
    return null;
  }

  const [windowWidth, setWindowWidth] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(modalRef!=null &&modalRef.current && modalRef.current.offsetWidth?modalRef.current.offsetWidth:512);
  };

  useEffect(() => {
    
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    const handler = e =>{
      setnormalResponsive(true);
    };
    const handler1 = e =>{
      setnormalResponsive(false);
    };
    
    window.matchMedia("(min-width: 1200px)").addListener(handler);
    window.matchMedia("(max-width: 1201px)").addListener(handler1);

    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const handleUndo = () => {


    if (historyStep != undefined) {
      if (historyStep == 0) {
        const oldPanhistoryObj = historyPanObj[historyStep];
        SetPanObject([{
          type: 'line',
          name: newId(), lines: []
        }]);

        historyStep = undefined;
      }
      else {
        historyStep -= 1;
        const oldPanhistoryObj = historyPanObj[historyStep];
        if (oldPanhistoryObj) {
          SetPanObject(oldPanhistoryObj);


        }
        else {
          historyStep += 1;
        }
      }
    }
  }
  const handleRedo = () => {

    if (historyStep != undefined) {
      historyStep += 1;
      const hstObj = historyPanObj[historyStep];
      if (hstObj) {
        SetPanObject(hstObj);
      }
      else {
        historyStep -= 1;
      }


    }
    else {

      const checkAvailable = historyPanObj[0];
      if (checkAvailable) {
        historyStep = 0;
        SetPanObject(historyPanObj[historyStep]);
      }
    }
  }

  const handleDragEnd = (e) => {


  }

function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
  const updateHistory = (historyObj) => {
    historyPanObj.push(historyObj);
    
    if (historyStep == undefined) {
      historyStep = 0;
    }
    else {
      historyStep += 1;
    }

  }




  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ backgroundColor: 'transparent' }}
      className="mdc-1"
    >

      <div className="">
        <div className="row">
          <div       ref={modalRef} className={normalResponsive==false?"col-lg-8 pd-0":"col-12 pd-0"} style={{ backgroundColor: 'white' }}>
            <div className="or-Img">
              <div className="tool-control-head" >
                <div>
                </div>
                <div className="">
                  <button className="btn editbar-crbtn editbar-crbtn-color" onClick={() => { updateZoom(1) }}><GoPlus /></button>
                  <label className="editbar-crbtn-color">100%</label>
                  <button className="btn editbar-crbtn editbar-crbtn-color"  onClick={() => { updateZoom(0) }}><FaMinus /></button>
                </div>

                <div className="">
                  <button className="btn editbar-crbtn editbar-crbtn-color" onClick={() => { handleUndo() }} ><FiRotateCcw /></button>
                  <button className="btn editbar-crbtn editbar-crbtn-color" onClick={() => { handleRedo() }} ><FiRotateCw /></button>
                </div>
              </div>
              <div onDrop={e => {

                stageRef.current.setPointersPositions(e);
                // add image
                if (dragObject.current.type == "image") {

                  let id = newId();
                  let objNew = {
                    ...stageRef.current.getPointerPosition(),
                    src: dragObject.current.src,
                    type: 'image',
                    name: id,
                    fill: 'transparent',
                    historyObjType: "panObject",
                    draggable: true,
                  };
                  SetPanObject(panObject.concat(objNew));
                  updateHistory([...panObject.concat({ ...objNew })]);


                }
                else if (dragObject.current.type == "shape") {
                  let id = newId();
                  let objNew = {
                    ...stageRef.current.getPointerPosition(),
                    src: dragObject.current.src,
                    type: 'shape',
                    name: id,
                    fill: objecDefaultColor,
                    historyObjType: "panObject",
                    draggable: true,
                  };

                  SetPanObject(panObject.concat(objNew));
                  updateHistory([...panObject.concat({ ...objNew })]);

                }
                else if (dragObject.current.type == "text") {
                  switch (dragObject.current.src) {

                    case "f1":
                      {

                        let id = newId();
                        let objNew = {
                          ...stageRef.current.getPointerPosition(),
                          src: dragObject.current.src,
                          text: 'Drag to amend text',
                          name: id,
                          type: 'text',
                          align: 'center',
                          fontFamily: 'Arizonia',
                          fontSize: 30,
                          fill: 'black',
                          fontWeight: 'bold',
                          background: 'transparent',
                          historyObjType: "panObject",
                          visbale: true,
                          draggable: true,

                        };
                        SetPanObject(panObject.concat(objNew));
                        updateHistory([...panObject.concat({ ...objNew })]);

                        break;
                      }
                    case "f2":
                      {
                        let id = newId();
                        let objNew = {
                          ...stageRef.current.getPointerPosition(),
                          src: dragObject.current.src,
                          text: 'Drag to amend text',
                          name: newId(),
                          type: 'text',
                          align: 'center',
                          fontFamily: 'Acme',
                          fontSize: 25,
                          fill: 'black',
                          fontWeight: 'bold',
                          background: 'transparent',
                          historyObjType: "panObject",
                          draggable: true,
                          visbale: true,

                        };
                        SetPanObject(panObject.concat(objNew));
                        updateHistory([...panObject.concat({ ...objNew })]);
                        break;
                      }

                    case "f3":
                      {
                        let id = newId();
                        let objNew = {
                          ...stageRef.current.getPointerPosition(),
                          src: dragObject.current.src,
                          text: 'Drag to amend text',
                          name: newId(),
                          type: 'text',
                          align: 'center',
                          fontFamily: 'Marmelad',
                          fontSize: 20,
                          fill: 'black',
                          fontWeight: 'bold',
                          background: 'transparent',
                          historyObjType: "panObject",
                          visbale: true,
                          draggable: true,

                        };
                        SetPanObject(panObject.concat(objNew));
                        updateHistory([...panObject.concat({ ...objNew })]);
                        break;
                      }
                    case "f4":
                      {
                        let id = newId();
                        let objNew = {
                          ...stageRef.current.getPointerPosition(),
                          src: dragObject.current.src,
                          text: 'Drag to amend text',
                          name: newId(),
                          type: 'text',
                          align: 'center',
                          fontFamily: 'Acme',
                          fontSize: 25,
                          fill: 'black',
                          fontWeight: 'bold',
                          background: 'transparent',
                          historyObjType: "panObject",
                          visbale: true,
                          draggable: true,


                        };
                        SetPanObject(panObject.concat(objNew));
                        updateHistory([...panObject.concat({ ...objNew })]);
                        break;
                      }
                  }
                }
                if (dragObject.current.type == "svg") {
                  let id = newId();
                  let objNew = {
                    ...stageRef.current.getPointerPosition(),
                    src: dragObject.current.src,
                    type: 'svg',
                    name: newId(),
                    fill: 'transparent',
                    historyObjType: "panObject",
                    draggable: true,

                  };
                  SetPanObject(panObject.concat(objNew));
                  updateHistory([...panObject.concat({ ...objNew })]);

                }
              }}
                onDragOver={e => e.preventDefault()}
                style={{ backgroundColor: 'white' }}>
         <Scrollbars style={{width:'100%',height:500}}>
         <Stage  width={props.img.width*stgscale.stageScale}
                    height={props.img.height*stgscale.stageScale}
                    ref={stageRef}
                    onMouseDown={handleStageMouseDown}
                    onMousemove={handleMouseMove}
                    onMouseup={handleMouseUp}
                    scaleX={stgscale.stageScale}
                    scaleY={stgscale.stageScale}
                    x={0}
                    y={0}
                  >
                    <Layer>
                    <FunImage img={{ img: require('../../img/background.png'), width: props.img.width, height: props.img.height,x:-0,y:-0 }} />

                    </Layer>
                    <Layer ref={imageRef}>
                    <Rect
          x={0}
          y={0}
          width={props.img.width}
          height={props.img.height}
          fill={backDefaultColor}
        />
        
                    <URLImage src={imageData} x={-10} y={-10} width={props.img.width} height={props.img.height} />

                    <FunImage img={{  img:"data:image/png;base64,"+ props.img.removedImage, width: props.img.width, height: props.img.height }} /> 
                    {/* <FunImage img={{ img: imageData, width: stageSize.width, height: stageSize.height }} />

                    <FunImage img={{ img:"data:image/png;base64,"+ props.img.removedImage, width: stageSize.width, height: stageSize.height }} />  */}

{
  panObject.map(x => <Group key={x.name} draggable={(x.draggable == true ? true : false)} onDragEnd={handleDragEnd}>{getPanObject(x)}</Group>)
}
<TransformerComponent

  selectedShapeName={selectedShapeName}
/>
                      {panObject[0].lines.map((line, i) => (
                        <Line
                          key={i}
                          points={line.points}
                          stroke="#df4b26"
                          strokeWidth={line.brushSize}
                          tension={0.5}
                          lineCap="round"
                          globalCompositeOperation={
                            line.tool === 'eraser' ? 'destination-out' : 'source-over'
                          }
                        />
                      ))}

                    </Layer>



                  </Stage>
                  <textarea ref={textAreaRef} style={{ display: 'none', position: 'absolute' }} >

                  </textarea>
         </Scrollbars>
                <div>
                  {getToolType()}
                </div>
              </div>
            </div>
          </div>
          <div className={normalResponsive==false?"col-lg-1 ":"col-12 mt-4 mb-4"}>
          </div>
          <div className={normalResponsive==false?"col-lg-3 edit-p-bar ":"col-12 pd-0 m-0 edit-p-bar mt-3"} >
            <div className="edit-p-text"><GiPencilBrush className="edit-pencil-icon" />Edit Picture</div>
            <div className="edit-bar-parent-btn">
              <button className="edit-bar-p-btn edit-bar-e-btn editbar-crbtn-color" onClick={()=>{
                setTool("eraser");
                setisToolactive(true);
              }}><GrErase className="editbar-crbtn-color mr-1" />Erase</button>
              {/* <button className="edit-bar-p-btn edit-bar-r-btn editbar-crbtn-color">Restore</button> */}
            </div>
            <div className="editor-parent">
              <p className="editor-lbl">Brush Size</p>
              <Slider
                min={1}
                max={100}
                step={1}
                value={brushSize}
                onChange={(e) => setbrushSize(e)}
              />
              <div className="ediotr-panel" style={{justifyContent:'center',display:'flex'}} >
                <button onClick={()=>{
                                  setTool("pen");
                                  setisToolactive(true);
                }} ><BsBrush /></button>
                <button onClick={() => {setisToolactive(false); setToolIndex(3)}}><VscSymbolColor /></button>
                <button onClick={() => {setisToolactive(false);handleCopyRight()}}><GoMirror /></button>
                <button onClick={() =>{setisToolactive(false); handleDelete()}} ><RiDeleteBin6Line /></button>
                <button onClick={() =>{setisToolactive(false); setToolIndex(2)}}><CgFormatText /></button>
                <button onClick={() => {setisToolactive(false);setToolIndex(1)}}><CgShapeSquare /></button>
              </div>
              <p className="editor-lbl mt-5">Frames / Backgrounds</p>
               <ImageSlider  changeBackImage={changeBackImage} img={props.img.removedImage} />
            </div>
            <button className="btn" onClick={()=>{ var dataURL = imageRef.current.toDataURL();
  downloadURI(dataURL, 'download.png');}} style={{width:"100%",
    backgroundColor: "#A6C94A",
    justifyContent: "center",
    display: "flex",
    color: "white",
    padding: 10
}}><FaDownload style={{margin:3}}  /> <p>Download</p></button>

          </div>

        </div>
        <div style={{display:'none'}}>
        <img id="imageid" crossorigin="anonymous" src=""/>
    <canvas id="imgCanvas" />
        </div>
      </div>
      <Modal size="lg" onHide={() => setfontModal(false)}
        centered show={fontModal}>
        <Modal.Header closeButton>
          <Modal.Title>Customize Font</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Text</p>
          <textarea className="form-control" ref={textRef}></textarea>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
            <p style={{ marginTop: 15 }}>Font Family:</p>
            <select ref={fontfamilyRef} style={{
              marginTop: 10, marginRight: 10,
              marginLeft: 10,
              width: 203
            }} className="form-control" >
              <option value="">Select Font family</option>
              <option value="Arizonia">Arizonia</option>
              <option value="Marmelad">Marmelad</option>
              <option value="Kosugi">Kosugi</option>
              <option value="Acme">Acme</option>
              <option value="Allan">Allan</option>
            </select>
            <p style={{ marginTop: 15 }}>Font Size:</p>
            <select style={{
              marginTop: 10, marginRight: 10,
              marginLeft: 10,
              width: 80

            }} className="form-control" ref={fontsizeRef} >
              <option value="">Select Font Size</option>

              {
                fontSizescst.map(x => <option key={x} value={x}>{x + "px"}</option>)
              }
            </select>
          </div>
          <div>
            <p>Justify Text</p>
            <div className="colorPickhead  size-editor" style={{ justifyContent: 'space-around', display: 'flex' }} >
              <button className="btn" onClick={() => handleTextAlignhange("left")} ><BsTextLeft /></button>
              <button className="btn" onClick={() => handleTextAlignhange("center")}  ><BsTextCenter /></button>
              <button className="btn" onClick={() => handleTextAlignhange("right")}><BsTextRight /></button>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn btn-success p-3 m-2" style={{ width: 140 }}>Cancel</button>
            <button className="btn btn-primary p-3 m-2" onClick={() => handleTransformEnd()} style={{ width: 140 }}>Confirm</button>
          </div>
        </Modal.Footer>
      </Modal>

    </Modal>
  );
}
