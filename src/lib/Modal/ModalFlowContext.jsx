import { createContext, useContext, useState, useCallback } from "react";

const ModalFlowContext = createContext(null);  

export function useModalFlow() {
    return useContext(ModalFlowContext);
}

export function ModalFlowProvider({ children }) {
    const [flow, setFlow] = useState(null); //{steps: [], currentStepIndex: number}
    const [payload, setPayload] = useState({}); //shared data across steps

    const startFlow = useCallback((stepsArray, initialPayload = {}) => {
        setFlow({
            steps: stepsArray,
            index: 0,
        });
        setPayload(initialPayload);
    }, []);

    const next = useCallback((data = {}) => {
        setPayload((prev) => ({ ...prev, ...data }));
        setFlow((prev) => (prev.index + 1 < prev.steps.length ? { ...prev, index: prev.index + 1 } : null // end flow if no more steps
        ));
    }, []);

    const cancelFlow = useCallback(() => {
        setFlow(null);
        setPayload({});
    }, []);

    return (
        <ModalFlowContext.Provider 
        value={{ 
            flow, 
            payload, 
            startFlow, 
            next, 
            cancelFlow 
            }}>
            {children}
        </ModalFlowContext.Provider>
    );
}