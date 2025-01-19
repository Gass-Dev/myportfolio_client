import React from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Navigation from './Navigation';
import Logo from './Logo';

interface MobileMenuProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps): JSX.Element {
  return (
    <Dialog open={open} onClose={() => onClose(false)} className="lg:hidden">
      <div className="fixed inset-0 z-50 bg-black opacity-25" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={() => onClose(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <Navigation className="mt-6 space-y-2 py-6" />
      </DialogPanel>
    </Dialog>
  );
}
