import React, {useEffect} from 'react'

function LandingPage() {

  const logoutHandler = () => {
    window.location.href='/'
  }

  return (
    <div>
      <button onClick={logoutHandler}>
          ๋ก๊ทธ์์
      </button>
    </div>
  )
}

export default LandingPage