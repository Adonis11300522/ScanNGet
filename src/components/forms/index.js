import React from 'react'
import Form from 'react-bootstrap/Form'
import {InputGroup, FormControl, Button, Nav} from 'react-bootstrap'
import { FaKey, FaUserAlt } from "react-icons/fa";


export function LoginForm() {
    return(
        <div className='login-form'>
            <h2 className='text-center'>Log In</h2>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FaUserAlt/></InputGroup.Text>
                    <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FaKey/></InputGroup.Text>
                    <FormControl
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    type="password"
                    />                
                </InputGroup>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className='text-center'><Button variant="primary" type="submit">Login</Button></div>                
                <div className='d-flex flex-columm justify-content-between align-item-center mt-3'>
                    <Nav.Link className="text-white">Forgot Password?</Nav.Link>
                    <Nav.Link className="text-white">Create Account</Nav.Link>
                </div>
            </Form>
        </div>
    )
}

export function RegisterFrom() {
    return(
        <div className='login-form'>
            <h2 className='text-center'>Register</h2>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FaUserAlt/></InputGroup.Text>
                    <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FaKey/></InputGroup.Text>
                    <FormControl
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    type="password"
                    />                
                </InputGroup>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className='text-center'><Button variant="primary" type="submit">Login</Button></div>                
            </Form>
        </div>
    )
}

export function ForgotForm() {
    return(
        <></>
    )
}