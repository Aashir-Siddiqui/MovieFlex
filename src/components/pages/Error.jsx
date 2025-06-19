import React from 'react';
import { useRouteError, NavLink } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Error() {
    const error = useRouteError();

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
            <NavLink to="/" className={'py-4 px-12 bg-yellow-400 hover:bg-black text-black hover:text-yellow-400 duration-300 mt-8 rounded-sm text-lg'}>Go to home page</NavLink>
        </div>
    );
}
