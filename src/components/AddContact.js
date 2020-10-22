import React from 'react'
import {Form,Button} from 'react-bootstrap'
const AddContact = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Contact's Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Contact's Name" />
                
            </Form.Group>

            <Form.Group>
                <Form.Label>Contant's Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Contact's email" />
                
            </Form.Group>

            <Form.Group>
                <Form.Label>Contant's Image Url</Form.Label>
                <Form.Control type="text" placeholder="Enter Contant's Image Url" />
                
            </Form.Group>
            

            <Button variant="primary">Add </Button>
            <Button variant="secondary">Cancel</Button>
            

            
            
        </Form>
    )
}

export default AddContact
