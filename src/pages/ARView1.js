import SampleModel from '@utils/SampleModel'
import React from 'react'
import dynamic from 'next/dynamic';

const ARCard1 = dynamic(() => import('@components/ARCard1'), { ssr: false });

function ARView() {

    return (
        <div>
            <ARCard1 ios-src={SampleModel.usdzLink} />
        </div>
    )
}

export default ARView
