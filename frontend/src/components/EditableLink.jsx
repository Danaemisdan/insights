import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { Link } from 'react-router-dom';

const EditableLink = ({ contentKey, defaultText, to, className = '', isExternal = false }) => {
    const { content, isEditMode, updateContent } = useContent();
    const [localText, setLocalText] = useState(defaultText);
    const [localHref, setLocalHref] = useState(to);

    useEffect(() => {
        if (content[`${contentKey}-text`] !== undefined) setLocalText(content[`${contentKey}-text`]);
        if (content[`${contentKey}-href`] !== undefined) setLocalHref(content[`${contentKey}-href`]);
    }, [content, contentKey]);

    const handleEditClick = (e) => {
        if (isEditMode) {
            e.preventDefault();
            e.stopPropagation();
            const newText = prompt('Enter link text:', localText);
            if (newText !== null && newText !== localText) {
                setLocalText(newText);
                updateContent(`${contentKey}-text`, newText);
            }
            const newHref = prompt('Enter link URL (keep as is to not change):', localHref);
            if (newHref !== null && newHref !== localHref) {
                setLocalHref(newHref);
                updateContent(`${contentKey}-href`, newHref);
            }
        }
    };

    const linkClasses = `${className} ${isEditMode ? 'outline-dashed outline-2 outline-blue-400 cursor-pointer hover:bg-blue-50' : ''}`;

    if (isExternal || localHref.startsWith('http')) {
        return (
            <a href={localHref} className={linkClasses} onClick={isEditMode ? handleEditClick : undefined}>
                {localText}
            </a>
        );
    }

    return (
        <Link to={localHref} className={linkClasses} onClick={isEditMode ? handleEditClick : undefined}>
            {localText}
        </Link>
    );
};

export default EditableLink;
