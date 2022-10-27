import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { NextSeo } from 'next-seo'

import Navbar from '../components/Navbar'
import WelcomePage from '../components/WelcomePage'
import EarthGalaxy from '../components/EearthGalaxy'

const AboutPage = dynamic(() => import('../components/AboutPage'), {
  suspense: true,
})
const SpotifySection = dynamic(() => import('../components/SpotifySection'), {
  suspense: true,
})
const MarsGalaxy = dynamic(() => import('../components/MarsGalaxy'), {
  suspense: true,
})

import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
//import { loadSpotify } from './api/spotify'

export default function Home({ pinnedItems }) {
  return (
    <div>
      <NextSeo title='Home' />
      <Head>
        <title>xdaTq - Portfolio</title>
        <meta name='description' content='xdaTq - Portfolio' />
        <meta name='viewport' content='device=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.ico' />
      </Head>

      <div id='home'></div>

      <Navbar />

      <main className={styles.main}>
        <EarthGalaxy />

        <WelcomePage />

        <hr />
        <div id='about'></div>

        <section className={styles.main}>
          <Suspense>
            <AboutPage />

            <MarsGalaxy />

            <SpotifySection />
          </Suspense>
        </section>
      </main>

      <hr id='github' />

      <section className={styles.main}>
        <div className={styles.githubSection}>
          <h1>
            {' '}
            My <span className={styles.namePrimary}>Github</span> Projects{' '}
          </h1>
          <div>
            <p>
              Here you can find some <span className={styles.namePrimary}>Github</span> Projects i
              have worked on. <br></br> These are my pinned repository's from{' '}
              <span className={styles.namePrimary}>Github</span> and they may change from time to
              time.{' '}
            </p>
          </div>

          <div className={styles.gridGithub}>
            {pinnedItems.map(item => {
              return (
                <a key={item.id} href={item.projectsUrl} className={styles.cardGithub}>
                  <h2> {item.name}</h2>
                  <p>{item.description}</p>
                  <div className={styles.githubRow}>
                    <p>⭐ {item.stargazers.totalCount}</p>
                    <p>👀 {item.watchers.totalCount}</p>
                  </div>
                  <p>
                    lang: <span className={styles.namePrimary}>{item.primaryLanguage.name}</span>
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <footer id='links' className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by
          <span className={styles.powered}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
        <a href='https://github.com/xdaTq' target='_blank' rel='noopener noreferrer'>
          Designed by
          <span className={styles.designed}>
            <article> xdaTq - https://github.com/xdaTq</article>
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  //const spotifyData = await loadSpotify()

  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      {
        viewer {
          login
        }
        user(login: "xdaTq") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  stargazers {
                    totalCount
                  }
                  description
                  projectsUrl
                  primaryLanguage {
                    name
                  }
                  url
                  watchers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  const { user } = data
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node)

  return {
    props: {
      pinnedItems,
    },
  }
}
