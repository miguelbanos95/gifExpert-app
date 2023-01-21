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

        setTimeout(function () {
            setLoading(false)
        }, 1000);


    }, [])

    const images = data.data.map(el => ({
        id: el.id,
        title: el.title,
        username: el.username,
        url: el.images.downsized_medium.url
    }));

    const handleDelete = (category) => {
        const filteredCategory = data.filter((el => el.category !== category))
        setData(filteredCategory)

    }


    // const deletedFood = (name) => {
    //     const filteredFood = displayItems.filter((food) => food.name !== name);
    //     setDisplayItems(filteredFood);
    //     setShowFoods(filteredFood);
    //   }

    /* const resultArray = [...images];
     or '...images' both are corrects */

    return (
        <div>
            {loading ? (
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    <div className='category'>
                        <h2 className=''>{category}</h2>
                        <button className='deleteButton' onClick={handleDelete}>
                            <i className="fa-solid fa-trash fa-xl"></i>
                            </button>
                    </div>
                    <div className='row'>
                        {...images.map(el => (
                            <div className='customCard'>
                                <div className='imgBox'>
                                    <img key={el.id} src={el.url}></img>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default GifGrid