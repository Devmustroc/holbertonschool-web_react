import React from 'react';
import CourseListRow from "./courseListRow";
import PropTypes from "prop-types";
import './CourseList.css';

function CourseList({ listCourses }) {
    return (
        <table>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
            {listCourses.length === 0 ? (
                <CourseListRow textFirstCell="No course available yet" isHeader={true}/>
            ) : (
                listCourses.map((course, index) => (
                    <CourseListRow key = {index}
                    isHeader = {false}
                    textFirstCell = {course.name}
                    textSecondCell = {course.credit} />
            )))}
            </tbody>
        </table>
    )
}

CourseList.PropTypes = {
    listCourses: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        credit: PropTypes.number.isRequired
    })),
}
CourseList.defaultProps = {
    listCourses: []
};

export default CourseList
