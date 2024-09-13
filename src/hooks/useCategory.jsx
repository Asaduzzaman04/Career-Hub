import { useEffect, useState } from "react";


const useCategory = () => {
    const url = 'http://localhost:5173/public/category.json'
    const [category, setCategory] = useState([])
    const [error, setError] = useState('')

    useEffect(()=>{
            const categoryData = async () => {
                try{
                        const response = await fetch(url)
                        if(response.ok === false){
                            throw new Error('opps! false response')
                        }
                        const data = await response.json()
                        setCategory(data)
                }catch (err){
                    setError(err)
                }
                
            }   
            categoryData()
    }, [])
 return [category, error]
};

export default useCategory;