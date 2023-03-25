import Image from 'next/image';
import React from 'react'

const PostHeader = (props) => {
    const { title, image } = props;
    return (
        <div className='flex justify-between mb-8'>
            <h1 className='text-6xl font-bold '>{title}</h1>
            <Image src={image} width={250} height={100} alt={title} className="object-cover" />
            
        </div>
    )
}

export default PostHeader