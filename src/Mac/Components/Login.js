import React from 'react'
import  imgUser from '../images/user.jpg'

// import HeaerWindow from './HeaderWindow'
import {Container , Row , Col} from 'react-bootstrap'
class Login extends React.PureComponent{
    render(){
        return(
            <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="6" >
                        <div className="container-form">
                            <div className="user py-3">
                                <img src={imgUser} className="img-fluid" id="userImg" alt="User"/>
                            </div>
                            <form onSubmit={this.props.submit}>
                                <h3 id="name_user">?</h3>
                                <input value={this.props.value} onChange={this.props.change} className="form-control" type="password" placeholder="Password" />
                                <button id="btnLogin" className="form-control">Login</button>
                            </form>
                        </div>
                    </Col>

                </Row>
            </Container>
                {/* <HeaerWindow/> */}


            </>
        )
    }
}
export default Login