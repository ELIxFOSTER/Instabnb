import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getSpotDetails } from '../../store/spots'
import { useHistory } from 'react-router-dom'
import SpotImages from './SpotImages'
import { deleteSpotThunk } from '../../store/spots'
import SpotDetailsCard from './SpotDetailsCard'
import { getReviews } from '../../store/reviews'


export default function SpotDetails() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { spotId } = useParams()
    const spot = useSelector((state) => state.spots.SpotDetails)
    const sessionUser = useSelector(state => state.session.user)
    const reviews = useSelector((state) => state.reviews.allReviews)


    useEffect(() => {
        dispatch(getSpotDetails(spotId))
    }, [dispatch])

    useEffect(() => {
        dispatch(getReviews(spotId))
    }, [dispatch])

    if (!Object.values(spot).length) return null

    return (
        <>
            <SpotDetailsCard spot={spot} reviews={reviews}/>
        </>
    )
}
