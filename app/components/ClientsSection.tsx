import React from 'react';
import Image from 'next/image';

const ClientsSection = () => {
    return (
        <div className="flex flex-col items-center mt-16">
            <h1 className="mb-8">Meet some of our clients and partners</h1>
            <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between gap-8 px-4 items-center max-w-6xl w-full">
                <Image className="grayscale brightness-75" src="/roche.png" width={100} height={100} alt="logo-1" />
                <Image className="grayscale brightness-75" src="/amyris.png" width={100} height={100} alt="logo-2" />
                <Image className="grayscale brightness-75" src="/farfetch.png" width={100} height={100} alt="logo-3" />
                <Image className="grayscale brightness-75" src="/aws.png" width={100} height={100} alt="logo-4" />
                <Image className="grayscale brightness-75" src="/openai.png" width={100} height={100} alt="logo-5" />
            </div>
        </div>
    );
};

export default ClientsSection; 