import dynamic from "next/dynamic";
import React, { useState } from 'react'
import Link from "next/link";
import Container from "react-bootstrap/Container";
import shortid from 'shortid';
import axiosInstance from '@utils/axios';
import nextI18nextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { setCookie, getCookie } from 'cookies-next';

const Tour = dynamic(() => import("reactour"), { ssr: false });

export async function getServerSideProps(context) {

    const { params: { category_slug, slug } } = context;
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
    const response = await axiosInstance.get(`homepage/category_menu?site=${siteId}&lang=${lang}&country=${country}&content=${content}&cat_id=${slug}`);

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
            subcategoryList: response?.data,
            category_slug: category_slug,
            showArTour
        },
    };
}

const steps = [
    {
      selector: '.ar_tour_material',
      content: 'Select Material',
    },
]

function SubCategory(props) {

    const { subcategoryList, category_slug, showArTour } = props;

    const [arShowStatus] = useState(showArTour);

    return (
        <div className="main-wrapper">
            <div className="page-top-bar">
                <Container fluid>
                    <div className="top-bar-inner">
                        <div className="top-bar-left">
                            <Link href="/category" className="text-link">
                                <img src="/assets/images/arrow-left.svg" alt="back" />
                            </Link>
                        </div>
                        <div className="top-bar-center">
                            <h2>Curtains & Drapes</h2>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="main-wrapper-content">
                <div className="categories-middle">
                    <Container fluid>
                        <div className="categories-inner">
                            <ul className="categories-list">
                                {subcategoryList?.result && subcategoryList?.result.map((subCategory, index) => (
                                    <li key={subCategory.id}>
                                        <Link href={`/products/${category_slug}/${subCategory?.link_url}`} className="text-link">
                                            <div className={index === 0 ? `categories-link ar_tour_material` : `categories-link`}>
                                                <div className="categories-img">
                                                    <img src={subCategory.image_path}
                                                        alt={subCategory.content}
                                                    />
                                                </div>
                                                <div className="categories-text">
                                                    <p>{subCategory.content}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
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
                className={'subcategory-mask'}
                onAfterOpen={(target) => (document.body.style.overflowY = 'hidden')}
                onRequestClose={() => console.log('called')} />
        </div>

    )
}

export default SubCategory
