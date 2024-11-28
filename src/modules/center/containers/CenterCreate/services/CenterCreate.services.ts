import axios from "axios";
import { Model, CentralPayload } from "../types/CenterCreate.types";

export const fetchModels = async (): Promise<Model[]> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/models`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar modelos:", error);
        throw error;
    }
};

export const createCentral = async (payload: CentralPayload): Promise<void> => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/centrals`,
            payload
        );

        if (response.status === 201) {
            window.dispatchEvent(new Event("centralUpdate"));
        } else {
            throw new Error("Erro ao criar central");
        }
    } catch (error) {
        console.error("Erro ao criar central:", error);
        throw error;
    }
};