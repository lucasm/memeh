'use client'

import styles from './CardFeed.module.css'
import CardFeedFetch from '../CardFeedFetch'
import { useEffect, useState } from 'react'

type Props = {
  readonly country: string
  readonly category: string
}

interface IFeedFile {
  name: string
  url: string
}

// normalize name as ID (to match with path of SVG filenames)
function normalizeId(string: string): string {
  return string
    .toLowerCase()
    .replace('í', 'i')
    .replace('ã', 'a')
    .replace('á', 'a')
    .replace('ê', 'e')
    .replace('ú', 'u')
    .replace('ó', 'o')
    .replaceAll(' ', '-')
}

export default function Card(props: Readonly<Props>) {
  // load file with rss feeds before generate cards
  const feed = require('../../locales/feeds/' + props.country + '.json')

  // random
  const [feeds, setFeeds] = useState<IFeedFile[]>([])

//   console.log('LAYOUT CARD MOUNTED', props.category)

  useEffect(() => {
    // random disabled
    // .sort(() => Math.random() - 0.5)
    setFeeds(feed[props.category])
  }, [feed, feeds, props.category])

  return (
    <div className={styles.feed}>
      {feeds.map((item, index) => (
        <div
          key={props.country + item.name}
          id={normalizeId(item.name)}

        >
          <figure
            style={{
              backgroundImage: 'url(/images/logos/' + normalizeId(item.name) + '.svg)',
            }}>
            <h3>{item.name}</h3>
          </figure>

          <CardFeedFetch country={props.country} category={props.category} name={item.name} />
        </div>
      ))}
    </div>
  )
}
