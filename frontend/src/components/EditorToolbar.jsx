import React from 'react';
import { useContent } from '../context/ContentContext';
import { Save, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EditorToolbar = () => {
    const { isEditMode, publishChanges, logout } = useContent();
    const navigate = useNavigate();

    if (!isEditMode) return null;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-2xl border border-gray-200 z-50 flex items-center gap-4">
            <span className="font-semibold text-gray-700 text-sm mr-2">✏️ Edit Mode Active</span>
            <select 
                className="bg-gray-100 text-gray-700 text-sm rounded-full px-3 py-2 border-none outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                onChange={(e) => { if (e.target.value) navigate(e.target.value); e.target.value = ''; }}
                defaultValue=""
            >
                <option value="" disabled>Navigate to...</option>
                <option value="/dashboard">Home</option>
                <option value="/dashboard/about-us">About Us</option>
                <option value="/dashboard/leadership">Leadership</option>
                <option value="/dashboard/what-we-do">What We Do</option>
                <option value="/dashboard/opportunities">Opportunities</option>
                <option value="/dashboard/about-millets">About Millets</option>
                <option value="/dashboard/news-events">News & Events</option>
                <option value="/dashboard/contact">Contact Us</option>
            </select>
            <button
                onClick={publishChanges}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 text-sm transition-colors shadow-sm"
            >
                <Save size={16} />
                Publish Changes
            </button>
            <button 
                onClick={logout}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full font-medium flex items-center gap-2 text-sm transition-colors"
            >
                <LogOut size={16} />
                Logout
            </button>
        </div>
    );
};

export default EditorToolbar;
