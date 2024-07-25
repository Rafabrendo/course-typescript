interface  ICard{
    id: number,
    paragraph: string
    details: string
}

export const Card = ({id, paragraph, details}: ICard) =>{
    console.log(id)
    return(
        <div>
            <h1>Card {id}:{id}</h1>
            <p>Paragrafo {paragraph}</p>
            <p>Details about card {details}</p>
        </div>
    )
}