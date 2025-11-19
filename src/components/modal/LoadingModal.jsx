import { useEffect } from "react";
import { Spinner } from "../ui/spinner";

export function LoadingModal({ next }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            next();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center h-56 justify-center p-6">
            <Spinner className={'text-sky size-10'} />
        </div>
    );
}