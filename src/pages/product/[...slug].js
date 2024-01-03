import { useRouter } from 'next/router';
import React from 'react';
import axiosInstance from '@utils/axios';
import nextI18nextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from 'src/Component/Header/Header';
import Footer from 'src/Component/Footer/Footer';
import { ccy_code, ccy_decimals, detect_country } from '@utils/i18n';
import { ImportDynamicComponent } from '@components/importDynamicComponent';
import { setCookie } from 'cookies-next';
import shortid from 'shortid';

export async function getServerSideProps(context) {
    const { locale, req, res } = context;

    let genrateVistId = shortid.generate(Date());

    if (!context.req.cookies['visitorId']) {
        setCookie('visitorId', genrateVistId, { req, res, maxAge: 24 * 60 * 60 * 365});
    }

    let country = locale && locale?.split('-')[0] || 'uae';
    let lang = locale && locale?.split('-')[1] || 'en';
    const cn_iso = 'AE';
    const user = context.req.cookies['USER_ID'] || 0;
    const visitor = context.req.cookies['visitorId'] || genrateVistId;
    const siteId = process.env.NEXT_PUBLIC_SITE_ID;


    const Query = context.query && Object.keys(context.query).map((key) => key != 'slug' ? `${key}` : "").join('&') || 0;



    const category_slug = context?.query?.slug && context?.query?.slug.length > 0 ? context?.query?.slug[0] : undefined;
    const sub_category_slug = context?.query?.slug && context?.query?.slug.length > 0 ? context?.query?.slug[1] : undefined;

    const response = await axiosInstance.get(`product/third?site=${siteId}&lang=${lang}&country=${country}&content=product_category_listing&cn_iso=${cn_iso}&category_redirect_type=product&category_slug=${category_slug}&slug_url=${sub_category_slug}&filters=${Query}&visitorId=${visitor}&userId=${user}&currency=${ccy_code}&ccy_decimal=${ccy_decimals}&detect_country=${detect_country}`);

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

    const headerRes = await axiosInstance.get(`header/first?site=${process.env.NEXT_PUBLIC_SITE_ID}&lang=${lang.toLowerCase()}&country=${country}&visitorId=${visitor}&userId=${user}&content=header&slug_url=header&cn_iso=${cn_iso}&detect_country=${detect_country}&page_name=${context?.query?.slug && context?.query?.slug.length > 0 ? context?.query?.slug[0] : ""}`);

    const Productres = await axiosInstance.get(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}api/products.json`);
    const footerRes = await axiosInstance.get(`footer/first?site=${process.env.NEXT_PUBLIC_SITE_ID}&lang=${lang}&country=${country}&content=footer&slug_url=footer&cn_iso=${cn_iso}`);

   
    

    context.res.setHeader(
        "Cache-Control",
        "s-maxage=3600, stale-while-revalidate"
    );

    

    return {
        props: {
            ...(await serverSideTranslations(context.locale, ['common'], nextI18nextConfig)),
            // Will be passed to the page component as props
            curtainDrapData: response?.data,
            productData: Productres?.data,
            headerData: headerRes.data,
            footerData: footerRes.data,
        },
    };
}


export default function Curtains(props) {
    const router = useRouter();
    const { locale } = router;
    return (
        <React.Fragment>
            
            <Header props={props.headerData} />
            <div>
                {
                    props?.curtainDrapData?.result && props?.curtainDrapData?.result?.COMPONENT && props?.curtainDrapData?.result?.COMPONENT.map((data, index) => (
                        <React.Fragment key={index}>
                            <ImportDynamicComponent url={data.PARENT.component_url}  {...data.PARENT} banner={props?.bannerRes?.result} /> 
                        </React.Fragment>
                    ))
                }
            </div>
            <Footer props={props.footerData} />
        </React.Fragment>
    )
}
