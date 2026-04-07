import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, Trash2 } from "lucide-react";
import { CustomButton } from "../custom/CustomButton";

export function SaveModal({ open, onOpenChange, savedTests }) {
    const homeServiceFee = 4000; // Example fee
    const totalAmount = savedTests.reduce((acc, test) => acc + test.price, 0) + (savedTests.length > 0 ? homeServiceFee : 0);

    const handleDelete = (index) => {
        savedTests.splice(index, 1);
        onOpenChange(false);
        onOpenChange(true);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[420px] p-5 bg-white shadow-lg rounded-lg">
                <DialogTitle className="text-center font-bold">Lab File ({savedTests.length} items)</DialogTitle>
                <DialogDescription className="mt-4">
                    {savedTests.map((test, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 py-2">
                            <div className="space-y-3">
                                <span className="block text-sm"><span><img src="/transfusion.svg" alt="Test Icon" className="w-4 h-4 inline mr-2" /></span>{test.category}</span>
                                <span className="block text-sm text-gray-500 font-bold ml-6">{test.title}</span>
                                <span className="block text-xs text-gray-500 ml-6">₦ {test.price}</span>
                                {test.serviceType === "Home service" && (
                                    <div className="flex gap-2">
                                        <MapPin className="w-3 h-3 text-green-500 inline mr-1" />
                                        <span className="text-xs ">Home Service</span>
                                    </div>
                                )}
                            </div>
                            <button onClick={() => handleDelete(index)}>
                                <Trash2 className="w-5 h-5 text-red-600" />
                            </button>
                        </div>
                    ))}
                    <div className="flex justify-between font-bold mt-4">
                        <span>Total:</span>
                        <span>₦ {totalAmount.toLocaleString("en-NG")}</span>
                    </div>
                    <CustomButton 
                    className="mt-4 bg-sky w-full rounded-3xl hover:bg-sky/80 text-white"
                    size="lg" 
                    onClick={onOpenChange.bind(null, false)}
                    >
                        Book Now
                    </CustomButton>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
}