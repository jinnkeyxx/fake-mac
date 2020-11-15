import React from 'react'
import Main from './Components/Main'
import Login from './Components/Login'
class App extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            isLogin : false,
        }
    }
    render(){
        if(this.state.isLogin === false){
            return(
                <Login/>
            )
        }
        return(
            <Main/>
        )
    }
}
export default App