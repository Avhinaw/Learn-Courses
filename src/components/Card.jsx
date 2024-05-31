import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { toast } from "react-toastify";

const Card = ({ course, liked, setLiked }) =>{
    const des = course.description.slice(0, 100);
    const handleLove = ()=>{
        if(liked.includes(course.id)) {
            setLiked((prev) => prev.filter ((cid) => cid !== course.id));
            toast.warning("Like Removed ");
        }else{
            if(liked.length === 0){
                setLiked([course.id]);
            }else{
                setLiked((prev) => [...prev, course.id]);
            }
            toast.success("Like Added");
        }
    }
    return(
        <div className="w-72 h-[45vh] bg-[#2b2c45] text-white rounded-md overflow-hidden relative">
        <div className="relative">
        <img src={course.image.url} alt={course.image.alt} />
        <div className="bg-white rounded-full absolute w-10 h-10 flex items-center justify-center right-[3%] bottom-[-10%]">
        <button onClick={handleLove}>
        {
            !liked.includes(course.id)? (
                <FaHeart  className="text-red-300 text-2xl" />
            ) : (
                <FaHeart  className="text-red-500 text-white text-2xl" />
            )
        }
        </button>
        </div>
        </div>
        <div className="flex flex-col gap-2 p-2">
        <h3 className="font-semibold text-xl">{course.title}</h3>
        <p className="text-[1.05rem]">
        {des}...
        </p>
        </div>
        </div>
    );
};

export default Card;