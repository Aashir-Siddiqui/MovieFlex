import React from 'react'
import Header from './Header'
import Footer from './Footer';
import { Outlet, useNavigation } from "react-router";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function AppLayout() {
    const navigation = useNavigation()
    console.log(navigation)

    if (navigation.state === 'loading') return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <DotLottieReact
                src="/src/assets/loader.lottie"
                loop
                autoplay
                className="w-24 h-24 md:w-32 md:h-32"
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
