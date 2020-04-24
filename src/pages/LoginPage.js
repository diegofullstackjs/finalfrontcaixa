import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {Row,Col,Form,Button} from 'react-bootstrap'
import ActionLogin from '../redux/actions/ActionLogin'
import {connect} from 'react-redux'
function LoginPage({usuario}) {
    const [form,setForm] = useState();
    const dispatch = useDispatch()
    onchange = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }
    const Logar = e => {
        e.preventDefault();

        dispatch(ActionLogin(form))
    }
  return (
    <Row className="mt-2">
        <Col md={4} className="offset-md-4">
            {
                usuario.message?
                <p className="text-danger">{usuario.message}</p>
                : ''
            }
        <Form onSubmit={Logar}>
            <Form.Group controlId="LoginEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name="email" onChange={onchange} placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="LoginPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" name="password" onChange={onchange} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" block type="submit">
                Entrar
            </Button>
        </Form>
        </Col>
    </Row>
  );
}
const mapStateToProps = state => ({
  usuario: state.Autenticacao
});
export default connect(mapStateToProps)(LoginPage)
