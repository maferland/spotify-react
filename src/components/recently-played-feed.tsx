import React from 'react'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { PlaceholderTrack } from './placeholder-track'
import { SpotifyTrack } from './spotify-track'
import { useRecentlyPlayed } from './use-recently-played'

const queryCache = new QueryCache()

interface Props {
  userId: string
  max?: number
  feedStyle?: React.CSSProperties
  itemStyle?: React.CSSProperties
}

export const RecentlyPlayedFeed = ({
  userId = '',
  max = 10,
  feedStyle = {},
  itemStyle = {}
}: Props) => {
  const { isLoading, error, data } = useRecentlyPlayed(userId)

  if (error) {
    console.log(error)
  }

  if (error || isLoading || !data) {
    return (
      <div style={feedStyle}>
        {Array(max)
          .fill(undefined)
          .map((_, i) => (
            <PlaceholderTrack key={i} style={itemStyle} />
          ))}
      </div>
    )
  }

  let { items } = data

  if (max) {
    items = items.slice(0, max)
  }

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div style={feedStyle}>
        {items &&
          items.map((item) => (
            <SpotifyTrack style={itemStyle} item={item} key={item.played_at} />
          ))}
      </div>
    </ReactQueryCacheProvider>
  )
}
