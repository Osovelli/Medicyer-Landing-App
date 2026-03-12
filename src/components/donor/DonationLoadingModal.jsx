import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function DonationLoadingModal({ isOpen }) {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-sm p-0 gap-0 border-0 shadow-none">
        <div className="flex flex-col items-center justify-center py-16">
        {/* Spinner */}
        <div className="w-12 h-12 mb-5 relative">
            <div className="absolute inset-0 rounded-full border-[3px] border-slate-200 dark:border-slate-700" />
            <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#252B61] dark:border-t-blue-500 animate-spin" />
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
            Loading, please wait...
        </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
