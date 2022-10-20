import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import WelcomePage from '../components/WelcomePage'
import EarthGalaxy from '../components/EearthGalaxy'
import AboutPage from '../components/AboutPage'
import SpotifySection from '../components/SpotifySection'
import MarsGalaxy from '../components/MarsGalaxy'

//import { loadSpotify } from './api/spotify'

import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export default function Home({ pinnedItems }) {

  return (
    <div>
      <Head>
        <title>xdaTq - Portfolio</title>
        <meta name="description" content="xdaTq - Portfolio" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <div id='home' ></div>

      <Navbar />

      <main className={styles.main}>

        <EarthGalaxy />

        <WelcomePage />

        <div id='about'></div>
        <hr />

        <section className={styles.main}>

          <AboutPage />

          <MarsGalaxy />

          <SpotifySection />

        </section>

      </main >

      <hr id='github' />

      <section className={styles.main}>
        <div className={styles.githubSection}>
          
          <h1> My <span className={styles.namePrimary}>Github</span> Projects </h1>
          <div>
            <p>Here you can find some <span className={styles.namePrimary}>Github</span> Projects i have worked on. <br></br> These are my pinned repository's from <span className={styles.namePrimary}>Github</span> and they may change from time to time. </p>
          </div>

          <div className={styles.gridGithub}>

            {pinnedItems.map(item => {
              return (
                <a key={item.id} href={item.projectsUrl} className={styles.cardGithub}>
                  <h2> {item.name}</h2>
                  <p>{item.description}</p>
                  <div className={styles.githubRow}>
                    <p>⭐{item.stargazers.totalCount}</p>
                    <p>👀 {item.watchers.totalCount}</p>
                  </div>
                  <p>lang: {item.primaryLanguage.name}</p>
                </a>
              )
            })}

          </div>

        </div>

      </section >



      <footer id='links' className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.powered}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>

        <div className={styles.links}>
          <ul>
            <li>
              <a href="">
                Github
              </a>
            </li>
            <li>
              <a href="">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="">
                Gamil
              </a>
            </li>
            <li>
              <a href="">
                Spotify
              </a>
            </li>
            <li>
              <a href="">
                Discord
              </a>
            </li>
          </ul>
        </div>

        <a
          href="https://github.com/xdaTq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by
          <span className={styles.designed}>
            <article>xdaTq - https://github.com/xdaTq</article>
          </span>
        </a>
      </footer>
    </div >
  )
}

export async function getStaticProps() {

  //const spotifyData = await loadSpotify()

  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.github_token}`,
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

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
    `
  })

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node);

  return {
    props: {
      pinnedItems
    }
  }
}
