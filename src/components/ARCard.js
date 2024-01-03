import dynamic from "next/dynamic";
import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const ARCard = (props) => {

  const { styles, ios_src, src, currentColor } = props;

  const arButton = useRef({});

  const modelViewerRef = useRef(null);

  const handleScaleChange = () => {
    if (modelViewerRef.current) {
      const x = xValue || 1;
      const y = yValue || 1;
      const z = 1;

      const scale = `${x} ${y} ${z}`;
      modelViewerRef.current.setAttribute('scale', scale);
    }
  };

  const [xValue, setXValue] = useState(1);
  const [yValue, setYValue] = useState(1);

  // Changing State when volume increases/decreases
  const rangeXSelector = (event, newValue) => {
    setXValue(newValue);
    handleScaleChange();
  };

  const rangeYSelector = (event, newValue) => {
    setYValue(newValue);
    handleScaleChange();
  };

  useEffect(() => {
    import('@google/model-viewer').catch(console.error);
    const element = modelViewerRef.current;
    element.addEventListener("load", handleModelTexture)
    return (() => {
      element.removeEventListener("load", handleModelTexture)
    })
  }, [currentColor]);

  const handleModelTexture = async () => {
    if(currentColor && currentColor.path) {
      /* until cors issue is not fixed */
      const imgFile = await fetch(currentColor.textureURL);
      // const imgFile = await fetch(currentColor.path);
      const reader = new FileReader();

      reader.addEventListener('load', async () => {
        const element = modelViewerRef.current;
        const texture = await modelViewerRef.current.createTexture(reader.result);
        element.model.materials[0].pbrMetallicRoughness.baseColorTexture.setTexture(texture);
      })

      reader.readAsDataURL(await imgFile.blob());
    }
  }


  return (
    <Box
      className="ArCard"
      bgColor='#f0f5f5'
      m="0"
      p={{ base: '1', md: '2' }}
      textAlign="center"
      borderRadius={3}
      shadow="dark-lg"
      position="relative"
      overflow="hidden"
      w={{ base: '250px', sm: '270px', md: '300px' }}
      minHeight='100vh'
      {...styles}
    >
      <model-viewer
        ref={modelViewerRef}
        poster={ARCard.defaultProps.img}
        src={src}
        ar-placement={ARCard.defaultProps.arPlacement}
        touch-action="pan-y"
        // ios-src={ios_src}
        ar-modes={ARCard.defaultProps.arModes}
        ar={ARCard.defaultProps.ar}
        ar-scale={ARCard.defaultProps.arScale}
        camera-controls={ARCard.defaultProps.cameraControls}
        exposure={ARCard.defaultProps.exposure}
        loading={ARCard.defaultProps.loading}
        shadow-intensity={ARCard.defaultProps.shadowIntensity}
        shadow-softness={ARCard.defaultProps.shadowSoftness}
        alt={ARCard.defaultProps.alt}
        camera-orbit="0deg 75deg 4717m"
        field-of-view="30deg"
        style={{
          display: 'block',
          backgroundColor: '#f0f5f5',
          touchAction: 'none',
          width: '100%',
          minHeight: 'calc(100vh - 80px)',

        }}

      >
        <div className="ar-controls">
          <Typography id="range-slider" gutterBottom>
            Select Width:
          </Typography>
          <Slider
            value={xValue}
            step={0.1}
            max={10}
            min={1}
            onChange={rangeXSelector}
            valueLabelDisplay="auto"
          />
          <Typography id="range-slider" gutterBottom>
            Select Height:
          </Typography>
          <Slider
            value={yValue}
            step={0.1}
            max={10}
            min={1}
            onChange={rangeYSelector}
            valueLabelDisplay="auto"
          />
        </div>
      </model-viewer>
    </Box >
  );
};

export default ARCard;

ARCard.defaultProps = {
  glbLink: '../assets/curtain1.glb',
  usdzLink: '../assets/curtain1.usdz',
  img: '../assets/Roller.jpg',
  loading: 'eager',
  reveal: 'auto',
  autoRotate: false,
  cameraControls: true,
  shadowIntensity: '1',
  shadowSoftness: '0',
  exposure: '2',
  ar: true,
  arModes: 'webxr scene-viewer quick-look',
  arScale: 'auto',
  arPlacement: 'wall',
  alt: 'A 3D model'
};
