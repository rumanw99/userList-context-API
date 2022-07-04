import React, { useContext, useEffect, useState } from 'react';
import {Link , useNavigate, useParams } from 'react-router-dom'
import {Form , FormGroup , Label , Input , Button} from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

export const EditUser = (props) => {

  
  const [selected , setSelected] = useState({
    id:"",
    name : "",
  });
  const {users , editUser} = useContext(GlobalContext);
  let params = useParams();
  let navigate = useNavigate();

  const currentUserId = params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selected = users.find(user => user.id === userId);
    setSelected(selected)
  } , [currentUserId , users])

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selected)
    navigate('/')
  }
  const onChange = (e) => {
    setSelected({...selected , [e.target.name] : e.target.value})
  }

  return (
    <Form onSubmit = {onSubmit} className="for">
      <FormGroup>
        <Label>Edit</Label>
        <Input type="text" name="name"  placeholder="Enter Your Name" value={selected.name} onChange={onChange} required></Input>
      </FormGroup>
        <Button type="submit">Submit</Button>
      <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  )
}
