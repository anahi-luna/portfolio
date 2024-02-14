
export const Cards = ({card}) => {
    return (
        <div className='card'>
            <div className='imgBx'>
                <img src={require(`../../${card.img}`)} alt="proyects" />
            </div>
            <div className='content'>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
                <div className='box-btn-link'>
                    <a href={card.linkPage} ><span className="fas fa-external-link-alt" aria-hidden="true"></span>Ver Página</a>
                    <a href={card.linkCode} ><span className="fas fa-code" aria-hidden="true"></span>Ver Código</a>
                </div>
            </div>
        </div>
    )
}
