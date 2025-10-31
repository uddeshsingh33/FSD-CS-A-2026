import React from 'react'
import Profile from './Profile'
import './Gallery.css'

function Gallery() {
  const student= 
  [{
    name:"ram",
    age :"20",
    Branch :"cse",
    section:"B",
    college:"ABES EC"
  },
  {
    name:"rahul",
    age :"20",
    Branch :"cse",
    section:"B",
    college:"ABES EC"
  },
  {
    name:"vansh",
    age :"20",
    Branch :"cse",
    section:"B",
    college:"ABES EC"
  },
  {
    name:"shyam",
    age :"20",
    Branch :"cse",
    section:"B",
    college:"ABES EC"
  }
]


  return (
    <div className='gallery'>
      {/* <div><Profile name="ram" age ="20" branch ="cse" section="B" college="ABES EC"/></div>
      <div><Profile name="shyam" age ="20" branch ="cse" section="B" college="ABES EC"/></div>
      <div><Profile name="vhisnu" age ="20" branch ="cse" section="B" college="ABES EC"/></div>
       */}
       {/* <Profile data={student}/> */}


       {
        student.map((element,index)=>
          <Profile data={element} key = {index}/>
        )
       }
    </div>
  )
}

export default Gallery
