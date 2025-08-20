import React from 'react'

const ProfileCard = (props) => {
  return (
    <div style={{border:"2px solid black", display:"flex",flexDirection:"column", gap:"10px",}}>
        <img width={100} height={140} src={props.profilePic} />
        <h2>Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
        <h2>Bio: {props.bio}</h2>
    </div>
  )
}

export default ProfileCard