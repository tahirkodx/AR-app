import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import { Col, Row } from 'react-bootstrap';

// import dynamic component
// import HomeSkeleton from "src/Preloader/HomeSkeleton";
const HomeSkeleton = dynamic(() => import("src/Preloader/HomeSkeleton"));
const DynamicHomeBanner = dynamic(() => import("src/Component/Banner/Banner"), {
  ssr: true,
  loading: () =>
    <div>
      <Row>
        <Col sm={12}>
          <Skeleton height={'80vh'} count={1} className="my-3" />
        </Col>
      </Row>
    </div>
});

const ProductSliderDynamic = dynamic(
  () => import(`src/Component/ProductSlider/ProductSlider`),
  {
    ssr: true,
    loading: () =>
      <div>
        <HomeSkeleton />
      </div>
  }
);

const HomeTopCategory = dynamic(
  () => import(`src/Component/HomeTopCategory/HomeTopCategory`),
  {
    ssr: true,
    loading: () =>
      <div>
        <HomeSkeleton />
      </div>
  }
);

const PageBannerDynamic = dynamic(
  () => import(`src/Component/PageBanner/PageBanner`),
  {
    ssr: true,
    loading: () =>
      <div>
        <HomeSkeleton />
      </div>
  }
);

const ProductListDynamic = dynamic(
  () => import(`src/Component/ProductList/ProductList`),
  {
    ssr: true,
    loading: () =>
      <div>
        <HomeSkeleton />
      </div>
  }
);

const SuccessDynamic = dynamic(() => import(`src/Component/Utility/Success`), {
  ssr: true,
  loading: () =>
    <div>
      <HomeSkeleton />
    </div>
});




export function ImportDynamicComponent(props) {
  switch (props.url) {
    case "Component/Banner/Banner":
      return <DynamicHomeBanner {...props} />;
    case "Component/ProductSlider/ProductSlider":
      return <ProductSliderDynamic {...props} />;
    case "Component/HomeTopCategory/HomeTopCategory":
      return <HomeTopCategory {...props} />;
    case "Component/PageBanner/PageBanner":
      return <PageBannerDynamic {...props} />;
    case "Component/ProductPage/ProductPage":
      return <ProductListDynamic {...props} />;
    case "Component/Utility/Success":
      return <SuccessDynamic {...props} />;
    default:
      return "";
  }
}
