import React from 'react';
import {Row,Col,Form,Button} from 'react-bootstrap'

export default function LoginPage() {
  return (
    <Row className="mt-2">
        <Col md={4}>
        <Form>
            <Form.Group controlId="LoginEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="LoginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Entrar
            </Button>
        </Form>
        </Col>
    </Row>
  );
}
