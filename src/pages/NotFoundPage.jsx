import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            Not Found Page
            <div>
                <Link to='/main'>Go to main</Link>
            </div>
        </div>
    )
}

export default NotFound
