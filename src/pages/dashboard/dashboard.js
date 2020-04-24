import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import DashBoardRoutes from './routes.dashboard'
function DashBoardPage({usuario}) {
    const history = useHistory()
    useEffect(() => {
        if(!usuario.logado){
            history.push('/')
        }
    })
  return (
    <Row className="mt-2">
        <Col md={4}>menu</Col>
        <Col md={8}>
            <DashBoardRoutes />
        </Col>
    </Row>
  );
}
const mapStateToProps = state => ({
  usuario: state.Autenticacao
});
export default connect(mapStateToProps,null)(DashBoardPage)
