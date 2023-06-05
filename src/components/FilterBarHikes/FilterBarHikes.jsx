import { useForm } from "react-hook-form";
import { Context } from '../../context/context';
import { React, useContext } from "react";
import '../FilterBarHikes/FilterBarHikes.css'

function FilterBarHikes() {
    const {setSavedUserChoises} = useContext(Context);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setSavedUserChoises(data);
    
    return (
        

            <form id="filters-div" onSubmit={handleSubmit(onSubmit)}>

                <div id="filter-first-row">

                    <select {...register(`country`)} id="country-filter" className="single-filter">
                        <option value="" hidden>Country</option>
                        <option value="Israel">Israel</option>
                        <option value="Thailand">Thiland</option>
                        <option value="Argentina">Agrentina</option>
                        <option value="Peru">Peru</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Chile">Chile</option>
                    </select>

                    <select {...register(`price`)} id="price-filter-sort" className="single-filter">
                        <option value="" hidden>Price</option>
                        <option value="High to Low">High to Low</option>
                        <option value="Low to High">Low to High</option>
                    </select>

                    <select {...register(`hikeType`)} id="hike-type" className="single-filter">
                        <option value="" hidden>Hike Type</option>
                        <option value="Nature">Nature</option>
                        <option value="Urban">Urban</option>
                        <option value="Urban&Nature">Urban&Nature</option>
                        
                    </select>       

                </div>

                <div id="filter-second-row">

                <select {...register(`numberOfDays`)} id="days-number" className="single-filter">
                        <option value="" hidden>Days Number</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    
                    <select {...register(`difficultyLevel`)} id="difficulty-level" className="single-filter">
                        <option value="" hidden>Difficulty Level</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>

                    </select>

                    <button type="input" id="sumbit-btn">Find My Hike</button>



                </div>

            </form>
        

    )

}

export default FilterBarHikes;