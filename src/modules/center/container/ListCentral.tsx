"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    actions,
    container,
    createButton,
    deleteButton,
    searchInput,
    sortableHeader,
    table,
    tableCell,
    tableHeader,
} from "./style.css";

interface Central {
    id: number;
    mac: string;
    name: string;
    modelId: string;
}

export const ListCentral: React.FC = () => {
    const [centrals, setCentrals] = useState<Central[]>([]);
    const [filteredCentrals, setFilteredCentrals] = useState<Central[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortConfig, setSortConfig] = useState<{
        key: keyof Central;
        direction: "asc" | "desc";
    } | null>(null);

    useEffect(() => {
        const fetchCentrals = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/centrals`
                );
                setCentrals(response.data);
                setFilteredCentrals(response.data);
            } catch (error) {
                console.error("Erro ao buscar centrais:", error);
            }
        };

        fetchCentrals();
    }, []);

    useEffect(() => {
        const filtered = centrals.filter(
            (central) =>
                central.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                String(central.modelId).toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCentrals(filtered);
    }, [searchTerm, centrals]);

    const handleSort = (key: keyof Central) => {
        const direction =
            sortConfig?.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
        setSortConfig({ key, direction });

        const sorted = [...filteredCentrals].sort((a, b) => {
            if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
            if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
            return 0;
        });

        setFilteredCentrals(sorted);
    };

    const handleDelete = async (id: number) => {
        const confirm = window.confirm(
            "Você tem certeza que deseja excluir esta central?"
        );
        if (confirm) {
            try {
                await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/centrals/${id}`);
                setCentrals(centrals.filter((central) => central.id !== id));
            } catch (error) {
                console.error("Erro ao excluir central:", error);
            }
        }
    };

    return (
        <div className={container}>
            <div className={actions}>
                <input
                    type="text"
                    placeholder="Buscar por Nome ou Modelo"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={searchInput}
                />
                <button className={createButton}>Criar Central</button>
            </div>
            <table className={table}>
                <thead>
                    <tr>
                        <th
                            className={`${tableHeader} ${sortableHeader}`}
                            onClick={() => handleSort("name")}
                        >
                            Nome {sortConfig?.key === "name" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                        </th>
                        <th
                            className={`${tableHeader} ${sortableHeader}`}
                            onClick={() => handleSort("modelId")}
                        >
                            Modelo {sortConfig?.key === "modelId" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                        </th>
                        <th className={tableHeader}>MAC</th>
                        <th className={tableHeader}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCentrals.map((central) => (
                        <tr key={central.id}>
                            <td className={tableCell}>{central.name}</td>
                            <td className={tableCell}>{central.modelId}</td>
                            <td className={tableCell}>{central.mac}</td>
                            <td className={tableCell}>
                                <button
                                    onClick={() => handleDelete(central.id)}
                                    className={deleteButton}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}