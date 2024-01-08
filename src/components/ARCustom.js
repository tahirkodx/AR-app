import React, { useRef, useState } from "react";
import {
  Button,
  Modal,
  Image,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const ARCustom = () => {
  const arButton = useRef({});

  const [modelUrl, setModelUrl] = useState("");
  const [loadModelAR, setLoadModelAR] = useState("");

  const [xVal, setX] = useState(1);
  const [yVal, setY] = useState(1);

  // model set
  const [show, setShow] = useState(false);

  const handleShow = (value) => {
    console.log(value);
    if (value == "iphone") {
      setModelUrl(
        "https://uatapi.sedarglobal.com/uploads/100001/obj/ios/Update_RB_LRM_IO.usdz"
      );
      setLoadModelAR(value);
    } else {
      setModelUrl(
        "https://uatapi.sedarglobal.com/uploads/100001/obj/android/Update_CS_LRM_Louvo_011.glb"
      );
      setLoadModelAR(value);
    }
    setShow(true);
    // const modelViewerTexture = document.querySelector("model-viewer#arModel");
    // console.log(modelViewerTexture)
    // modelViewerTexture.addEventListener("load", () => {
    //   // Check for AR support and handle accordingly
    //   if (modelViewerTexture.canActivateAR) {
    //     // Enable AR
    //     modelViewerTexture.activateAR();
    //   }
    // });
  };

  const changeTexture = (event) => {
    const modelViewerTexture = document.querySelector("model-viewer#arModel");
    console.log(modelViewerTexture);
    createAndApplyTexture("baseColorTexture", event.target.value);
  };

  const createAndApplyTexture = async (channel, value) => {
    const modelViewerTexture = document.querySelector("model-viewer#arModel");
    const material = modelViewerTexture.model.materials[0];
    const texture = await modelViewerTexture.createTexture(value);
    if (channel.includes("base") || channel.includes("metallic")) {
      material.pbrMetallicRoughness[channel].setTexture(texture);
    } else {
      material[channel].setTexture(texture);
    }
  };
  const updateModelSize = () => {
    let z = 1;
    const modelViewerTransform = document.querySelector("model-viewer#arModel");
    const frame = document.querySelector("#frame");
    if (modelViewerTransform) {
      modelViewerTransform.updateFraming();
    }
    const updateScale = () => {
      modelViewerTransform.scale = `${xVal} ${yVal} ${z}`;
    };
    if (frame) {
      updateScale();
    }
  };

  const handleClose = () => setShow(false);
  return (
    <>
      <span
        onClick={(e) => handleShow("android")}
        className="text-link ar_tour_view"
      >
        AR View
      </span>
      {/* model */}
      <Modal show={show} onHide={handleClose}
      size="lg"
      aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" >AR Model</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div >
          {/* <Col lg={12} md={12} sm={12} xs={12}>
              
                </Col> */}
            <model-viewer
              src={modelUrl}
              id="transform"
              camera-controls
              ar-placement="wall"
              // touch-action="none"
              // touch-action="pan-y"
              ar
              orientation="20deg 0 0" 
              shadow-intensity="1"
              interaction-prompt-style
              
              alt="A 3D model of a arModel"
              style={{ width: '100%', height: '400px' }}
            >
              <div className="controls" style={{marginTop: "300px"}}>
              <p>Textures</p>
                <select className="form-select" id="normals2" onChange={changeTexture}>
                  <option>None</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1671627645_f8f322dc568482793da5.jpg">texture1</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1672146223_2b032d09292a5a13c4dd.jpg">texture2</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1672144467_936bc286fddeb917e245.jpg">texture3</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1671630602_6334f7305f2a7db05f47.jpg">texture4</option>
                  
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1672299884_f8bc4676cc432975a86c.jpg">texture5</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1672299666_873b728a82de7fec5fd7.jpg">texture6</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1666859310_975e68d4e62cdb7ba54c.jpg">texture7</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1672299199_b4b1c1f05be4ecbe0827.jpg">texture8</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1674739481_c8a265f614826dde4c7e.jpg">texture9</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/obj/roller_blind/texture13.png">
                    texture13
                  </option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/obj/roller_blind/Aluminum.jpg">
                    Aluminum
                  </option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/obj/roller_blind/Metal_02.jpg">
                    Metal_02
                  </option>
                </select>
                <div style={{ marginTop: "10px" }}>
                  Scale X: <input id="x" value={xVal} onChange={(e) => setX(e.target.value)} size="3" className="number form-select" />
                  Scale Y: <input id="y" value={yVal} onChange={(e) => setY(e.target.value)} size="3" className="number form-select" />
                </div>
                <div className="item-img-code">
                    <span id="frame" onClick={updateModelSize} className="text-link ar_tour_view btn btn-primary w-sm-100">Update Size</span>
                </div>

        
              </div>
            </model-viewer>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ARCustom;

ARCustom.defaultProps = {
  glbLink: "../assets/Roller2.glb",
  usdzLink: "../assets/RB.usdz",
  // img: '../assets/Roller.jpg',
  loading: "eager",
  reveal: "auto",
  autoRotate: false,
  cameraControls: true,
  shadowIntensity: "1",
  shadowSoftness: "0",
  exposure: "2",
  ar: true,
  arModes: "webxr scene-viewer quick-look",
  arScale: "auto",
  arPlacement: "wall",
  alt: "A 3D model",
};
