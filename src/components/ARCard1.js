import React, { useRef, useEffect } from 'react';
import { Button, Box, Image, useColorModeValue as mode, } from '@chakra-ui/react';


const ARCard1 = ({ styles }) => {

  const arButton = useRef({});

  useEffect(() => { import('@google/model-viewer').catch(console.error); }, []);

  useEffect(() => {
    setTimeout(() => {
      if (arButton) {
        arButton.current.click();
      }
    }, 1000);
  }, [arButton]);

  return (
    <Box
      className="ARCard"
      bgColor={mode('gray.200', 'gray.400')}
      m="0"
      p={{ base: '1', md: '2' }}
      textAlign="center"
      borderRadius={3}
      shadow="dark-lg"
      position="relative"
      overflow="hidden"
      w={{ base: '250px', sm: '270px', md: '300px' }}
      h={{ base: '350px', md: '400px' }}
      {...styles}
    >
      <model-viewer
        poster={ARCard1.defaultProps.img}
        src={ARCard1.defaultProps.glbLink}
        ar-placement={ARCard1.defaultProps.arPlacement}
        touch-action="pan-y"
        ios-src={ARCard1.defaultProps.usdzLink}
        ar-modes={ARCard1.defaultProps.arModes}
        ar={ARCard1.defaultProps.ar}
        ar-scale={ARCard1.defaultProps.arScale}
        // camera-controls={ARCard1.defaultProps.cameraControls}
        exposure={ARCard1.defaultProps.exposure}
        loading={ARCard1.defaultProps.loading}
        shadow-intensity={ARCard1.defaultProps.shadowIntensity}
        shadow-softness={ARCard1.defaultProps.shadowSoftness}
        alt={ARCard1.defaultProps.alt}
        // orbit-sensitivity={-1}
        // camera-orbit="0deg 90deg"
        camera-orbit="0deg 75deg 4717m"
        field-of-view="30deg"
        // style={{
        //   width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'
        // }}

        style={{
          display: 'block',
          backgroundColor: '#f0f5f5',
          touchAction: 'none',

        }}
      >
        <Button
          ref={arButton}
          leftIcon={<Image src='./assets/3diconWhite.png' w="15px" />}
          slot="ar-button"
          variant="solid"
          textTransform="uppercase"
          colorScheme="blue"
          position="absolute"
          bottom="4px"
          left="27%"
          height="auto"
          className="myB"
          fontWeight="normal"
          ml={-3.5}
          display='flex'
        // onClick={arCheck}
        >
          Launch AR
        </Button>
      </model-viewer>
    </Box >
  );
};

export default ARCard1;

ARCard1.defaultProps = {
  glbLink: '../assets/Roller2.glb',
  usdzLink: '../assets/RB.usdz',
  // img: '../assets/Roller.jpg',
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
