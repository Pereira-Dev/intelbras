import React from "react";
import {
    container,
    form,
    label,
    input,
    select,
    error,
    submitButton,
    title,
} from "./styles/CenterCreate.css";
import { useCenterCreateController } from "./controllers/CenterCreate.controller";

export const CenterCreate: React.FC = () => {
    const { models, register, handleSubmit, errors, onSubmit } = useCenterCreateController();

    return (
        <div className={container}>
            <form onSubmit={handleSubmit(onSubmit)} className={form}>
                <h1 className={title}>Criar Nova Central</h1>
                <div>
                    <label className={label}>Nome</label>
                    <input type="text" {...register("name")} className={input} />
                    {errors.name && <span className={error}>{errors.name.message}</span>}
                </div>
                <div>
                    <label className={label}>MAC</label>
                    <input type="text" {...register("mac")} className={input} />
                    {errors.mac && <span className={error}>{errors.mac.message}</span>}
                </div>
                <div>
                    <label className={label}>Modelo</label>
                    <select {...register("model")} className={select}>
                        <option value="">Selecione um modelo</option>
                        {models.map((model) => (
                            <option key={model.id} value={model.id}>
                                {model.name}
                            </option>
                        ))}
                    </select>
                    {errors.model && <span className={error}>{errors.model.message}</span>}
                </div>
                <button type="submit" className={submitButton}>
                    Criar
                </button>
            </form>
        </div>
    );
};