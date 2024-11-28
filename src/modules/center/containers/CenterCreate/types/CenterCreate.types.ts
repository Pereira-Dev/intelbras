
export interface CentralFormValues {
    name: string; 
    mac: string; 
    model: string; 
}

export interface Model {
    id: number; 
    name: string;
}

export interface CentralPayload {
    name: string; 
    mac: string;
    modelId: number;
}