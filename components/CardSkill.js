import React from 'react'

const CardSkill = ({ data }) => {
    return (
        <div className=' my-4 mx-auto p-2 w-full  cardMaxW rounded'>
            <div className='imgCard'>
                <img src={data.img} alt={data.name} />
            </div>
            <p className='text-center'>{data.name}</p>
        </div>
    )
}

export default CardSkill