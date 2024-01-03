import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import './LoaderComponent.scss';

// import LocalizedLink from '../../Redux-Config/LocalizedLink';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import parse from 'html-react-parser';
// import { Col, Container, Row, Button ,ProgressBar} from 'react-bootstrap';
// import { Line, Circle, ProgressProps } from 'rc-progress';


const LineLoader = (props) => {

  // const [percent, setPercent] = useState(0)
  // const [autoPlay, setAutoPlay] = useState(props.autoPlay)

  // function Increment() {
  //   let timer
  //   if (autoPlay) {
  //     const timer = setTimeout(() => {
  //       setPercent(percent + 1);
  //     }, props.time);
  //     if (percent == 200) {
  //        clearTimeout(timer);
  //        setPercent(0);
  //       return;
  //     }
  //     return () => clearTimeout(timer);
  //   } else {
  //     setPercent(40);
  //   }
  //   return () => clearTimeout(timer);
  // }
  // useEffect(() => {
  //   Increment();
  // });

  return (
    <>
      <div className="LineLoader">
        {/* {props.type == 'C' ?
        <div className="CircleLoader">
          <div className="arrowPosition">
            <LazyLoadImage effect="" src={`/assets/images/homepage/Group137.png`} alt="next" />
          </div>
          <Circle strokeWidth={3} strokeColor="#FDCC5D" trailWidth="3" percent={percent} strokeLinecap="square" />
        </div>
        :
        <Line strokeWidth={1.5} strokeColor="#FDCC5D" trailWidth="1.5" percent={percent} strokeLinecap="square" />

      } */} 
        <div className="progress">
          <div className="progress-value" style={{animation:props.animation}}></div>
        </div>
      </div>
    </>
  );
}


LineLoader.propTypes = {};

LineLoader.defaultProps = {};

export default LineLoader;

