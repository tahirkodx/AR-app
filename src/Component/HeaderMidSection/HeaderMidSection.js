import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import LinkComponent from '@components/Link';
import { IconComponent } from '@components/image';



const MobileQuickmenu = ({ data }) => {
    return (
        <Container fluid className={`d-flex align-items-center pt-3 pb-3`}>
            {data[1]?.SUB_CHILD != undefined && data[1]?.SUB_CHILD[0] != undefined ? (
                <Col className={`d-inline-flex justify-content-sm-center justify-content-md-end`}>
                    {/* <LinkComponent href={`product/blinds-shades`} className="btn btn-light px-3 mx-2" >
                                <IconComponent
                                    src={data[1].SUB_CHILD[0].image_path}
                                    alt={data[1]?.SUB_CHILD[0]?.image_path?.image_alt_seo || 'Sedar Global'}
                                    width={32}
                                    height={24}
                            content={data[1].SUB_CHILD[0].content}
                                    spanClass="ps-2 fs-6"
                                />

                                

                            </LinkComponent> */}
                    <LinkComponent href={`/category`} className="btn btn-light px-3 mx-2 w-sm-100 ar_tour_btn" >
                        <IconComponent
                            src={`/assets/images/ar-view.svg`}
                            alt={data[1]?.SUB_CHILD[0]?.image_path?.image_alt_seo || 'Sedar Global'}
                            width={32}
                            height={24}
                            content='AR View'
                            spanClass="ps-2 fs-6"
                        />

                    </LinkComponent>
                </Col>
            ) : ''}
            {data[1].SUB_CHILD != undefined && data[1].SUB_CHILD[1] != undefined ? (
                <Col className={`d-inline-flex justify-content-sm-center justify-content-md-start`}>
                    <LinkComponent href={data[1].SUB_CHILD[1].link_url} className="btn btn-light px-3 mx-2 w-sm-100" >

                        <IconComponent
                            src={data[1].SUB_CHILD[1].image_path}
                            alt={data[1]?.SUB_CHILD[1]?.image_path?.image_alt_seo || 'Sedar Global'}
                            width={32}
                            height={24}
                            content={data[1].SUB_CHILD[1].content}
                            spanClass="ps-2 text-wrap"
                        />
                    </LinkComponent>
                </Col>
            ) : ''}
        </Container>
    );
}


const Logo = (props) => {
    const { locale } = useRouter();
    var data = props.logoPath;
    if (data.CHILD) {
        if (data.CHILD[0].SUB_CHILD && data.CHILD[0].SUB_CHILD[0]) {
            return <LinkComponent href={"/"}>
                <IconComponent
                    justifyContent={locale.indexOf("-ar") !== -1 ? "right" : "left"}
                    classprops="logoimage"
                    src={data.CHILD[0].SUB_CHILD[0].image_path}
                    alt={data?.CHILD[0]?.SUB_CHILD[0]?.image_alt_seo || 'Sedar Global'}
                    width={96}
                    height={43}
                    quality={100}
                />
            </LinkComponent>
        }
        else {
            return <LinkComponent href={"/"}>
                <IconComponent
                    justifyContent={locale.indexOf("-ar") !== -1 ? "right" : "left"}
                    classprops="logoimage"
                    src={`/assets/images/logo@2x.png`}
                    alt={'Sedar Global'}
                    width={101}
                    height={50}
                    quality={100}
                />
            </LinkComponent>
        }
    } else {
        return false;
    }
};

function Header(data) {

    let image_path = data?.topbar != undefined && data?.topbar?.CHILD && data?.topbar?.CHILD[1] ? data?.topbar?.CHILD[1].SUB_CHILD[0].image_path : '';

    const router = useRouter();

    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const [boxShadow, setBoxShadow] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        let backgroundTransparacyVar = clientWindowHeight / 600;

        if (backgroundTransparacyVar < 1) {
            let boxShadowVar = backgroundTransparacyVar * 0.1;
            setBoxShadow(boxShadowVar);
        }
    }, [clientWindowHeight]);

    return (
        <React.Fragment>
            <div id="Header">
                <Container fluid className={`d-flex align-items-center pt-3 pb-3 ${boxShadow > 0 ? 'fixed-top' : ''}`} style={{ boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`, backgroundColor: '#fff' }}>
                    <Col sm={2} md>
                        <button className="navbar-toggler" type="button">
                            <IconComponent
                                src={`/assets/icon/Group 6489.png`}
                                alt={'Sedar Global'}
                                width={18}
                                height={16}
                            />
                        </button>
                    </Col>
                    <Col className={`d-inline-flex justify-content-center`}>
                        <Logo logoPath={data} />
                    </Col>

                    <Col className={`d-inline-flex justify-content-end`}>
                        {image_path &&
                            <IconComponent
                                src={image_path}
                                alt={'Sedar Global'}
                                width={18}
                                height={18}
                            />
                        }
                    </Col>

                </Container>

                <MobileQuickmenu data={data.CHILD} />

            </div>
        </React.Fragment>
    );
}

export default Header;
