import React, { useState } from 'react'
import Button from '../Button/Button'
import { Input } from '../index'
import { Link } from 'react-router-dom'

function Create(el) {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]:value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return(
        <section className='vh-100'>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11 my-4">
                        <div className="card text-black" style={{borderRadius: "10px"}}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                    <p className="text-center h3 fw-bold mb-4 mx-md-4">{el.title}</p>
                                    <form onClick={handleSubmit}> 
                                        <Input 
                                            title="Username" 
                                            type="text" 
                                            name="username" 
                                            value={inputs.username || ""}  
                                            onChange={handleChange}
                                        />
                                        <Input 
                                            title="Password" 
                                            type="text" 
                                            name="password" 
                                            value={inputs.password || ""}  
                                            onChange={handleChange}
                                        />
                                        <Input 
                                            title="Email" 
                                            type="email" 
                                            name="email" 
                                            value={inputs.email || ""}  
                                            onChange={handleChange}
                                        />
                                        { el.type === 'find' &&
                                        <>
                                            <Input 
                                            title="Exp" 
                                            type="number" 
                                            name="exp" 
                                            value={inputs.exp || ""}  
                                            onChange={handleChange}
                                        />
                                            <Input 
                                            title="Lvl" 
                                            type="number" 
                                            name="level" 
                                            value={inputs.level || ""}  
                                            onChange={handleChange}
                                        />
                                        </>
                                        }
                                       
                                       <Link to="/" state={{ 
                                        username: inputs.username,
                                        password: inputs.password,
                                        email: inputs.email,
                                        exp: inputs.exp,
                                        level: inputs.level
                                        }}><Button title="Sumbit"/>
                                        </Link>
                                       
                                    </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img 
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" 
                                            alt="Sample"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Create