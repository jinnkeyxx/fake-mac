import React from 'react'
class HeaderWindow extends React.PureComponent{
    render(){
        return (
            <div className="HeaderWindow">
                <div className="button" id="red">x</div>
                <div className="button" id="yellow">-</div>
                <div className="button" id="green">+</div>

            </div>
        )
    }
}
export default HeaderWindow