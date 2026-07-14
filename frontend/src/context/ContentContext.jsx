import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

export const useContent = () => useContext(ContentContext);

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('cms_token') || null);

    useEffect(() => {
        // Fetch static data.json (works on Vercel and local)
        fetch('/data.json?v=' + new Date().getTime())
            .then(res => res.json())
            .then(data => setContent(data))
            .catch(err => console.error('Failed to load content:', err));
    }, [token]);

    const login = async (passcode) => {
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ passcode })
            });
            const data = await res.json();
            if (data.success) {
                setToken(data.token);
                localStorage.setItem('cms_token', data.token);
                setIsEditMode(true);
                return true;
            }
            return false;
        } catch (err) {
            console.error(err);
            return false;
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('cms_token');
        setIsEditMode(false);
    };

    const updateContent = (contentKey, value) => {
        setContent(prev => ({ ...prev, [contentKey]: value }));
    };

    const publishChanges = async () => {
        try {
            const res = await fetch('/api/publish', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, content })
            });
            const data = await res.json();
            if (data.success) {
                alert('Changes published successfully!');
            } else {
                alert('Failed to publish changes: ' + (data.message || 'Unauthorized'));
                if (data.message === 'Unauthorized') logout();
            }
        } catch (err) {
            console.error(err);
            alert('Error publishing changes.');
        }
    };

    return (
        <ContentContext.Provider value={{ content, isEditMode, setIsEditMode, token, login, logout, updateContent, publishChanges }}>
            {children}
        </ContentContext.Provider>
    );
};
