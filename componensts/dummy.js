import React from 'react'

function Dummy() {
  return (
    <>
        <style jsx global>
            {`
                .dummy {
                    background-color: yellow;
                }
            `}
        </style>
        <div className='dummy'>
                Dummy Component
        </div>
    </> 
   
  )
}

export default Dummy
