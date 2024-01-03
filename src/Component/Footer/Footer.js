import { cn_iso, langName} from '@utils/i18n';
import _ from 'lodash';
import { countries } from '@utils/countriesData';
import Cookies from 'js-cookie';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import FooterSkeleton from 'src/Preloader/FooterSkeleton';
import { HiOutlineArrowNarrowUp } from 'react-icons/hi';
import Footer1 from '../Footer1/Footer1';
import Footer2 from '../Footer2/Footer2';
import Footer3 from '../Footer3/Footer3';
import Footer4 from '../Footer4/Footer4';
import LinkComponent from '@components/Link';
import { useRouter } from 'next/router';


const lang = langName ? langName : "en"; //i18next.language;

export function DynamicComponent(props) {
  switch (props.url) {
    case 'Component/Footer1/Footer1':
      return <Footer1  {...props} />
    case 'Component/Footer2/Footer2':
      return <Footer2  {...props} />
    case 'Component/Footer3/Footer3':
      return <Footer3  {...props} />
    case 'Component/Footer4/Footer4':
      return <Footer4  {...props} />
    default:
      return ''
  }
}

export default function Footer({ props }) {
  const { t } = useTranslation('common')
  const [views, setViews] = useState([]);
  const { locale } = useRouter();

  const numberCart = 0;
  const UserMenu = {};
  const siteDe = {};

  const [visible, setVisible] = useState(false);
  const ScrollTopButton = () => {
    useEffect(() => {
      var scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true)
      }
      else if (scrolled <= 300) {
        setVisible(false)
      }
    }, [visible])

    const scrollToTop = () => {
      typeof window !== "undefined" && window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    typeof window !== "undefined" && window.addEventListener('scroll', setVisible);

    return (
      <div className='scrollTop' onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
        <HiOutlineArrowNarrowUp color='#fdcc5d' size={32} />
      </div>
    )

  }


  let local_url = UserMenu && UserMenu.cn_iso && countries[UserMenu.cn_iso] ? '/' + countries[UserMenu.cn_iso]['code'] + '-' + lang : 'uae-en';
  let search_url = typeof window !== "undefined" && window.location ? window.location.search : '';

  return (
    <div>
      {!views ? <FooterSkeleton /> :
        <>
          <footer className="Footer">
            <Container fluid className="footer_content">
              <div className="footer_main">
                {locale !== "default" && props?.result && props?.result?.COMPONENT && props?.result?.COMPONENT.map((data, index) => (
                  <React.Fragment key={index}>
                    <DynamicComponent url={data.PARENT.component_url}  {...data.PARENT} />
                  </React.Fragment>
                ))}
              </div>
            </Container>

            <ScrollTopButton />
          </footer>
          
          <section className="tab-section-footer max1920">
            <div className="tab-footer">
              <Container>
                <Row>
                  <Col className="p-0">
                    <LinkComponent href={local_url + search_url} className="">
                      <img src={`/assets/images/mobilefooter/home.svg`} alt="sedar" width="auto" height="auto" />
                      <p> {t('home')} </p>
                    </LinkComponent>
                  </Col>
                  {cn_iso == 'XX' ? <Col className="p-0">
                    <LinkComponent href={local_url + '/contact' + search_url} className="">
                      <img src={`/assets/images/mobilefooter/contact.svg`} alt="sedar" width="auto" height="auto" />
                      <p> {t('Contact')} </p>
                    </LinkComponent>
                  </Col> :
                    <Col className="p-0 Consultation_Mobile_footer">
                      <LinkComponent href={local_url + "/free-consultation"+ search_url} className="">
                        <img src={`/assets/images/mobilefooter/consultation.svg`} alt="sedar" style={{ maxWidth: '90px' }} width="auto" height="auto" />
                        <p> {t('Consultation')} </p>
                      </LinkComponent>
                    </Col>}
                  <Col className="p-0">
                    <LinkComponent href={local_url + "/find-your-store"+ search_url} className="">
                      <img src={`/assets/images/mobilefooter/store.svg`} alt="sedar" width="auto" height="auto" />
                      <p>{t('Store')}  </p>
                    </LinkComponent>

                  </Col>
                  <Col className="p-0">
                    <LinkComponent href={local_url + "/contracts"+ search_url} className="">
                      <img src={`/assets/images/mobilefooter/project.svg`} alt="sedar" width="auto" height="auto" />
                      <p> {t('projects')} </p>
                    </LinkComponent>

                  </Col>

                  {UserMenu != undefined && UserMenu.CHILD && UserMenu.CHILD[2] && UserMenu.CHILD[2].SUB_CHILD != undefined && UserMenu.CHILD[2].applicable_countries.indexOf(siteDe) >= 0 && (
                    <Col className="p-0 carttext Begin_Checkout_Button_Mobile">
                      <LinkComponent href={local_url + "/cartPage"} className="d-block">
                        <span className="position-relative d-block" style={{ maxWidth: "90px" }}>
                          <img src={`/assets/images/mobilefooter/cart.svg`} alt="sedar" width="auto" height="auto" />
                          <p> {t('Cart')} </p>
                          <span className="badgenumber badge-warning position-absolute me-2" >{numberCart}</span>
                        </span>
                      </LinkComponent>
                    </Col>
                  )}
                </Row>
              </Container>
            </div>
          </section>

        </>
      }
    </div>
  );
}