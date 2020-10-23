import React, { CSSProperties } from 'react'
import { trackStyle } from './spotify-track'

interface Props {
  style?: CSSProperties
}

export const PlaceholderTrack = ({ style }: Props) => {
  return (
    <span style={{ width: '100%', ...trackStyle, ...style }}>
      <span
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '5px',
          marginRight: '1em',
          backgroundColor: 'gainsboro',
          boxShadow: '1px 1px 3px #999'
        }}
      />
      <p
        style={{
          width: '50%',
          backgroundColor: 'gainsboro',
          boxShadow: '1px 1px 3px #999'
        }}
      >
        &nbsp;
      </p>
    </span>
  )
}
