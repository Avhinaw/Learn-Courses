import React from "react";

const Filter = ({ filterData, category, setCategory }) => {

    const filterHandler = (title) =>{
        setCategory(title);
    }

    return(
        <div className="flex items-center flex-wrap justify-center">
            {filterData.map((data) => (
                <button className={`bg-[#2d2f40] px-4 py-2 rounded-md text-lg m-2 hover:bg-[#22223b]
                ${category === data.title ? "border-2 border-white" : "border-transparent"}
                `}
                    key={data.id}
                    onClick ={() => filterHandler(data.title)}>
                    {data.title}
                </button>
            ) )}
        </div>
    );
};

export default Filter;