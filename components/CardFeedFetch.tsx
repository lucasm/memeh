import { useEffect, useState } from 'react'
import Loader from './Loader/Loader'

type Props = {
  readonly country: string
  readonly category: string
  readonly name: string
}

export default function CardFeedFetch(props: Readonly<Props>) {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('/api/feed?country=' + props.country + '&category=' + props.category + '&name=' + props.name)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        console.log('GET', props.name, responseJson)
        setData(responseJson)
        setLoading(false)
      })
      .catch((error) => {
        console.log('GET ERROR', error)
        setLoading(false)
        setData([
          {
            title: 'Ooopss!',
            link: 'mailto:feedback@memeh.app?subject=Feedback&body=Error%20in%20frontend%20of%20' + props.name,
          },
        ])
      })
  }, [props.category, props.country, props.name])

  return (
    <ul>
      {data.map((item) => (
        <li key={item.title}>
          <a href={item.link} target="_blank" rel="external noopener noreferrer">
            {item.title}
          </a>
        </li>
      ))}
      {loading && <Loader />}
    </ul>
  )
}
