import React, { useState } from 'react';

import { Col, Row, Container } from 'react-bootstrap';

import { ImageComponent } from '@components/image';
import { useTranslation } from 'next-i18next';
import LinkComponent from '@components/Link';

const ProductList = (props) => {
  console.log(props, 'aaa')

  const { t } = useTranslation("common");
  
  const listing = props && props?.LISTING?.length && props?.LISTING;
  

    return (
      
          <Container>
          
              {listing && listing.map((data) => (
                data.INFO && data.INFO.map((product, index) => {
                  return (
                    <LinkComponent key={product.id} href="">
                      <Col className="card mb-4" key={index}>
                        <ImageComponent
                          classprops={'contains_cover'}
                          src={data.GALLERY[0].image_path}
                          alt={product.tooltip}
                          width={800}
                          height={250}
                          quality={90}
                        />
                        <Col className={`card-img-overlay card-inverse text-center top-50 text-white z-1`}>
                          <h4>{product.tooltip}</h4>
                        </Col>
                        <Col className={`card-img-overlay card-inverse bg-dark bg-gradient bg-opacity-25 `}> </Col>
                            
                        </Col>
                    </LinkComponent>
                  )
                })
              ))}
          </Container>

       
    )
 
}




export default ProductList;
