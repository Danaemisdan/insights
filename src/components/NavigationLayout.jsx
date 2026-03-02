import { Outlet, NavLink } from 'react-router-dom';

const NavigationLayout = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* Prototype Viewer Navigation - Floating at the top */}
            <div className="bg-gray-900 text-white text-sm py-2 px-4 shadow-md sticky top-0 z-50 flex items-center justify-between">
                <div className="font-semibold text-gray-300">
                    <NavLink to="/">Insights Value Hub</NavLink>
                </div>
                <nav className="flex space-x-4">
                    <NavLink
                        to="/concept1"
                        className={({ isActive }) => isActive ? "text-brand-yellow font-bold" : "hover:text-brand-yellow transition-colors"}
                    >
                        1. Minimalist
                    </NavLink>
                    <NavLink
                        to="/concept2"
                        className={({ isActive }) => isActive ? "text-brand-yellow font-bold" : "hover:text-brand-yellow transition-colors"}
                    >
                        2. Vibrant
                    </NavLink>
                    <NavLink
                        to="/concept3"
                        className={({ isActive }) => isActive ? "text-brand-yellow font-bold" : "hover:text-brand-yellow transition-colors"}
                    >
                        3. Institutional
                    </NavLink>
                    <NavLink
                        to="/concept4"
                        className={({ isActive }) => isActive ? "text-brand-yellow font-bold" : "hover:text-brand-yellow transition-colors"}
                    >
                        4. Innovation
                    </NavLink>
                    <NavLink
                        to="/concept5"
                        className={({ isActive }) => isActive ? "text-brand-yellow font-bold" : "hover:text-brand-yellow transition-colors"}
                    >
                        5. Storytelling
                    </NavLink>
                </nav>
            </div>

            {/* Render the selected concept below */}
            <div className="flex-grow">
                <Outlet />
            </div>
        </div>
    );
};

export default NavigationLayout;
