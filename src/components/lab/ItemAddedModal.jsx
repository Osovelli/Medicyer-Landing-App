import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ItemAddedModal({ open, onOpenChange, onSeeFile }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="lg:max-w-[480px] p-5 text-center bg-white shadow-lg rounded-lg">
                <DialogTitle className="sr-only">Item Added</DialogTitle>
                <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
                        <img src="/approved.png" alt="Success" className="w-18 h-18" />
                    </div>
                </div>
                <h3 className="font-semibold text-2xl text-sky mt-4">Item Added to Lab File</h3>
                <p className="text-base font-normal text-gray-500">Your selected item has been added to your Laboratory File successfully.</p>
                <div className="flex mt-6 gap-4 justify-center">
                    <Button 
                    variant={'outline'} 
                    onClick={onSeeFile}
                    className={'w-32 md:w-48 h-14 border'}
                    >
                        See File
                    </Button>
                    <Button 
                    onClick={() => onOpenChange(false)} 
                    className="bg-sky w-32 md:w-58 h-14 text-white hover:bg-sky/80">
                        Continue
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}