import { useEffect, useState } from "react";
import { fetchCentrals, deleteCentral } from "../services/CenterList.services";
import { Central } from "../types/CenterList.types";


export const useCenterListController = () => {
    const [centrals, setCentrals] = useState<Central[]>([]);
    const [filteredCentrals, setFilteredCentrals] = useState<Central[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortConfig, setSortConfig] = useState<{ key: keyof Central; direction: "asc" | "desc" } | null>(null);

    useEffect(() => {
        const loadCentrals = async () => {
            try {
                const fetchedCentrals = await fetchCentrals();
                setCentrals(fetchedCentrals);
                setFilteredCentrals(fetchedCentrals);
            } catch (error) {
                alert("Erro ao carregar centrais. Tente novamente.");
            }
        };

        loadCentrals();
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
        const direction = sortConfig?.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
        setSortConfig({ key, direction });

        const sorted = [...filteredCentrals].sort((a, b) => {
            if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
            if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
            return 0;
        });

        setFilteredCentrals(sorted);
    };

    const handleDelete = async (id: number) => {
            try {
                await deleteCentral(id);
                setCentrals(centrals.filter((central) => central.id !== id));
            } catch (error) {
                alert("Erro ao excluir central. Tente novamente.");
            }
    };

    return {
        filteredCentrals,
        searchTerm,
        setSearchTerm,
        handleSort,
        handleDelete,
    };
};
