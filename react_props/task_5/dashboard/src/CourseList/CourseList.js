import React from 'react';
import CourseListRow from "./courseListRow";
import './CourseList.css';

function CourseList({}) {
    return (
        <table>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody id="CourseBody">
            {listCourse.length === 0  && (
                <tr>
                    <td>No course available yet</td>
                </tr>
            )}
            {listCourse.map(course => (
                <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
            ))}
            </tbody>
        </table>
    )
}

export default CourseList
