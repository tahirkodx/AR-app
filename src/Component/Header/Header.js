import _ from 'lodash';
import React, { createContext, useReducer } from 'react';
import dynamic from 'next/dynamic';

const TopBar = dynamic(() => import("../Topbar/Topbar"));
const HeaderMidSection = dynamic(() => import("../HeaderMidSection/HeaderMidSection"));

export const HeaderContext = createContext();
export function DynamicComponent(props) {
  switch (props.url) {
    case 'Component/Topbar/Topbar':
      return <TopBar  {...props} />
    case 'Component/HeaderMidSection/HeaderMidSection':
      return <HeaderMidSection RESULT={props?.RESULT} topbar={props?.topbar}  {...props} />
    default:
      return ''
  }
}


function Header({ props }) {
  

  return (
      <div className={'headerMain'}>
        <div className="position-relative" style={{ background: "#fff" }}>
          {
            props?.result && props?.result?.COMPONENT && props?.result?.COMPONENT.map((data, index) => (
              <div key={'result' + index}>
                <DynamicComponent RESULT={props?.result} topbar={props?.result?.COMPONENT[0]?.PARENT} url={data.PARENT.component_url}  {...data.PARENT} />
              </div>
            ))
          }
        </div>
      </div>
  );
}
export default Header;