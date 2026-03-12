import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function LoadingModal({ isOpen }) {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-sm border-0 shadow-none flex flex-col items-center justify-center gap-6 p-8">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-gray-300 border-t-sky rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="text-gray-700 text-base font-medium">Loading, please wait...</p>
      </DialogContent>
    </Dialog>
  );
}
