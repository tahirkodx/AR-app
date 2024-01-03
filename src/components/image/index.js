import React from 'react';
import Image from 'next/legacy/image';


export const ImageComponent = (props) => {
    const { classprops, src, alt, width, height, title, quality, contains, unoptimized, size, objectfit, style, layout } = props;

    return (
        <React.Fragment>
            <Image
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
                // placeholder='blur' 
                className={contains ? `${classprops}` : `contains_img ${classprops}` || ''}
                src={src || 'https://uatapi.sedarglobal.com/uploads/100001/content/homepage/1683526035_054c0f713354697ad58f.webp'}
                alt={alt || ''}
                width={width || 250}
                height={height || 250}
                layout={layout || 'responsive'}
                // sizes={size || '100vw'}
                // sizes="100vw"
                priority
                unoptimized={unoptimized || false} 
                //  unoptimized
                quality={quality || 85}
                lazy="true"
                // fill
            />
            {title && <div className="overly-color"></div>}
            {title && <div className="slider-text"> <p> {title} </p> </div>}
        </React.Fragment>

    );
};

export const IconComponent = (props) => {
    const { classprops, src, alt, width, height, content, spanClass, quality, contains, unoptimized, marginLeftRight, content_align } = props;
    let marginLR = marginLeftRight ? `auto 2px` : '';
    return (
        <div style={{ display: 'flex', margin: marginLR, justifyContent: props?.justifyContent ? props?.justifyContent : 'center' }}>
            {content && content_align == 'left' && <span className={spanClass ? spanClass : 'img_with_text'}>{content}</span>}
            <Image
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
                // placeholder='blur' 
                className={contains ? `${classprops}` : `contains_img ${classprops}` || ''}
                src={src || ''}
                alt={alt || ''}
                width={width || 250}
                height={height || 250}
                // priority
                // fill
                quality={quality || 85}
                unoptimized={unoptimized || false}
                // unoptimized
                lazy="true"
            />
            {content && content_align != 'left' && <span className={spanClass ? spanClass : 'img_with_text'}>{content}</span>}
        </div>

    );
};


