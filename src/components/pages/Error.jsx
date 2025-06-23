import React from 'react';
import { useRouteError, NavLink, useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

export default function Error() {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {error.status === 404 ? (
                <motion.div variants={itemVariants} transition={{ delay: 0.2 }}>
                    <DotLottieReact
                        src="/404-animation.lottie"
                        loop
                        autoplay
                        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
                    />
                    <motion.h1
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 text-center"
                        variants={itemVariants}
                        transition={{ delay: 0.4 }}
                    >
                        Page Not Found
                    </motion.h1>
                </motion.div>
            ) : (
                <motion.div className="text-center" variants={itemVariants} transition={{ delay: 0.2 }}>
                    <h1 className="text-3xl sm:text-4xl font-bold text-red-600">Something Went Wrong!</h1>
                    <p className="text-lg text-gray-700 mt-2">{error.statusText || error.message}</p>
                </motion.div>
            )}
            <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 mt-8"
                variants={itemVariants}
                transition={{ delay: 0.6 }}
            >
                <button
                    className="py-3 px-6 bg-yellow-500 text-gray-900 text-lg font-semibold rounded-md hover:bg-yellow-600 hover:text-white transition duration-300"
                    onClick={handleNavigate}
                >
                    Go Back
                </button>
                <NavLink
                    to="/"
                    className="py-3 px-6 bg-yellow-500 text-gray-900 text-lg font-semibold rounded-md hover:bg-yellow-600 hover:text-white transition duration-300"
                >
                    Go to Home Page
                </NavLink>
            </motion.div>
        </motion.div>
    );
}