import Script from 'next/script'
import React, {useEffect} from 'react'


const Onfm = () => {
    useEffect(() => {
        if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
          window.location.href =
            "https://play.google.com/store/apps/details?id=radioon.virtues.ag.appradio.pro";
        }else if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
          window.location.href =
            "https://apps.apple.com/br/app/r%C3%A1dio-on/id1608554113";
        } else{
          window.location.href =
            "https://play.google.com/store/apps/details?id=radioon.virtues.ag.appradio.pro";
        }
      }, []);

  return (
    <div>
        <h1>teste</h1>
    </div>

  )
}

export default Onfm
