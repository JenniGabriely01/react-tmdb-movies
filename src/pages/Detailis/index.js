import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apikey } from "../../config/key";
import { Container, Cabeca } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';  
import '@fortawesome/fontawesome-svg-core/styles.css';
import fundo from './img/imgFundo.png';


function Details() {
    const {id} = useParams()

    // armazenando informações do filme
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect (() => {
        
        // Consumir a API do TMDB para obter informações detalhadas sobre o filme
         fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a3506888ef8dd9ad2afb9d4bd161aff2&language=en-`) 
        .then(response => response.json()) 
        .then(data => {

            const movieData = {
                id,
                title: data.title,
                sinopse: data.overview,
                image: `${image_path}${data.poster_path}`,
                releaseDate: data.release_date,
            }

            // Exibindo os dados do filme no console
            console.log(movieData)

            // Atualizando o estado com os dados do filme
            setMovie(movieData)
        })
    }, [id]) // Executar o efeito sempre que o ID da URL mudar

    return (

        <Container>

        <Cabeca>
        <nav>
                    <div class="name">TMDB API</div>
                    <div class="topics">
                        <ul>
                            <li>Home</li>
                            <li>Populares</li>
                            <li>Filmes</li>
                            <li>Sobre</li>
                        </ul>

                        <div class="icone">
                        <FontAwesomeIcon  icon={faSearch} />
                        <FontAwesomeIcon icon={faUser} /> 
                        </div>

                    </div>
                </nav>
        </Cabeca>


            <div className="info-movie">
            <img src={movie.image} alt={movie.sinopse} />

                <div className="details">
                    <h1>{movie.title}</h1>
                    <span className="resumo">{movie.sinopse}</span>
                    <hr className="linhaFilme"></hr>
                    <span className="ReleaseDate">Release Date: {movie.releaseDate}</span>


                    <div className="btn">
                    <Link to="/"><button className="btn-goback">Go Back</button></Link>
                    <button className="btn-assistir">Assistir</button>
                    </div>
                    
                </div>
            </div>

            <div class="fundo">
            <img className="fundo" src={fundo} alt="fundo" />
            </div>
        </Container>
    )

}

export default Details;
