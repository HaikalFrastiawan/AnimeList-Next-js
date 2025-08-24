"use client"

import React from 'react'

const CollectionButton = ({ anime_mal_id, user_email }) => {

    const handleCollection = async(event) =>{
        event.preventDefault()

        const data = { anime_mal_id, user_email }
        const response = await fetch("/api/v1/collection", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        
        const collection = await response.json()

        console.log({ collection })
    }
    
  return (
    <div>
     <button 
      className="px-2 py-1 bg-amber-400 relative z-50"
      onClick={handleCollection}>
      Add To Collection 
    </button>

    </div>

    
    
   
  )
}

export default CollectionButton
