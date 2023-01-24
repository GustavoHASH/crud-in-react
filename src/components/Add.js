import React from 'react';
import {Button, Form} from  'react-bootstrap'
import Employees from './Employees';
import {v4 as uuid} from 'uuid';
import { Link, useNavigate } from 'react-router-dom';   


function Add(){

    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');

    let history = userNavigate();

    return <div>
        <Form className='d-grid gap-2'> </Form>
        
    </div>
}