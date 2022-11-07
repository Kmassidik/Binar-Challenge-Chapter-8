import React from 'react'

function input(props) {
    return(
        <div className="d-flex flex-row align-items-center mb-3">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
            <input className="form-control" 
                type={props.type} 
                name={props.name} 
                value={props.value}  
                onChange={props.onChange}
                autoComplete='off'
            />
            <label className="form-label">{props.title}</label>
            </div>
        </div>
    )
}

export default input