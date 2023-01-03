import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export function editedAt(date: Date) {
  const res = dayjs(date).toString().split(' ').slice(1, 3).join(' ')
  return res
}

export function dateAgo(date: Date) {
  const dateAgo = dayjs(date).fromNow()
  return dateAgo
}
