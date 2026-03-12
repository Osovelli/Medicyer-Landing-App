import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogTitle } from '../ui/dialog';

const Modal = ({ isOpen, onOpenChange, title, children }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogOverlay className="fixed inset-0 bg-black opacity-50" />
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 z-50 w-full max-w-md">
        <DialogTitle className="text-xl font-semibold mb-4">{title}</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;