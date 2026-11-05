import React from 'react'

const ResultCard = ({ item }) => {
  

  const handleDownload = async () => {
    try {
      const response = await fetch(item.src)
      const blob = await response.blob()

      const url = window.URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.download = `${item.title || 'download'}.${item.type === 'photo' ? 'jpg' : 'mp4'}`

      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

    } catch (error) {
      console.log('Download failed:', error)
    }
  }
  return (
    <div className="w-96 h-96 rounded-2xl overflow-hidden relative">

     <div className="absolute inset-0">
        {item.type === 'photo' && (
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      )}

      {item.type === 'video' && (
        <video
          autoPlay
          loop
          muted
          src={item.src}
          className="w-full h-full object-cover"
        />
      )}
      </div  >

     <div className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-between gap-3 text-white bg-gradient-to-t from-black/80 to-transparent">

    <h1 className="text-sm font-semibold flex-1 line-clamp-2">
        {item.title}
    </h1>

    <button onClick={handleDownload} className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 active:scale-95 shadow-lg">
        Save
    </button>

</div>
    </div>
  )
}


export default ResultCard
