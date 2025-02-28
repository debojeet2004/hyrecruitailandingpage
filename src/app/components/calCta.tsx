"use client";
import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRightIcon } from "lucide-react";
import { useEffect } from "react";
export default function CtaButton() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <Button
            ata-cal-namespace="30min"
            data-cal-link="debojeet-karmakar/30min"
            className="group bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white shadow-md transition-all"
        >
            Book a Demo 
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
    )
    
};
