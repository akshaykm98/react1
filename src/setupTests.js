import React from 'react'

const SetupTests =({courses}) =>

<div>
    <h2>SetupTests {courses.length}</h2>
    <ul>
        
    {console.log(courses)}
    
    {courses.map(item => (
        <>
    <li>{item.name}</li> 
    <li>{item.age}</li> 
    </>
))}
    </ul>
</div>

export default SetupTests

