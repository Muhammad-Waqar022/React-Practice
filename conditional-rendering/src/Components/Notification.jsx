import React from 'react'

const Notification = () => {
    let hasNotification=true
  return (
    <div>
        {hasNotification?"You have new Notification":"You don't have any notifications yet"}
    </div>
  )
}

export default Notification