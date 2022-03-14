export interface InfoApi{
    info: Array<any>[];
    results: Usuario [];
}

export interface Usuario{
    id: number;
    name: string;
    gender: string;
}