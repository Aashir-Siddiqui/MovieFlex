import React from 'react';
import { useRouteError, NavLink, useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Error() {
    const error = useRouteError();
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            {error.status === 404 ? (
                <DotLottieReact
                    src="/src/assets/404-animation.lottie"
                    loop
                    autoplay
                    style={{ width: 400, height: 400 }}
                />
            ) : (
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-red-600">Something went wrong!</h1>
                    <p className="text-lg text-gray-700 mt-2">{error.statusText || error.message}</p>
                </div>
            )}
            <div className="flex items-center gap-8">
                <button className={'py-3 px-6 bg-[#ffc400] hover:bg-[#102e35] text-[#102e35] hover:text-[#ffc400] duration-300 mt-8 rounded-sm text-lg'} onClick={handleNavigate}>Go Back</button>
                <NavLink to="/" className={'py-3 px-6 bg-[#ffc400] hover:bg-[#102e35] text-[#102e35] hover:text-[#ffc400] duration-300 mt-8 rounded-sm text-lg'}>Go to home page</NavLink>
            </div>
        </div>
    );
}
