import { useQuery } from 'react-query'

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

const fetchRecentlyPlayed = (
  userId: string | number
): Promise<RecentActivity> => {
  return fetch(
    `https://spotify.maferland.com/.netlify/functions/recently-played/${userId}`
  ).then(
    (res: any) => res.json(),
    (error) => error
  )
}

export const useRecentlyPlayed = (userId: string | number) => {
  return useQuery<RecentActivity>(`${userId}-recently-layed`, () =>
    fetchRecentlyPlayed(userId)
  )
}
