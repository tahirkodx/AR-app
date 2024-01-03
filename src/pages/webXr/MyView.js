import React, { useEffect } from 'react';

const MyModelViewerComponent = () => {
  const changeTexture = (event) => {
    console.log(event.target.value);
    createAndApplyTexture("baseColorTexture", event.target.value);
  };

  const createAndApplyTexture = async (channel, value) => {
    const modelViewerTexture = document.querySelector("model-viewer#duck");
    const material = modelViewerTexture.model.materials[0];
    const texture = await modelViewerTexture.createTexture(value);

    if (channel.includes("base") || channel.includes("metallic")) {
      material.pbrMetallicRoughness[channel].setTexture(texture);
    } else {
      material[channel].setTexture(texture);
    }
  };

  useEffect(() => {
    const modelViewerTexture = document.querySelector("model-viewer#duck");

    modelViewerTexture.addEventListener("load", () => {
      // Check for AR support and handle accordingly
      if (modelViewerTexture.canActivateAR) {
        // Enable AR
        // modelViewerTexture.activateAR();
      }
    });
  }, []);

  return (
    <div style={{ margin: '0px', overflow: 'hidden' }}>
      <model-viewer
        src="https://uatapi.sedarglobal.com/uploads/100001/obj/android/Update_CS_LRM_Louvo_011.glb"
        id="duck"
        ar 
          ar-modes="webxr" 
          camera-controls
          disable-pan
          disable-zoom
          min-camera-orbit="auto 80deg auto"
          max-camera-orbit="auto 80deg auto"
          touch-action="none"
          
          shadow-intensity="1"
          alt="3d Human Model"
          camera-orbit="18.9deg 77.33deg 0.703m"
          camera-target="-0.00m 0.175m 0.00m"
          field-of-view="33deg"
          max-field-of-view="33deg"
          min-field-of-view="17deg"
          interpolation-decay="300">
      
        <div className="controls">
          <select id="normals2" onChange={changeTexture}>
            <option>None</option>
            <option value="texture1.jpeg">texture1</option>
            <option value="texture2.jpeg">texture2</option>
            <option value="texture3.jpeg">texture3</option>
            <option value="texture4.jpeg">texture4</option>
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
        </div>
      </model-viewer>
    </div>
  );
};

export default MyModelViewerComponent;
