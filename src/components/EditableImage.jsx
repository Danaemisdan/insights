import React, { useState, useEffect, useRef } from 'react';
import { useContent } from '../context/ContentContext';

const EditableImage = ({ contentKey, defaultSrc, className = '', alt = '' }) => {
    const { content, isEditMode, updateContent, token } = useContent();
    const [localSrc, setLocalSrc] = useState(defaultSrc);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (content[contentKey] !== undefined) {
            setLocalSrc(content[contentKey]);
        }
    }, [content, contentKey]);

    const handleClick = (e) => {
        if (isEditMode) {
            e.preventDefault();
            e.stopPropagation();
            fileInputRef.current.click();
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64Data = reader.result;
            
            try {
                const res = await fetch('/api/upload', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        token: token || localStorage.getItem('cms_token'),
                        filename: file.name.replace(/\s+/g, '-'),
                        imageBase64: base64Data
                    })
                });
                const data = await res.json();
                if (data.success) {
                    setLocalSrc(data.url);
                    updateContent(contentKey, data.url);
                } else {
                    alert('Upload failed: ' + data.message);
                }
            } catch (err) {
                console.error('Upload error', err);
                alert('Error uploading image');
            }
        };
        reader.readAsDataURL(file);
    };

    return (
        <>
            <img 
                src={localSrc} 
                alt={alt} 
                className={`${className} ${isEditMode ? 'outline-dashed outline-4 outline-blue-400 outline-offset-[-4px] cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
                onClick={handleClick}
            />
            {isEditMode && (
                <input 
                    type="file" 
                    accept="image/*" 
                    ref={fileInputRef} 
                    style={{ display: 'none' }} 
                    onChange={handleFileChange} 
                />
            )}
        </>
    );
};

export default EditableImage;
