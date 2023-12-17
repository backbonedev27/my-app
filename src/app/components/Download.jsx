// components/DownloadButton.jsx
import React, { useState } from 'react';
import Image from 'next/image';

const DownloadButton = () => {
    const [loading, setLoading] = useState(false);



    const handleDownload = async () => {
        // Example using fetch
        const response = await fetch('/api/download', {
            method: 'GET',
        });

    };


    return (
        <button
            className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'
            onClick={handleDownload}
            disabled={loading}
        >
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                {loading ? 'Downloading...' : 'Download File'}
            </span>
        </button>
    );
};

export default DownloadButton;
