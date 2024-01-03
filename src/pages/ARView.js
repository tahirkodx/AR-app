import SampleModel from '@utils/SampleModel'
import React from 'react'
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';

const ARCard = dynamic(() => import('@components/ARCard'), { ssr: false });

function ARView() {
    Cookies.set('arShow', false);
    return (
        <div>
            <ARCard ios-src={SampleModel.usdzLink} />
        </div>
    )
}

export default ARView
