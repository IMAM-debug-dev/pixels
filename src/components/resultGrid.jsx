import { useDispatch, useSelector } from 'react-redux'
import { fatchphoto , fatchVideo } from '../api/mediaapi'
import {  setQuery ,setLoading, setResults,setError } from '../redux/features/searchSlice'
import { useEffect, useState } from 'react'
import ResultCard from './resultCard'

const ResultGrid = () => {
   
    const {query ,loading, results,activeTab,error} = useSelector((store)=>store.search)
    
    const [page, setPage] = useState(1)
const [hasNext, setHasNext] = useState(true)
     
    const dispatch = useDispatch()
    useEffect(function(){
      
      if(!query) return 
      const getdata = async () => {

       
         try {
            dispatch(setLoading(true))

                let data
       
     if (activeTab === 'photos') {
  let respons = await fatchphoto(query, page, 20)
    setHasNext(page < respons.total_pages)
  data = respons.results.map((item) => ({
    id: item.id,
    type: 'photo',
    title: item.alt_description,
    thumbnail: item.urls.small,
    src: item.urls.full,
     url: item.links.html
  }))
}

if (activeTab === 'videos') {
  let respons = await fatchVideo(query, page)
  setHasNext(page * 20 < respons.total_results)
 

  data = respons.videos.map((item) => ({
    id: item.id,
    type: 'video',
    title: item.user.name || 'video',
    thumbnail: item.image,
    src: item.video_files?.[0]?.link
  }))
}


           console.log(data)

        dispatch(setResults(data))
         } catch (error) {
          dispatch(setError(error))
         }

       
      }
      getdata()
    }, [query, activeTab, page])

    if(error) return <h1>error</h1>
    if(loading) return <h1>Loading</h1>

  return (
    <div className='flex flex-wrap  gap-5 overflow-auto px-10 py-6 m-10 '>
      {results.map((item ,idx )=>{
        return <div key={idx}>
          <a href={item.url}><ResultCard item={item} /></a>
        </div>
      })}
    </div>
  )
}

export default ResultGrid
