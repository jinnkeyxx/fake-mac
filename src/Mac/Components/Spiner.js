import React from 'react'
import HeaerWindow from './HeaderWindow'

const Spiner = () => {
    return(
        <>
            <HeaerWindow/>

            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </>
    )
}
export default React.memo(Spiner)