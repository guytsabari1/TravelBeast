
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../HikeCard/HikeCard.css';
import { IoLocationSharp } from 'react-icons/io5';
import { MdAttachMoney } from 'react-icons/md';
import { MdFamilyRestroom } from 'react-icons/md';
import { TbCircleLetterD } from 'react-icons/tb';
import { React, useContext } from "react";
import { Context } from '../../context/context';

function HikeCard({ value }) {
  const loginName = localStorage.getItem("loginName")
  const [cardStatus, setCardStatus] = useState(false);
  const { setCart,cart } = useContext(Context);

  useEffect(() => {
    setCardStatus(cart.some(v => v.zpid === value.zpid))
  }, [cart])

  function addToFav() {

    let userFavArr = JSON.parse(localStorage.getItem(`${loginName}Favorites`))

    if (!cardStatus) {
      if (!userFavArr.some(v => v.zpid == value.zpid)) {
        userFavArr.push(value);
      }
    }
    else {
      userFavArr = userFavArr.filter(v => v.zpid !== value.zpid)
    }

    localStorage.setItem(`${loginName}Favorites`, JSON.stringify(userFavArr))
    setCardStatus(!cardStatus);
    setCart(userFavArr)
  }

  if (!localStorage.getItem((`${loginName}Favorites`))) {
    localStorage.setItem(`${loginName}Favorites`, JSON.stringify([]));
  }

  return (
    <div key={value.zpid} className="hike-card">
      <Link to={`/hikes/${value.zpid}`}>
        <img className="images" src={value.imgSrc} alt="Failed to import the hike pic" />
      </Link>
      <div className="hike-card-text">{`${value?.hikeName}`}</div>
      <div className="hike-card-text"><span className="info-list-item-icon"><IoLocationSharp size={32} /></span>{`Country: ${value?.country}`}</div>
      <div className="hike-card-text"><span className="info-list-item-icon"><MdAttachMoney size={32} /></span>{`Price: ${value?.price}$`}</div>
      <div className="hike-card-text"><span className="info-list-item-icon"><MdFamilyRestroom size={32} /></span>{`For: ${value?.for}`}</div>
      <div className="hike-card-text"><span className="info-list-item-icon"><TbCircleLetterD size={32} /></span>{`Days: ${value?.numberOfDays}`}</div>

      <button className={`add-to-cart-btn ${cardStatus ? 'remove-btn' : ''}`} onClick={addToFav}>
        {cardStatus ? 'Remove from Cart' : 'Add to Cart'}
      </button>
      
    </div>
  );
}

export default HikeCard;