import React from "react";
import { useRouter } from "next/navigation";

import {
    container,
    actions,
    createButton,
    searchInput,
    table,
    tableHeader,
    tableCell,
    deleteButton,
    sortableHeader,
} from "./styles/CenterList.css";
import { useCenterListController } from "./controllers/CenterList.controller";

export const CenterList: React.FC = () => {
    const { filteredCentrals, searchTerm, setSearchTerm, handleSort, handleDelete } = useCenterListController();
    const router = useRouter();

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
                <button
                    className={createButton}
                    onClick={() => router.push("/center-create")}
                >
                    Criar Central
                </button>
            </div>
            <table className={table}>
                <thead>
                    <tr>
                        <th
                            className={`${tableHeader} ${sortableHeader}`}
                            onClick={() => handleSort("name")}
                        >
                            Nome
                        </th>
                        <th
                            className={`${tableHeader} ${sortableHeader}`}
                            onClick={() => handleSort("modelId")}
                        >
                            Modelo
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
};
