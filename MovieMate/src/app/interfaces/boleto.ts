export interface Horario {
    horarioId: number;
    horario: string;
}

export interface Cine{
    cineId:        number;
    cineNombre:    string;
    cineDireccion: string;
}

export interface Pelicula{
    peliculaId:          number;
    peliculaNombre:      string;
    peliculaDescripcion: string;
}


export interface Boleto {
    boletoId:       number;
    cineNombre:     string;
    horario:        string;
    peliculaNombre: string;
    numero:         number;
    precio:         number;
    total:          number;
    nombreCliente:  string;
    fecha:          string;
}




