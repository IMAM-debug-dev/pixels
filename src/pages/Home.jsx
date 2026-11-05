import { useSelector } from "react-redux"
import ResultGrid from "../components/resultGrid"
import SearchBar from "../components/searchBar"
import Tab from "../components/tab"
import { useState } from "react"

const Home = () => {
    
    const [page, setPage] = useState(1)
const [hasNext, setHasNext] = useState(true)

     const {query} = useSelector((store)=>store.search)
  return (
    <div>
        <div className="py-6 px-10 bg-cyan-900 ">
            <h2 className="font-medium text-2xl">Media-search</h2>
        </div>
        <SearchBar />
      
      
    { query != '' ? <div>
          < Tab />
      <ResultGrid
  page={page}
  setPage={setPage}
  setHasNext={setHasNext}
/>
        </div> : ''}

<div className='flex items-center justify-center gap-4 pb-10'>

  <button
  onClick={() => {
    setPage(1)
  }}
  className='bg-[#218c74] text-white px-6 py-3 rounded-xl'
>
  Home
</button>

  <button
    onClick={() => setPage(prev => Math.max(1, prev - 1))}
    disabled={page === 1}
    className='bg-[#3c6382] text-white px-6 py-3 rounded-xl disabled:opacity-40'
  >
    Previous
  </button>

  <span className='text-white font-semibold'>
    Page {page}
  </span>

  <button
  onClick={() => setPage(prev => prev + 1)}
  disabled={!hasNext}
  className='bg-[#3c6382] text-white px-6 py-3 rounded-xl disabled:opacity-40'
>
  Next
</button>

</div>
    </div>
  )
}

export default Home
