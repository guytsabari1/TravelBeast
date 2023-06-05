import './CartHikeCard.css'
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { IoLocationSharp } from 'react-icons/io5';
import  {MdAttachMoney}  from 'react-icons/md';
import  {MdFamilyRestroom}  from 'react-icons/md';
import  {TbCircleLetterD}  from 'react-icons/tb';

function CartHikeCard({ value, setGetUserCartArrFromLs }) {
    const nameCart = localStorage.getItem('loginName')

    function RemoveFromCart() {
        let userCartArr = JSON.parse(localStorage.getItem(`${nameCart}Favorites`));
        userCartArr = userCartArr.filter(v => v.zpid !== value.zpid)
        setGetUserCartArrFromLs([...userCartArr])
        localStorage.setItem(`${nameCart}Favorites`, JSON.stringify(userCartArr))
        console.log(userCartArr);
    }

    return (
        <div className='cart-card'>

            <img className='images' src={`${value?.imgSrc}`} alt="" />
            <div className="hike-card-text">{`${value?.hikeName}`}</div>
            <div className="hike-card-text"><span className="info-list-item-icon"><IoLocationSharp size={32} /></span>{`Country: ${value?.country}`}</div>
            <div className="hike-card-text"><span className="info-list-item-icon"><MdAttachMoney size={32} /></span>{`Price: ${value?.price}$`}</div>
            <div className="hike-card-text"><span className="info-list-item-icon"><MdFamilyRestroom size={32} /></span>{`For: ${value?.for}`}</div>
            <div className="hike-card-text"><span className="info-list-item-icon"><TbCircleLetterD size={32} /></span>{`Days:${value?.numberOfDays}`}</div>
            <button className='remove-from-cart-btn' onClick={RemoveFromCart}><DeleteForeverSharpIcon /></button>






        </div>
    )

}

export default CartHikeCard;

