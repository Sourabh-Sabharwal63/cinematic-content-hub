import { useState, useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTrailerKey } from "../utils/Redux/trailerSlice";
const useVideo = () => {
  const video_id=useSelector(store=>store?.trailerSlice?.id);
  
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const getVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${video_id}/videos?language=en-US`;
    const response = await fetch(url, options);
    setData(await response.json()); 
  };
  useEffect(() => { 
      getVideo();
  }, [video_id]);
 
  if (data) { 
    console.log("data",data);
    const Filter_Trailer = data.results.filter((video) => {
       return video.type === "Trailer";
    });
    const Trailer_key = Filter_Trailer.length
      ? Filter_Trailer[0].key
      : data.results[0].key;
      dispatch(addTrailerKey(Trailer_key));
  }
};

export default useVideo;
