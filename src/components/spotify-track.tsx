import React from 'react'
// eslint-disable-next-line no-unused-vars
import { RecentActivityItem } from './use-recently-played'

interface Props {
  item: RecentActivityItem
  style?: React.CSSProperties
}

export const trackStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
}

export const SpotifyTrack = (props: Props) => {
  const {
    item: {
      track: {
        name,
        album: { images } = { images: [] },
        external_urls: { spotify: url }
      }
    },
    style = {}
  } = props

  const medium = images.length > 0 ? images[0] : undefined
  return (
    <a href={url} style={{ ...trackStyle, ...style }}>
      <img
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '5px',
          marginRight: '1em'
        }}
        src={medium?.url}
      />
      {name}
    </a>
  )
}
