import React, {useEffect} from 'react'

function LandingPage() {

  const logoutHandler = () => {
    window.location.href='/'
  }

  return (
    <div>
      <button onClick={logoutHandler}>
          로그아웃
      </button>
    </div>
  )
}

export default LandingPage