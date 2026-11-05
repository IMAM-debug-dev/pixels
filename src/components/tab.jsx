import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'



const Tab = () => {
    const tabs = ['photos' , 'videos']
    
    const dispatch =  useDispatch()

    const activeTab =   useSelector((state)=>state.search.activeTab)

return (
    <div className="flex items-center justify-center gap-30">
        {tabs.map((elem, idx) => (
            <button
                key={idx}
                className={`${(activeTab==elem?'bg-blue-500':'bg-gray-600')}  cursor-pointer active:scale-95 px-10 py-5 rounded-2xl`}
                onClick={() => dispatch(setActiveTabs(elem))}
            >
                {elem}
            </button>
        ))}
    </div>
)
}

export default Tab;
