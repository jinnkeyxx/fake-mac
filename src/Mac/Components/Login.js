import React from 'react'
import '../layout.css'
import  imgUser from '../images/user.jpg'

import HeaerWindow from './HeaderWindow'

class Login extends React.PureComponent{
    render(){
        return(
            <>
                {/* <HeaerWindow/> */}
                <div className="container-form">
                    <div className="user">
                        <img src={imgUser}/>
                    </div>
                    <form onSubmit={this.props.submit}>
                        <h3 id="name_user">?</h3>
                        <input value={this.props.value} onChange={this.props.change} type="text" />
                        <button id="btnLogin">Login</button>

                    </form>
                </div>
            </>
        )
    }
}
export default Login