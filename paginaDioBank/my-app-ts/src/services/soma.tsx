export const soma = (num: number): number => {
    return num + 1
}

export const multiplica = (num: number, mult:number): number | string => {
    if(mult > 1 && mult < 4){
        return num * mult

    }
    return 'Multiplicador não aceito'
}