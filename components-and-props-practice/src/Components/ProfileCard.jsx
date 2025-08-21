import React from 'react'
import Notification from './Notification'

const ProfileCard = ({object}) => {
  return (<>
    <div style={{border:"2px solid black", display:"flex",flexDirection:"column", gap:"10px", backgroundColor:object.age>=40?"red":object.age==22?"green":""}}>
        <img width={100} height={140} src={object.profilePic} />
        <h2>Name: {object.name}</h2>
      { object.age>=40?
      '': <h2>Age: {object.age}</h2>}
        <h2>Bio: {object.bio}</h2>
                 <Notification  message={object?.message} type={object?.type} />
    </div>


  </>
  )
}

export default ProfileCard