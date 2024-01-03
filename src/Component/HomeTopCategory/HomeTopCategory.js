import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col } from 'react-bootstrap';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import SwiperCore, {
    Pagination
} from 'swiper';

SwiperCore.use([Pagination]);
import { connect } from "react-redux";
import LinkComponent from '@components/Link';

const HomeTopCategoryConfig = {
    loop: false,
    autoHeight: false, //enable auto height
    //effect: "fade",
    pagination: { clickable: true },
    observer: true,
    observeParents: true,
    breakpoints: {
        // when window width is >= 320px

        // when window width is >= 480px
        0: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        576: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        // when window width is >= 640px
        767: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 8,
            spaceBetween: 50
        }
    },
};

const HomeTopCategory = (props) => {
    return (
        <section className="HomeTopCategory max1920 pt-3 mt-n1">

                <Row>
                    <Col sm={12}>
                        <div className="HomeTopCategory-slider">
                            <Swiper className="top-category" {...HomeTopCategoryConfig}>
                                {props && props?.categoryMenu?.map((row, index) => {

                                    return (
                                        <SwiperSlide key={index}>
                                            {row.SUB_CHILD ? (
                                                <LinkComponent href={row.redirect_to_type == 'PRODUCT' ? `product/${row.link_url}` : row.redirect_to_type == 'OTHER' ? row.redirect_url : row.link_url}>
                                                    <LazyLoadImage effect="" className="img-fluid" src={row.image_path} alt="sedarglobal" width="auto" height="auto" />
                                                    <p> {row.content}</p>
                                                </LinkComponent>
                                            ) : (
                                                <LinkComponent href={row.redirect_to_type == 'PRODUCT' ? `product/${row.link_url}` : row.redirect_to_type == 'OTHER' ? row.redirect_url : row.link_url}>
                                                        <LazyLoadImage effect="" className="img-fluid" src={row.image_path} alt="sedarglobal" width="auto" height="auto" />
                                                    <p> {row.content}</p>
                                                </LinkComponent>
                                            )}
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </Col>
                </Row>
        </section>
    )
}

export default HomeTopCategory;