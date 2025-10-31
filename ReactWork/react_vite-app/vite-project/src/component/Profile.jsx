import React from 'react'
import './Profile.css'

function Profile({data}) {
  return (
    <div className='parent'>
      <h2>profile page</h2>
      
      <h3>Name:{data.name}</h3>
      <h3>Age:{data.age}</h3>
      <h3>Branch {data.Branch}</h3>
      <h3>section {data.section}</h3>
      <h3>college {data.college}</h3>
    </div>
  )
}

export default Profile
