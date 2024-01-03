import React, { useState } from 'react';
// import './ProductSlider.scss';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual, Navigation, Pagination, Lazy, Autoplay } from "swiper";
import { RiArrowRightSLine } from 'react-icons/ri';

import CircleLoader from '../LoaderComponent/CircleLoader';

SwiperCore.use([Virtual, Navigation, Pagination, Autoplay]);

import { useTranslation } from 'next-i18next';
import LinkComponent from '@components/Link';
import { ImageComponent } from '@components/image';
import parse from 'html-react-parser';


const ProductSlider = (props) => {
  const { t } = useTranslation('common');
  const [animation, setAnimation] = useState('all 0.2s');
  const [progress, setProgress] = useState(0);

  const swiper_slider = {

    // loop: true,
    slidesPerView: 3,
    autoHeight: false, //enable auto height
    //effect: "fade",
    spaceBetween: 20,
    navigation: {
      nextEl: '.ProductSlider .swiper-next',
      prevEl: '.ProductSlider .swiper-prev'
    },
    breakpoints: {
      // when window width is >= 320px

      // when window width is >= 480px
      0: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
    observer: true,
    observeParents: true,
    
  };


  const swiperSliderMobile = {
    loop: false,
    observer: true,
    observeParents: true,
    autoHeight: false, //enable auto height
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    },
    autoplay: {
      "delay": 4000,
      "disableOnInteraction": false,
    },
  };

  return (
    <section className="ProductSlider pt-4 mt-2">
      <Container className="max-content">
        
          <Row>
            <Col sm={12}>
              <div className="py-1">
                <h2 className="border-start border-2 border-warning ps-3 ps-lg-4"> {props.title ? props.title : t_lang("Products")}</h2>
                {props.description && (<div className="desc"> {parse(props.description)} </div>)}
              </div>
              {props.CHILD.map((data, index) => {
                if (data.SUB_CHILD == undefined) {
                  return false;
                }

                return (
                  <div  key={index}>
                      <Row className="align-items-center my-3">
                        <Col xs={9}><h2>{data.title}</h2></Col>
                        <Col xs={3}>
                          <LinkComponent href={data.link_url} className="mobile-viewall d-block text-nowrap">
                            {t('View_All')}  <RiArrowRightSLine className="text-dark mb-1" size={18} role="button" />
                          </LinkComponent>
                        </Col>
                      </Row>
                    <div className="mb-5">
                      <Swiper {...swiperSliderMobile} key={index}>
                        {data.SUB_CHILD.map((slideContent, index) => {
                          return (

                            <SwiperSlide key={index} virtualIndex={index}>
                              <LinkComponent href={slideContent.link_url ? slideContent.link_url : '#'}>
                                <ImageComponent
                                  key={index}
                                  classprops="w-100"
                                  src={slideContent.image_path}
                                  alt={slideContent.image_alt_seo}
                                  width={420}
                                  height={590}
                                  title={slideContent.title}
                                />

                              </LinkComponent>

                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  </div>
                )
              })
              }
            </Col>
          </Row>
       
      </Container>
    </section>
  )
};



export default ProductSlider;
