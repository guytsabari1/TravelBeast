import {React,useContext} from "react";
import {useParams} from "react-router-dom";
import { Context } from "../../context/context";
import  {TbDisabled2}  from 'react-icons/tb';
import { IoLocationSharp } from 'react-icons/io5';
import  {MdAttachMoney}  from 'react-icons/md';
import  {GiTrail}  from 'react-icons/gi';
import  {MdFamilyRestroom}  from 'react-icons/md';
import  {TbLadder}  from 'react-icons/tb';
import  {BiWater}  from 'react-icons/bi';
import  {TbCircleLetterD}  from 'react-icons/tb';


import '../HikeExtendedCard/HikeExtendedCard.css'



function HikeExtendedCard() {
  const {id} = useParams();
  const {data} = useContext(Context);
  const obj = data.find(element => element.zpid == id)

  return (
    
    <div id="container-hike">
        <div id="hike-img-div"> <img id="img-itself" src={obj?.imgSrc} /></div>
        <div id="hike-info">
          <h1 id="info-title">{`${obj?.hikeName}`}</h1>
          {/* <div className="info-list-item"><span className="info-list-item-icon"></span></div> */}
          <div className="info-list-item" ><span className="info-list-item-icon"><IoLocationSharp size={32}/></span>{`Country: ${obj?.country}`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><MdAttachMoney size={32}/></span>{`Price: ${obj?.price}$`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><MdFamilyRestroom size={32}/></span>{`For: ${obj?.for}`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><GiTrail size={32}/></span>{`Hike Length: ${obj?.hikeLengthInKm}`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><TbLadder size={32}/></span>{`Difficulty Level: ${obj?.difficultyLevel}`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><TbCircleLetterD size={32}/></span>{`Number Of Days: ${obj?.numberOfDays}`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><TbDisabled2 size={32}/></span>{`Access For Disabled: ${obj?.accessForDisabled}`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><BiWater size={32}/></span>{`Water Access: ${obj?.waterAccess}`}</div>
          
          

        </div>
      </div>

    
  )

}

export default HikeExtendedCard;


