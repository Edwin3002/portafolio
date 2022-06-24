import Image from 'next/image'
import React from 'react'

const CardSkill = ({ data }) => {
    return (
        <div className='bg-purple-500 m-4 p-2 w-full  cardMaxW rounded'>
            <div className='imgCard'>
                <img src={data.img} alt={data.name} />
            </div>
            <p className='text-center'>{data.name}</p>
        </div>
    )
}

export default CardSkill