import React, { useContext, useState } from 'react';
import {Link , useNavigate } from 'react-router-dom'
import {Form , FormGroup , Label , Input , Button} from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';
import {v4 as uuid} from 'uuid';

export const AddUser = () => {

  const [name , setName] = useState('');

  const {addUser} = useContext(GlobalContext);
  let navigate = useNavigate();

  const onSubmit = (e) => {
    // e.preventDefault();
    const newUser = { id : uuid() , name }
    addUser(newUser)
    navigate('/')
  }
  const onChange = (e) => {
    setName(e.target.value)
  }
  return (
    <Form onSubmit = {onSubmit} className="for">
      <FormGroup >
        <Label>Name</Label>
        <Input type="text" name="name" placeholder="Enter Your Name" value={name} onChange={onChange} required></Input>
      </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  )
}
