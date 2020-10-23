import * as React from 'react'
import { CSSProperties } from 'react'
import { QueryCache, ReactQueryCacheProvider, useQuery } from 'react-query'
import { PlaceholderTrack } from './placeholder-track'
import { SpotifyTrack } from './spotify-track'

const queryCache = new QueryCache()

interface Props {
  userId: string
  max?: number
  feedStyle?: CSSProperties
  itemStyle?: CSSProperties
}

interface RecentActivity {
  items: RecentActivityItem[]
}

export interface RecentActivityItem {
  context: any
  // eslint-disable-next-line camelcase
  played_at: string
  track: {
    id: string
    name: string
    // eslint-disable-next-line camelcase
    external_urls: { spotify: string }
    album: {
      images: {
        height: number
        width: number
        url: string
      }[]
    }
  }
}

const fetchRecentlyPlayed = (userId: string): Promise<RecentActivity> => {
  return fetch(
    `https://spotify.maferland.com/.netlify/functions/recently-played/${userId}`
  ).then(
    (res: any) => res.json(),
    (error) => error
  )
}

export const RecentlyPlayedFeed = ({
  userId = '',
  max = 10,
  feedStyle = {},
  itemStyle = {}
}: Props) => {
  const { isLoading, error, data } = useQuery<RecentActivity>(
    `${userId}-recently-layed`,
    () => fetchRecentlyPlayed(userId)
  )

  if (error) {
    return <p>oops</p>
  }

  if (isLoading || !data) {
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
