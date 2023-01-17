import React, { useEffect, useState } from 'react'

const GifGrid = ({ category }) => {

    const [data, setData] = useState({ data: [] });
    const [loading, setLoading] = useState(true)
    const APY_KEY = 'Y0deAmzag0NmrKxEyN1ZJv3LPZAGEYvh'


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APY_KEY}&q=${category}&limit=28&offset=0&rating=g&lang=en`)
            const json = await response.json();
            setData(json);
        }
        fetchData();
        setLoading(false)

    }, [])

    const images = data.data.map(el => ({
        id: el.id,
        title: el.title,
        username: el.username,
        url: el.images.downsized_medium.url
    }));

    /* const resultArray = [...images];
     or '...images' both are corrects */

    return (
        <div>
            {loading ? (
                <div>

                </div>
            ) : (
                <>
                    <h2 className='pt-5'>{category}</h2>
                    <div className='row'>
                        {...images.map(el => (
                            <div className='customCard'>
                                <img key={el.id} src={el.url}></img>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default GifGrid