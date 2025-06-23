import React from 'react'
import Header from './Header'
import Footer from './Footer';
import { Outlet, useNavigation } from "react-router";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function AppLayout() {
    const navigation = useNavigation()

    if (navigation.state === 'loading') return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <DotLottieReact
                src="/loader.lottie"
                loop
                autoplay
                className="w-40 h-40 sm:w-60 sm:h-60"
            />
        </div>
    )

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
