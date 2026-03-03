import React from 'react'

const Background = () => {
  return (
    <div className="h-screen w-screen absolute -z-50">
            <div className="-z-10 absolute flex bg-cover bg-center h-full w-full" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg')" }}>
                <div className="-z-10 absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" ></div>
            </div>
        </div>
  )
}

export default Background