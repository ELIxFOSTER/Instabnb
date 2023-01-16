import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as spotsActions from '../../store/spots'
import './SingleSpotCard.css'
import { NavLink } from 'react-router-dom';


export default function SpotCard( { spot }) {
    console.log(spot)
    return (
        <>
        <NavLink to={`/spots/${spot.id}`}>
        <div className='spot-card'>
            <div>
                <img className='spot-card-img' src={spot.previewImage} ></img>
            </div>
            <div>
                <h1>{spot.name}</h1>
            </div>
            <div>
            <h4>${spot.price}</h4>
            </div>
        </div>
        </NavLink>
        </>
    )
}
