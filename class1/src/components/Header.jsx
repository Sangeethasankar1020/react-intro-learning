import React from 'react'

export const Header = () => {

    let customCss="code";
    const isLoggedIn=true

    const greeting=isLoggedIn? <p>Welcome back!</p> : <p>Please log in.</p>

    const items=["items1","items2","items3"]


  return (
    <>
     <div>
        <h1 className='banner'>Sangeetha</h1>
        <p className='slogon'>learn More</p>


        {/* JavaScript Expression in Jsx */}
        <p className={customCss} style={{fontSize:"20px"}}>25+45={25+45}</p>


        {/* JSX with conditional Rendering */}

        {greeting}

        {/* JSX with List */}

        <ul>
            {items.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>

     </div>
    
    </>

  )
}
