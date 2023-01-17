import React, { useEffect, useState } from 'react'

function GifGrid({ category }) {

    const [data, setData] = useState({ data: [] });
    const APY_KEY = 'Y0deAmzag0NmrKxEyN1ZJv3LPZAGEYvh'


    useEffect(() => {

        if (!category) {
            return null

        } else {
            async function fetchData() {
                const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APY_KEY}&q=${category}&limit=5&offset=0&rating=g&lang=en`)
                const json = await response.json();
                setData(json);
            }
            fetchData();
        }
    }, [])

    const images = data.data.map(el => ({
        id: el.id,
        title: el.title,
        url: el.images.downsized_medium.url
    }));

    /* const resultArray = [...images];
     ó ...images ambas son correctas */

    return (
        <>
            <h1 className='mt-3'>{category}</h1>
            <div className='card'>
                {...images.map(el => (
                    <>
                        <h5 key={el.id}>{el.title}</h5>
                        <img src={el.url}></img>
                    </>
                ))}
            </div>
        </>
    )
}

export default GifGrid