import React from 'react';
import {connect} from 'react-redux'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
function Header({usuario}) {
  console.log(usuario)
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="#home">Fluxo Caixa</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Nav className="justify-content-between">
          {
            usuario.logado? 
            <NavDropdown title="PAINEL" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">MEUS DADOS</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">SAIR</NavDropdown.Item>
            </NavDropdown>
            : (
              <Nav.Link href="#link" className="btn btn-primary">CADASTRA-SE</Nav.Link>
            )
          }

        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const mapStateToProps = state => ({
  usuario: state.Autenticacao
});
export default connect(mapStateToProps)(Header)