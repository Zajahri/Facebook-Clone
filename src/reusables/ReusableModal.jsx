import React from 'react';

const ReusableModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={onClose}
        ></div>
        <div className="bg-white p-4 rounded-lg shadow-md z-10">
          {children}
        </div>
      </div>
    );
};

export default ReusableModal;