import React from 'react'
import Student from './Student'
function Keys() {

        const students = [{id :1 , name :"Ganesh", age : 23},
        {id :2, name :"Bhushan", age : 23},
        {id :3, name :"Ashish", age : 23}
        ]
        const studentlist= students.map(student =>(<Student key={student.id} student={student} />
            ))

        
    return (
        <div>
            {studentlist}
        </div>
    )
}

export default Keys
