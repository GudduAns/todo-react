import React, { useState } from 'react'
import Tabs from './Tabs'
import data from './data.json'
// import UseUnsplash from '../../hooks/useUnsplash'
const UNSPLASH_ROOT = 'https://api.unsplash.com'
const ImageGallery = () => {
    const [active, setActive] = useState('orange')
    // console.log(data, 'new active')
    return (
        <>
            <div className="container">
                <h2 className="text-center my-3">Select Your Fav Fruit.</h2>
                <div className="tabs-wrapper">
                    <Tabs
                        tabs={['orange', 'mango', 'papaya']}
                        activeTitle={(e) => setActive(e)}
                        activeState={active}
                    />
                    {
                        active === 'orange' ? 'orange' :
                            active === 'mango' ? 'mango' :
                                active === 'papaya' ? 'papaya' : ''
                    }
                </div>
                <div className="gallery-wrapper container">
                    <div className="gallery-item-wrap">
                        {
                            <div className="gallery-item">
                                <div className="row my-5">
                                    {data.data?.length ? data.data?.map((val, key) => {
                                        return (
                                            <div className="col-md-4 col-12" key={key}>
                                                <div className="card my-2" >
                                                    <img src={`https://source.unsplash.com/weekly?${val.name}`} alt="" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{val?.name}</h5>
                                                        <p className="card-text">{val?.description}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    }) : 'Data not found!'}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default ImageGallery
