import React from 'react'
import PropsTypes from "prop-types"


export const Student = (props) => {
  return (
    <div className='student'>
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>isMarried</th>
                <td>{props.isMarried ? "Yes":"No"}</td>
            </tr>
            </tbody>
            
        </table>



    </div>
  )
}


Student.PropsTypes={
    name:PropsTypes.string,
    age:PropsTypes.number,
    isMarried:PropsTypes.bool
}

Student.defaultProps={
    name:"No Name",
    age:0,
    isMarried:false
}