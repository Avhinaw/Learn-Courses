import { useState, useEffect } from 'react'
import { apiUrl, filterData } from './data'
import { toast } from "react-toastify";
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Loading from './components/Loading';

const App = () =>{

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async() =>{
    setLoading(true);
    try{
        const res = await fetch(apiUrl)
        const output = await res.json(res);
        setCourses(output.data);
    }
    catch(err){
        toast.error("Something went wrong");
    }
    setLoading(false);
}

  useEffect(() => {
      fetchData();
  }, [])

  return(
    <div className='min-w-full min-h-screen flex flex-col items-center gap-5 pb-5 m-auto bg-[#494d69] text-white'>
      <Navbar />
      <Filter 
        filterData = {filterData}
        category = {category}
        setCategory = {setCategory}
      />
      {
        loading ? (<Loading />) : (<Cards  courses={courses} category={category} />)
      }
    </div>
  );
};

export default App;