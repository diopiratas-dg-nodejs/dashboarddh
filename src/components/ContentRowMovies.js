import React from 'react';
import propTypes from 'prop-types';

function ContentRowMovies(props){
    return(
        <React.Fragment>                        
                <div className="col-md-4 mb-4">
                        <div className={"card " +  props.dado.borderColor + " shadow h-100 py-2"}>
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={"text-xs font-weight-bold text-" + props.dado.textColor + " text-uppercase mb-1"}>{props.dado.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.dado.qtd}</div>
                            </div>
                            <div className="col-auto">
                                <i className={"fas " + props.dado.icon + " fa-2x text-gray-300"}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                           
        </React.Fragment>
    )
}



ContentRowMovies.propTypes = { 
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
    qtd: propTypes.number.isRequired,
    //borderColor: propTypes.oneOf(['border-left-primary', 'border-left-success','border-left-warning']).isRequired,
    borderColor: propTypes.string.isRequired,
    textColor: propTypes.string.isRequired     
}

ContentRowMovies.defaultProps = { 
    title: 'Star',
    icon: 'fa-film',
    qtd: 9,
    borderColor: 'border-left-success',
    textColor: 'success'
}

export default ContentRowMovies;