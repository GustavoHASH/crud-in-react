import React from 'react';
import {Button, Form} from  'react-bootstrap'
import Employees from './Employees';
import {v4 as uuid} from 'uuid';
import { Link, useNavigate } from 'react-router-dom';   


function Add(){

    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueID = ids.slice(0,8);

        let a = name,
        b = age;

        Employees.push({id: uniqueID, Name : a, Age : b});
        history("/");

    }
    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName"> 
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge"> 
                <Form.Control type="text" placeholder="Enter Age" required onChange={(e)=>setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e)=> handleSubmit(e)} type="submit"> Submit </Button>          
        </Form>
        
    </div>
    }   
    export default Add;