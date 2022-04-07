import React, { useEffect, useState, useRef } from 'react';

import noPoster from '../assets/images/no-poster.jpg';

function SearchMovies(){
	const [movies, setMovies] = useState([]);	// Controle em cima de "variaveis" do filme
	const [keyword, setKeyword] = useState('');

	const inputKeyword = useRef();

	// Credenciais de API
	const apiKey = 'ddfb2f70'; 

	useEffect(() => {
		// Chamada Assincrona na API para montar o componente
		const endpoint = `http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`;

		if (apiKey !== ''){
			fetch(endpoint)
				.then(response => response.json())
				.then(data => {
					if (!data.Error){
						setMovies(data.Search)
					}else{
						setMovies([])
					}
					
				})
				.catch(error => console.log(error))
		}
	}, [keyword])

	const searchMovie = async e => {
		e.preventDefault();
		const inputValue = inputKeyword.current.value;
		setKeyword(inputValue)
		inputKeyword.current.value = '';
	}


	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={searchMovie}>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input ref={inputKeyword} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Filmes para a palavra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							movies.length > 0 && movies.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster !== 'N/A' ? movie.Poster : noPoster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movies.length === 0 && <div className="alert alert-warning text-center">Filmes não encontrados</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">EI POS A API KEY????</div>
			}
		</div>
	)
}

export default SearchMovies;
