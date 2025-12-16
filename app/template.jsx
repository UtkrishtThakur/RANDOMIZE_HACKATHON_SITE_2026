"use client";

import { m } from "framer-motion";

export default function Template({ children }) {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
        >
            {children}
        </m.div>
    );
}
