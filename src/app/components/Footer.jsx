"use client";
import React, { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        const BASE_URL = "https://omnichannel.mimin.io/";

        const script = document.createElement("script");
        script.src = `${BASE_URL}/packs/js/sdk.js`;
        script.defer = true;
        script.async = true;

        script.onload = () => {
            window.chatwootSDK.run({
                websiteToken: '7XwWVkt4acRPzJBpcEcbMi23',
                baseUrl: BASE_URL
            });
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup script when the component unmounts
            document.body.removeChild(script);
        };
    }, []); // Run only once on component mount

    return (
        <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
            <div className='container p-12 flex justify-between'>
                {/* Logo */}
                <span></span>
                <p className='text-slate-600'>
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
