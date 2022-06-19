export enum Valoracion {
    ALTO = "alto",
    MEDIO = "medio",
    BAJO = "bajo",
}

export interface ObservationModel {
    riskId : string,
    observacion: string,
    criticidad: Valoracion
}