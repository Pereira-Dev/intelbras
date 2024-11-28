"use client";

import React, { useEffect, useState } from "react";
import { fetchCentrals } from "../../../center/containers/CenterList/services/CenterList.services";



export const CentralCounter: React.FC = () => {
    const [centralCount, setCentralCount] = useState<number>(0);

    useEffect(() => {
        const loadCentralCount = async () => {
            try {
                const centrals = await fetchCentrals();
                setCentralCount(centrals.length);
            } catch (error) {
                console.error("Erro ao carregar o contador de centrais:", error);
            }
        };

        loadCentralCount();

        const handleCentralUpdate = () => {
            loadCentralCount();
        };

        window.addEventListener("centralUpdate", handleCentralUpdate);

        return () => {
            window.removeEventListener("centralUpdate", handleCentralUpdate);
        };
    }, []);

    return (
        <div style={{ fontWeight: "bold", fontSize: "16px" }}>
            Total de Centrais: {centralCount}
        </div>
    );
};