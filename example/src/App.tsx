import React from 'react'
import { RecentlyPlayedFeed } from '@maferland/spotify-react'

const App = () => {
  return (
    <RecentlyPlayedFeed
      userId='12166023407'
      feedStyle={{
        border: '1px solid red',
        padding: '1em',
        margin: '1em',
        boxShadow: '3px 3px 3px grey',
        width: '400px'
      }}
      itemStyle={{
        width: '100%',
        padding: '0.25em 0',
        margin: '0.25em 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        border: '1px dashed blue'
      }}
    />
  )
}

export default App
