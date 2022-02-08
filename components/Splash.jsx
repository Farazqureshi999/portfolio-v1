import {React,useState,useEffect} from 'react';

function Splash({children}) {
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },3000)
    },[])
  return !loading ? children : <div>
      {/* Loader */}
      <div className="h-screen w-full flex items-center justify-center">
      <span class="loader"></span>
      </div>
  </div>;
}

export default Splash;
