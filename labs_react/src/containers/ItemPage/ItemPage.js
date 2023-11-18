import React from "react";
import Footer from "../App/Footer/Footer";
import Layout from "../App/Layout/Layout";
import ItemDescription from "./ItemDescription";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

export default function ItemPage() {
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowSpinner(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
        {showSpinner ? (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: "100vh"
            }}>
                <RingLoader color="#3e2323" size={150} loading={true} />
            </div>
        ) : (
            <>
            <Layout />
            <ItemDescription />
            <Footer />
            </>
        )}
    </div>
    );
}