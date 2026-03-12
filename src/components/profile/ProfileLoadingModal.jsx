import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function ProfileLoadingModal({ isOpen }) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="flex flex-col items-center justify-center p-12 bg-white border-0">
        <div className="flex flex-col items-center gap-6 p-8">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-sky rounded-full animate-spin" />
          <p className="text-base text-sky font-medium">Loading, please wait...</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}