import React ,{Suspense} from 'react'
import Main from './Components/Main'
import Login from './Components/Login'
import Spiner from './Components/Spiner'
import './layout.css'

class App extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            defaultPassword : "?",
            password : "",
            isLogin : false,
            errorLogin : null,
        }
    }
    changePassword = (event) => {
        let password = event.target.value
        if(password === "" || password !== this.state.defaultPassword){
            this.setState({errorLogin : false})
        }
    }
    render(){

        if(!this.state.isLogin){
            if(!this.state.errorLogin){
                return(
                    <Suspense fallback={<Spiner/>}>
                        <Alert style={{background : 'red' , color : '#fff'}}>Not Found User</Alert>
                    <Login value={this.state.password} change={this.changePassword}/>
                    {/* <Spiner/> */}
                </Suspense>
                )
            }

            return(
                <Suspense fallback={<Spiner/>}>
                    <Login value={this.state.password} change={this.changePassword}/>
                    {/* <Spiner/> */}
                </Suspense>
            )
        }
        return(
            <Suspense  fallback={<Spiner/>}>
                <Main/>
            </Suspense>
        )
    }
}
export default App