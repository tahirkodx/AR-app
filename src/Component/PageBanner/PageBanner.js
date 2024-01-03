import React from 'react';
// import './PageBanner.scss';

// import LocalizedLink from '../../Redux-Config/LocalizedLink';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import parse from 'html-react-parser';
// import { t_lang } from '../../services/i18n';

const PageBanner = (props) => (
  <section className="PageBanner max1920">
    <picture>
      <source media="(max-width: 575.98px)" srcSet={props.image_path_portrait} />
      <source media="(min-width: 576px) and (max-width: 767.98px)" srcSet={props.image_path_landscape} />
      <source media="(min-width: 768px) and (max-width: 991.98px)" srcSet={props.image_path_03} />
      <source media="(min-width: 992px) and (max-width: 1200px)" srcSet={props.image_path_02} />
      <source media="(min-width: 1201px) and (max-width: 1400px)" srcSet={props.image_path_01} />
      <LazyLoadImage effect="" src={props.image_path} alt={props.image_alt_seo} className="imsg" width="auto" height="auto" />
    </picture>
    {/* <div className="breadcrumb"><LocalizedLink href={"/"}> {t_lang("Home")} </LocalizedLink>/ Franchise</div> */}
  </section>
);

PageBanner.propTypes = {};

PageBanner.defaultProps = {};

export default PageBanner;
