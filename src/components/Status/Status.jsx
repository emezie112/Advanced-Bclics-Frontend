import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../components/Icons/Icons'
import StatusCard from '../StatusCard/StatusCard'
import StatusText from '../StatusText/StatusText'
import './Status.css'

const Status = () => {
  return (

    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        
        <div className="Chat-container">
          <div className="row">
            <Link style={{ textDecoration: "none", color: "inherit" }} to='/message'>
            <h2>Chats</h2></Link>
            <h2>Status</h2>
          </div>
          <div className="Chat-list">

            <StatusCard/>


          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div className="IcoS">
          <Icons />
        </div>
          <div className="MessagT">
            <StatusText/>
          </div>
      </div>
      hello world
    </div>
  )
}

export default Status