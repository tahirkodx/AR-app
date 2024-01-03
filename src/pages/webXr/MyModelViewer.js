import React, { useEffect } from 'react';

const MyModelViewerComponent = () => {
  const changeTexture = event => {
    console.log(event.target.value);
    createAndApplyTexture("baseColorTexture", event.target.value);
    
  };
  
      const createAndApplyTexture = async (channel, value) => {
        const modelViewerTexture = document.querySelector("model-viewer#duck");
    const material = modelViewerTexture.model.materials[0];
    console.log(material)
        const texture = await modelViewerTexture.createTexture(value);
        if (channel.includes("base") || channel.includes("metallic")) {
          material.pbrMetallicRoughness[channel].setTexture(texture);
        } else {
          material[channel].setTexture(texture);
        }
      };


  return (
    <div style={{ margin: '0px', overflow: 'hidden' }}>
       <model-viewer
              src="https://uatapi.sedarglobal.com/uploads/100001/obj/android/Update_CS_LRM_Louvo_011.glb"
              id="duck"
              camera-controls
              ar-placement="wall"
              touch-action="pan-y"
              ar
              alt="A 3D model of a duck"
            >
             
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
