/* eslint-disable react/prop-types */
import React from 'react';
import NextLink from 'next/link';

export default function Link({children, href, ...props}) {
    return (
        // fazendo a navegação entre os quizes
        // com modelo SPA (sem refresh no browser)
        <NextLink href={href} passHref>
            <a {...props}>
                {children}
            </a>
        </NextLink>
    );
}