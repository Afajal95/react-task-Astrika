import React, { useState, useEffect } from 'react'

export default function FoodItemList({ data, category, inStockFilter }) {
    const [displayData, setDisplayData] = useState([{}])

    useEffect(() => {
        // console.log(`category - ${category} inStockFilter - ${inStockFilter}`)
        if (category == '') {
            if (inStockFilter) {
                let filteredData = data.map(d => ({ category: d.category, items: d.items?.filter(x => x.inStock == inStockFilter) }))
                setDisplayData(filteredData)
            }else{
                setDisplayData(data)
            }
        } else {
            let filteredData = data
                .filter(d => d.category == category)
            if (inStockFilter) {
                let filteredDataByItems = filteredData
                    .map(d => ({ category: d.category, items: d.items.filter(x => x.inStock == inStockFilter) }))
                setDisplayData(filteredDataByItems)
            } else {
                setDisplayData(filteredData)
            }
        }
    }, [data, category, inStockFilter])

    return (
        <>
            {
                displayData.map(d => (
                   <>
                    <h2>{d.category}</h2>
                    <div>
                        {
                            d.items?.map(t => (
                                <p>{t.name} {t.price}</p>
                            )
                            )
                        }
                    </div>
                   </>


                ))
            }
        </>
    )
}
