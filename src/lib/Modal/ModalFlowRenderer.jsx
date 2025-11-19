import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useModalFlow } from "./ModalFlowContext";

export function ModalFlowRenderer() {
    const { flow, payload, next, cancelFlow } = useModalFlow();

    if (!flow) {
        return null;
    }

    const StepModal = flow.steps[flow.index];

    return (
        <Dialog open={true} onOpenChange={cancelFlow}>
            <DialogContent className="max-w-3xl w-full">
                <StepModal 
                payload={payload} 
                next={next} 
                cancel={cancelFlow} />
            </DialogContent>
        </Dialog>
    );
}