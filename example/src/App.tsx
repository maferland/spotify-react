import React from 'react'
import { RecentlyPlayedFeed, useRecentlyPlayed } from '@maferland/spotify-react'

const App = () => {
  const userId = '12166023407'
  const { data } = useRecentlyPlayed(userId)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'
      }}
    >
      <RecentlyPlayedFeed
        userId={userId}
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
      <div style={{ width: '400px', height: '500px', overflow: 'auto' }}>
        {JSON.stringify(data)}
      </div>
    </div>
  )
}

export default App
