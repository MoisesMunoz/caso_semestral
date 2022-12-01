export interface Asignaturas {
    asignaturas:Asignatura[];
}

export interface Asignatura {
    codasignatura:string;
    nomasignatura:string;
    seccion:string;
    clasesrealizadas:number;
    clasesasistidas:number;
}
