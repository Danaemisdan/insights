import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Prototype Viewer Navigation - Floating at the top */}
            <div className="bg-gray-900 text-white text-sm py-2 px-4 shadow-md sticky top-0 z-50 flex items-center justify-between">
                <div className="font-semibold text-gray-300">
                    <NavLink to="/">Insights Value Hub prototypes</NavLink>
                </div>
                <nav className="flex space-x-4">
                    <NavLink
                        to="/template1"
                        className={({ isActive }) =>
                            `px-3 py-1 rounded transition-colors ${isActive ? 'bg-brand-green text-white' : 'hover:bg-gray-700'}`
                        }
                    >
                        Template 1 (Nutrihub Style)
                    </NavLink>
                    <NavLink
                        to="/template2"
                        className={({ isActive }) =>
                            `px-3 py-1 rounded transition-colors ${isActive ? 'bg-brand-yellow text-gray-900' : 'hover:bg-gray-700'}`
                        }
                    >
                        Template 2 (Vibrant Style)
                    </NavLink>
                </nav>
            </div>

            {/* Main Content Area (where the specific concept renders) */}
            <div className="flex-grow relative">
                {children}
            </div>
        </div>
    );
};

export default NavigationLayout;
