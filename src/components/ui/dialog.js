import React from 'react';

export const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        {children}
        <button onClick={() => onOpenChange(false)} className="mt-4">Close</button>
      </div>
    </div>
  );
};

export const DialogContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export const DialogHeader = ({ children }) => (
  <h2 className="font-semibold text-lg">{children}</h2>
);

export const DialogTitle = ({ children }) => (
  <h3 className="text-xl">{children}</h3>
);
