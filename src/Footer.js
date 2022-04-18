import React from 'react'

function Footer() {
    let date = new Date().toDateString();
    return (
        <div className='footer'>
            {date}
        </div>
    )
}

export default Footer
