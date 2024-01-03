import { NextResponse } from 'next/server';
import { countries } from '@utils/countriesData';
const PUBLIC_FILE = /\.(.*)$/
const dev_server = ['localhost:3001'];

export const middleware = async (request) => {
    const { nextUrl, cookies, geo, headers } = request;
    const url = nextUrl.clone();
   

    
    try {

       

        return NextResponse.next();

       

    } catch (error) {
        console.log('finalMiddlewareError', error);
    }
}

// export const config = {
//     matcher: [
//         '/',
//         '/((?!api|styles|_next/data|_next/static|favicon|.well-known|auth|sitemap|robots.txt|files).*)',
//     ]
// }