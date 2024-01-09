import Image from 'next/image'
import React from 'react'
const CardSkill = ({ data }) => {
    
    return (
        <div  className='animate__animated animate__bounce my-4 mx-auto p-2 w-full  cardMaxW rounded'>
            <div className='imgCard'>
                <Image loading="lazy"
                  width={100}
                  height={100} src={data.img} alt={data.name} />
            </div>
            <p className='text-center'>{data.name}</p>
        </div>
    )


}

export default CardSkill