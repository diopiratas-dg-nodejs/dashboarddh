import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import Chart from './Chart';

/*  Cada set de dadoos e um objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Movies in Data Base',
    borderColor: 'border-left-primary', 
    qtd: 21,
    icon: 'fa-film',
	textColor: 'primary'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total awards', 
    borderColor:'border-left-success', 
    qtd: 79,
    icon:'fa-award',
	textColor: 'success'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Actors quantity' ,
    borderColor:'border-left-warning',
    qtd: 49,
    icon:'fa-user',
	textColor: 'warning'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
					{	cartProps.map((propriedades, i) => 
							<ContentRowMovies dado = {propriedades} key={i}/>
					)}
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						<LastMovieInDb />

						<GenresInDb />
					</div>
					<Chart />
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;