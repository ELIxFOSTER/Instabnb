import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import * as spotsActions from '../../store/spots'
import { useSelector } from 'react-redux'
import Navigation from '../Navigation'
import SpotCard from '../SingleSpotCard'
import './ManageListings.css'

export default function ManageListings() {
const dispatch = useDispatch()
const [spots, setSpots] = useState([])
const hostingRoute = 'hosting'

const currUserSpots = useSelector((state) => Object.values(state.spots.AllSpots))


useEffect(() => {
    const fetchData = async () => {
        const response = await dispatch(spotsActions.getCurrentUserSpots())
        setSpots(response)
    }
    fetchData()
}, [dispatch])

// if (!currUserSpots.length) return null

return (
    <div className='listing-page-wrapper'>
        <div className='content-box'>
            {currUserSpots.length === 0 ? (
        <div className='listings-header-container'>
            <img src='https://static.vecteezy.com/system/resources/previews/003/067/848/original/cartoon-sad-smile-face-emoticon-icon-in-flat-style-free-vector.jpg' />
        </div>
            ): (
                <div className='listings-header-container'>
                    <h1>Current Listings</h1>
                </div>
            )}
        <div className='listings-container'>
        {currUserSpots.length > 0 ? (
            currUserSpots.map((spot) => {
                return (
                    <div>
                        <div>
                            <SpotCard key={spot.name} spot={spot} />
                        </div>
                    </div>
                )
            })
        ): (
            <div className='create-new-spot'>
                <NavLink to={`/${hostingRoute}/home`}
                style={{textDecoration: 'none', color: 'black'}}
                >
                <h3 id='create-new-spot'>Create a new listing!</h3>
                </NavLink>
            </div>
        )}
        </div>
        </div>
    </div>
)

    // return (
    //     <>
    //     <h1>Manage Listings (edit and delete page)</h1>
    //         <NavLink to={'/create-from'}>
    //             <li>Create a new Spot!</li>
    //         </NavLink>
    //     {currUserSpots.length > 0 ? (
    //         currUserSpots.map((spot) => {
    //             return (
    //                 <>
    //                 <NavLink to={`/spots/${spot.id}`}>
    //                     <li>{spot.name}</li>
    //                     <li>{spot.price}</li>
    //                     <img src={spot.previewImage} />
    //                 </NavLink>
    //                 </>
    //             )
    //         })
    //     ): (
    //         <>
    //             <li>No Listings found</li>
    //                 <NavLink to={'/create-from'}>
    //                     <button>Start Hosting!</button>
    //                 </NavLink>
    //         </>
    //     )}
    //     </>
    // )
}
