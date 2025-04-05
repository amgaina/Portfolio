"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResumePage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-6 px-4 sm:py-12">
            <div className="container mx-auto max-w-4xl">
                {/* Header Section - Responsive Stack */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent text-center sm:text-left">
                        My Resume
                    </h1>
                    <Button asChild className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                        <a
                            href="/Abhishek_Amgain.pdf"
                            download="Abhishek_Amgain_Resume.pdf"
                            className="flex items-center justify-center gap-2"
                        >
                            <Download className="h-4 w-4" />
                            <span className="text-sm sm:text-base">Download PDF</span>
                        </a>
                    </Button>
                </div>

                {/* PDF Viewer - Responsive Height */}
                {isClient && (
                    <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-lg overflow-hidden border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
                        <iframe
                            src="/Abhishek_Amgain.pdf#view=fitH"
                            width="100%"
                            height="100%"
                            className="border-0"
                            title="Abhishek Amgain's Resume"
                            loading="lazy"
                        >
                            <div className="text-white p-4 h-full flex flex-col items-center justify-center text-center">
                                <p>Your browser does not support PDF preview.</p>
                                <Link
                                    href="/Abhishek_Amgain.pdf"
                                    className="text-red-400 hover:underline mt-2 flex items-center gap-1"
                                >
                                    <Download className="h-4 w-4" />
                                    Download PDF
                                </Link>
                            </div>
                        </iframe>
                    </div>
                )}
            </div>
        </div>
    );
}