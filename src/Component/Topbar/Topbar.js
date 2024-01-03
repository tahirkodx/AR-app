import React, { useState, useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Mousewheel, Pagination, Autoplay
} from 'swiper';
import { cn_iso } from '@utils/i18n';
import { useRouter } from 'next/router';
import LinkComponent from '@components/Link';



SwiperCore.use([Mousewheel, Pagination, Autoplay]);


const TopBar = (props) => {
  const router = useRouter();
  const { locale } = router;
  let data = props;
  const prmotionconfig = {
    loop: true,
    observer: true,
    observeParents: true,
    autoplay: {
      "delay": 2000,
      "disableOnInteraction": false,
    },
    direction: 'vertical',
    spaceBetween: 30,
    mousewheel: true,
  }
  if (props.CHILD && props.CHILD.length > 1) {
    return (
      <>

        <section id="Topbar">
          <Container fluid className="Topbar py-2">
            {/* <Row> */}
            {props.CHILD[0].SUB_CHILD && (
              <Col sm={12}>
                {locale != "default" && data.CHILD && data.CHILD[0] && data.CHILD[0].applicable_countries.indexOf(cn_iso) >= 0 && (
                  <div className="promotion text-center">
                    <Swiper {...prmotionconfig} >
                      {props.CHILD[0].SUB_CHILD && props.CHILD[0].SUB_CHILD.map(function (row, index) {

                        return (
                          <SwiperSlide key={index}>
                            <div>
                              <LinkComponent href={"/"} className="text-light">
                                {row.content}
                              </LinkComponent>
                            </div>
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  </div>
                )}
              </Col>
            )
            }
          </Container>
        </section>

      </>
    );
  } else {

    return (
      <section id="Topbar">
        <Container fluid className="max_content Topbar">
          <Row></Row>
        </Container>
      </section>
    );
  }
}


export default TopBar;



