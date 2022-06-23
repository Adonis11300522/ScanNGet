import React from "react";

export function Bannertitle({children}) {
    return (
        <div className="Banner-title">
            {children}
        </div>
    );
}

export function SectionTitle ({children}) {
    return(
        <div className="Section-title">
            {children}
        </div>
    )
}