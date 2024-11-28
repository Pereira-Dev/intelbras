import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fetchModels, createCentral } from "../services/CenterCreate.services";
import { centralSchema } from "../schema/CenterCreate.schema";
import { CentralFormValues, Model } from "../types/CenterCreate.types";

export const useCenterCreateController = () => {
    const [models, setModels] = useState<Model[]>([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CentralFormValues>({
        resolver: zodResolver(centralSchema),
    });

    useEffect(() => {
        const loadModels = async () => {
            try {
                const fetchedModels = await fetchModels();
                setModels(fetchedModels);
            } catch (error) {
                alert("Erro ao carregar modelos. Tente novamente.");
            }
        };

        loadModels();
    }, []);

    const onSubmit = async (data: CentralFormValues) => {
        try {
            const payload = {
                name: data.name,
                mac: data.mac,
                modelId: parseInt(data.model, 10),
            };

            await createCentral(payload);
            window.location.href = "/center-list";
        } catch (error) {
            alert("Erro ao criar a central. Verifique os dados e tente novamente.");
        }
    };

    return {
        models,
        register,
        handleSubmit,
        errors,
        onSubmit,
    };
};