import React from 'react';

const PrimaryButton = ({handler, classes, children}) => {
    return (
        <div>
            <button
                onClick={handler}
                className={`hover:text-gray-100 bg-[#1678CB] text-white ${classes}`}
                >
                {children}
            </button>
        </div>
    );
};

export default PrimaryButton;