import React, { useState, useEffect } from 'react';
import { Container, Movie, MovieList, SVGContainer, ContainerBaneer } from './style';
import { Link } from 'react-router-dom';
import logo from './img/PeakyLogo.png';
import banner from './img/PeakyBlinders.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';  // Importe o faUser se estiver usando
import '@fortawesome/fontawesome-svg-core/styles.css';

function Home() {

     // armazenando informações do filme
    const [movies, setMovies] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {

        // Consumir a API do TMDB para obter informações detalhadas sobre o filme
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a3506888ef8dd9ad2afb9d4bd161aff2&language=en-`)
            .then(response => response.json())

            // Adiciona a data de lançamento aos dados do filme
            .then(data => {
                const moviesWithReleaseDate = data.results.map(movie => {
                    return {
                        ...movie,
                        releaseDate: movie.release_date
                    };
                });
                setMovies(moviesWithReleaseDate);
            });
    }, []);

    return (
        <div>
            <ContainerBaneer>
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
                            <FontAwesomeIcon icon={faSearch} />
                            <FontAwesomeIcon icon={faUser} />
                        </div>

                    </div>
                </nav>
                <div class="info-text">
                    <img className="logo" src={logo} alt="Logo" />
                    <p>
                        Os Peaky Blinders, a gangue na qual Thomas Shelby é líder, controlam a cidade de Birmingham. Mas, como as ambições de Shelby se estendem para além de Birmingham, ele planeja construir o império de negócios que criou e impedir qualquer um que atrapalhar.
                    </p>
                    <div class="buttons">
                        <div class="red-btn">
                            <p>Assistir</p>
                        </div>
                        <div class="gray-btn">
                            <p>Detalhes</p>
                        </div>
                    </div>
                </div>
                <div class="banner">
                    <img src={banner} alt="Banner" />
                </div>
            </ContainerBaneer>
            <Container>
                <h1>Filmes Populares</h1>
                <SVGContainer xmlns="http://www.w3.org/2000/svg" width="90%" height="6" viewBox="0 0 1231 6" fill="none">
                    <path d="M1227.02 6C1228.68 6 1230.02 4.65685 1230.02 3C1230.02 1.34315 1228.68 0 1227.02 0V6ZM0 6H1227.02V0H0V6Z" fill="url(#paint0_linear_6_23)" />
                    <defs>
                        <linearGradient id="paint0_linear_6_23" x1="948" y1="3" x2="1227" y2="3" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E84A5F" />
                            <stop offset="1" stop-color="#E84A5F" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </SVGContainer>
                <MovieList>
                    {movies.map(movie => (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                            <span className="ReleaseDate">Lançamento | {movie.releaseDate}</span>
                        </Movie>
                    ))}
                </MovieList>


                <footer>
                    
                    <hr></hr>

                    <p>
                        Trabalho API - SENAI COTIA
                    </p>

                    <h1>
                        Jennifer Gabriely Lopes dos Santos
                    </h1>
                    <h1>
                        Kauã Campos Jaquetoni
                    </h1>
                    <h1>
                        Raissa Massiel Yope
                    </h1>

                </footer>

            </Container>
        </div>
    );
}

export default Home;
