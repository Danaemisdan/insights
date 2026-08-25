import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';

const EditableText = ({ contentKey, defaultText, as: Component = 'span', className = '' }) => {
    const { content, isEditMode, updateContent } = useContent();
    const [localText, setLocalText] = useState(defaultText);

    // Sync local state with context when content loads
    useEffect(() => {
        if (content[contentKey] !== undefined) {
            setLocalText(content[contentKey]);
        }
    }, [content, contentKey]);

    const handleBlur = (e) => {
        const newText = e.target.innerText;
        setLocalText(newText);
        updateContent(contentKey, newText);
    };

    if (isEditMode) {
        return (
            <Component
                className={`${className} outline-dashed outline-2 outline-blue-400 hover:bg-blue-50 cursor-text p-1 rounded transition-colors`}
                contentEditable
                suppressContentEditableWarning
                onBlur={handleBlur}
                dangerouslySetInnerHTML={{ __html: localText }}
            />
        );
    }

    return (
        <Component className={className} dangerouslySetInnerHTML={{ __html: localText }} />
    );
};

export default EditableText;
