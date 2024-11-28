import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { form, submitButton } from './style.css';


const centralSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  mac: z
    .string()
    .regex(/^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/, 'Formato de MAC inválido')
    .refine(async (mac) => {
      const response = await axios.get('/centrals');
      return !response.data.some((central: { mac: string }) => central.mac === mac);
    }, 'MAC já está em uso'),
  model: z.string().nonempty('Modelo é obrigatório'),
});

type CentralFormValues = z.infer<typeof centralSchema>;

export const CreateCentral: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CentralFormValues>({
    resolver: zodResolver(centralSchema),
  });

  const onSubmit = async (data: CentralFormValues) => {
    try {
      await axios.post('/centrals', data);
      alert('Central criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar central:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={form}>
      <h1>Criar Nova Central</h1>
      <div>
        <label>Nome</label>
        <input type="text" {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label>MAC</label>
        <input type="text" {...register('mac')} />
        {errors.mac && <span>{errors.mac.message}</span>}
      </div>
      <div>
        <label>Modelo</label>
        <select {...register('model')}>
          <option value="">Selecione um modelo</option>
          {/* Carregar opções dinamicamente do endpoint /models */}
        </select>
        {errors.model && <span>{errors.model.message}</span>}
      </div>
      <button type="submit" className={submitButton}>
        Criar
      </button>
    </form>
  );
};
