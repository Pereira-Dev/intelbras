import axios from "axios";
import { z } from "zod";


export const centralSchema = z.object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    mac: z
        .string()
        .refine(async (mac) => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/centrals`);
                return !response.data.some((central: { mac: string }) => central.mac === mac);
            } catch (error) {
                console.error("Erro ao verificar unicidade do MAC:", error);
                return true;
            }
        }, "MAC já está em uso"),
    model: z.string().nonempty("Modelo é obrigatório"),
});