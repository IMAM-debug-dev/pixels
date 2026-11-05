import axios from "axios";

const UNFLASH_KEY = import.meta.env.VITE_UNFLASH_KEY;
const PIXEL_KEY = import.meta.env.VITE_PIXEL_KEY;

export async function fatchphoto(query, page = 1, per_page = 20) {

  const res = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        page,
        per_page,
      },
      headers: {
        Authorization: `Client-ID ${UNFLASH_KEY}`,
      },
    }
  );

  console.log(res.data);
  return res.data;
}


export async function fatchVideo(query, page = 1 ) {

  const res = await axios.get(
    "https://api.pexels.com/videos/search",
    {
      params: {
        query,
        page
      },
      headers: {
        Authorization: PIXEL_KEY,
      },
    }
  )

  console.log(res.data)
  return res.data
}