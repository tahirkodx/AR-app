import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LinkComponent = ({
    children,
    className,
    skipLocaleHandling,
    target,
    ...rest
}) => {
    const router = useRouter()
    const locale = rest.locale || router.query.locale || '';

    let href = rest.href || router.asPath;

    let utm_source = router.query.utm_source ? router.query.utm_source : false;
    let tagtag_uid = router.query.tagtag_uid ? router.query.tagtag_uid : false;


    if (href.indexOf('http') === 0) skipLocaleHandling = true
    if (locale && !skipLocaleHandling) {
        href = href
            ? `/${locale}${href}`
            : router.pathname.replace('[locale]', locale)
    }

    if (href && (href.indexOf('http://') === 0 || href.indexOf('https://') === 0)) {
        return (
            <a
                className={className}
                href={href ? href : ""}
                target={"_blank"} rel="noreferrer"
            >
                {children}
            </a>
        )
    } else if (utm_source && tagtag_uid ) {

        let hrefArray = href.split('?');
        let url = hrefArray[0];
        let params = hrefArray[1] || "";
        let urlParams = `${url}?${params}${params ? "&" : ""}utm_source=${router.query.utm_source}&tagtag_uid=${router.query.tagtag_uid}`

        return (
            <Link
                className={className}
                href={urlParams}
                target={`${target && target ? "_blank" : "_self"}`}
            >
                <a className={className} {...rest}>{children}</a>
            </Link>
        )
    } else {
        return (
            <>
                <Link href={href} legacyBehavior>
                    {/* <a className={className} {...rest}>{children}</a> */}
                    <a className={className}>{children}</a>
                </Link>
            </>
        )
    }
}

export default LinkComponent;