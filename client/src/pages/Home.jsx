import React from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../components/index'

export default function Home() {
    const location = useLocation()
    let username = ""
    let password = ""
    let email = ""
    let exp = ""
    let level = ""
    if (location.state == null) {
        console.log('data masih kosong');
    } else {
        username = location.state.username
        password = location.state.password
        email = location.state.email
        exp = location.state.exp
        level = location.state.level
    }
    return(
        <>
            <Navbar create="Create" edit="Edit" find="Find"/>
            { location.state !== null &&
            <div className='container mt-5'>
                <div class="d-flex justify-content-center mt-2">{ username !== undefined &&'username : ' + username }</div>
                <div class="d-flex justify-content-center mt-2">{ password !== undefined && 'password : ' + password } </div>
                <div class="d-flex justify-content-center mt-2">{ email !== undefined &&'email : ' + email }</div>
                <div class="d-flex justify-content-center mt-2">{ exp !== undefined && 'exp : ' + exp }</div>
                <div class="d-flex justify-content-center mt-2">{ level !== undefined && 'level : ' + level }</div>
            </div>
            }
        </>
    )
}
