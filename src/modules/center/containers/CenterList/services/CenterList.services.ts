import axios from "axios";
import { Central } from "../types/CenterList.types";



export const fetchCentrals = async (): Promise<Central[]> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/centrals`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar centrais:", error);
        throw error;
    }
};

export const deleteCentral = async (id: number): Promise<void> => {
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/centrals/${id}`);
        if (response.status === 200) {
            window.dispatchEvent(new Event("centralUpdate"));
        } else {
            throw new Error("Erro ao excluir central");
        }
    } catch (error) {
        console.error("Erro ao excluir central:", error);
        throw error;
    }
};