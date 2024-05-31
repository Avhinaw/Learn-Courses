import React, { useEffect, useState } from "react";
import { apiUrl } from "../data";
import Card from "./Card";

const Cards = ({courses, category}) =>{
    const [liked, setLiked] = useState([]);

    const getCourses = () =>{
        if(category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }else {
            return courses[category];
        }
    }





    return(
        <div className="flex flex-wrap gap-5 items-center justify-center">
            {
                getCourses().map( (course) => (
                    <Card key={course.id} course={course} liked={liked} setLiked={setLiked}/>
                ))
            }
        </div>
    );
};

export default Cards;