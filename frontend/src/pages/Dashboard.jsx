import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState('');
    const { login, isEditMode } = useContent();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(passcode);
        if (!success) {
            setError('Invalid passcode');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">Dashboard Login</h1>
                {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input 
                        type="password" 
                        placeholder="Enter Passcode" 
                        className="border p-2 rounded focus:outline-blue-500"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                    />
                    <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                        Unlock Editor
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;
