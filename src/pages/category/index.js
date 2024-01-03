import dynamic from "next/dynamic";
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import shortid from 'shortid';
import axiosInstance from '@utils/axios';
import nextI18nextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { setCookie } from 'cookies-next';
import Cookies from "js-cookie";

const Tour = dynamic(() => import("reactour"), { ssr: false });

export async function getServerSideProps(context) {

    const { locale, req, res } = context;
    let genrateVistId = shortid.generate(Date());

    if (!context.req.cookies['visitorId']) {
        setCookie('visitorId', genrateVistId, { req, res, maxAge: 24 * 60 * 60 * 365 });
    }

    let showArTour = context.req.cookies['arShow'];
    if(showArTour === undefined) {
        showArTour = true;
    }

    let country = locale && locale?.split('-')[0] || 'uae';
    let lang = locale && locale?.split('-')[1] || 'en';
    const content = 'homepage';
    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const response = await axiosInstance.get(`homepage/category_menu?site=${siteId}&lang=${lang}&country=${country}&content=${content}`);
    if (response?.data?.result?.length == 0) {
        if (locale == 'default') {
            return {
                redirect: {
                    destination: `/`,
                    permanent: true,
                },
            }
        } else {
            return {
                redirect: {
                    destination: `/${locale}`,
                    permanent: true,
                },
            }
        }
    }
    context.res.setHeader(
        "Cache-Control",
        "s-maxage=3600, stale-while-revalidate"
    );

    return {
        props: {
            ...(await serverSideTranslations(context.locale, ['common'], nextI18nextConfig)),
            // Will be passed to the page component as props
            categoryList: response?.data,
            showArTour
        },
    };
}

const steps = [
    {
      selector: '.ar_tour_category',
      content: 'Select Category',
    },
]

function Category(props) {

    const { categoryList, showArTour } = props;

    const [arShowStatus] = useState(showArTour);
    
    return (
        <div className="main-wrapper">
            <div className="page-top-bar">
                <Container fluid>
                    <div className="top-bar-inner">
                        <div className="top-bar-left">
                            <Link href="/" className="text-link">
                                <img src="/assets/images/arrow-left.svg" alt="back" />
                            </Link>
                        </div>
                        <div className="top-bar-center">
                            <h2>AR Tool</h2>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="main-wrapper-content">
                <div className="ar-tool-middle">
                    <Container fluid>
                        <div className="ar-tool-inner">
                            <Row>
                                {categoryList.result && categoryList?.result?.map((category, index) => (
                                    <Col lg={4} md={6} sm={6} xs={6} key={'category' + index}>
                                        <div className={index === 0 ? `tool-menu-link ar_tour_category` : `tool-menu-link`}>
                                            <Link href={`/sub-category/${category?.link_url}/${category.id}`} className="text-link">
                                                <div className="menu-link-icon">
                                                    <img src={category.image_path}
                                                        alt="curtains-drapes"
                                                    />
                                                </div>
                                                <div className="menu-link-text">
                                                    <p>{category.content}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                ))}

                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
            <Tour
                steps={steps}
                isOpen={arShowStatus !== 'false'}
                showCloseButton={false}
                showNavigation={false}
                showNavigationNumber={false}
                showNumber={false}
                showButtons={false}
                className={'category-mask'}
                onAfterOpen={(target) => (document.body.style.overflowY = 'hidden')}
                onRequestClose={() => console.log('called')} />
        </div>
    )
}

export default Category
