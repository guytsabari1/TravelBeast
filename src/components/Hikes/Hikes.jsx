import { Context } from '../../context/context';
import { React, useContext, useEffect, useState } from "react";
import HikeCard from '../HikeCard/HikeCard';
import FilterBarHikes from '../FilterBarHikes/FilterBarHikes';
import '../Hikes/Hikes.css'

function Hikes() {
  const { data, savedUserChoises } = useContext(Context);
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    let filteredData = data;

    if (savedUserChoises.country) {
      filteredData = filteredData.filter(obj => obj.country === savedUserChoises.country);
    }
    if (savedUserChoises.hikeType) {
      filteredData = filteredData.filter(obj => obj.hikeType === savedUserChoises.hikeType);
    }
    if (savedUserChoises.numberOfDays) {
      filteredData = filteredData.filter(obj => obj.numberOfDays === savedUserChoises.numberOfDays);
    }
    if (savedUserChoises.difficultyLevel) {
      filteredData = filteredData.filter(obj => obj.difficultyLevel === savedUserChoises.difficultyLevel);
    }

    if (savedUserChoises.price === 'High to Low') {
      filteredData.sort((a, b) => b.price - a.price);
    } else if (savedUserChoises.price === 'Low to High') {
      filteredData.sort((a, b) => a.price - b.price);
    }

    setSortedData(filteredData);
  }, [savedUserChoises, data]);

  return (
    <div className="hike-page">

      <FilterBarHikes />

      <div className='hikes-main'>
      {sortedData.map((item, index) => (
        <HikeCard value={item} index={index} key={index} />
      ))}
      </div>
      
      
    </div>
  );
}

export default Hikes;