import React from 'react'

import HomeContent from './HomeContent/HomeContent'
import HomeImage from './HomeImage/HomeImage'

function HomeBody() {
  return (
    <div>
        <div>
            <HomeImage/>
        </div>
        <div>
            <HomeContent/>
        </div>
    </div>
  )
}

export default HomeBody