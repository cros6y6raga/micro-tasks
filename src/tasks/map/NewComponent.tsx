import React from 'react';

type NewComponentType = {
    students: Array<StudentType>,
    topCars: Array<TopCarsType>
}
type StudentType = {
    id: number,
    name: string,
    age: number
}
type TopCarsType = {
    manufacturer: string,
    model: string
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.students.map((objectFromStudentArray, index) => {
                    return (
                        <li key={objectFromStudentArray.id}>
                            <span>{objectFromStudentArray.name}</span>
                            <span>-age-{objectFromStudentArray.age}</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                {props.topCars.map((objectFromTopCarsArray,index) => {
                    return (
                            <tr key={index}>
                                <th>{objectFromTopCarsArray.manufacturer}</th>
                                <td>{objectFromTopCarsArray.model}</td>
                            </tr>
                    )
                })}
            </table>
        </>
    );
};