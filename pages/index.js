import Head from 'next/head'

import Logo from '../components/Logo'
import ProfileCardGenerator from '../components/ProfileCardGenerator'

export default function HomePage() {
  return (
    <>
      <Head>
        <script async defer src="https://buttons.github.io/buttons.js" />
      </Head>
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col items-center my-20">
          <Logo />
          <p className="my-5">
            Share your progress, skills, stats with the world via GitHub
            README.md
          </p>
          <a
            className="github-button"
            href="https://github.com/mohouyizme/1337-readme"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-show-count="true"
            aria-label="Star mohouyizme/1337-readme on GitHub"
          >
            Star
          </a>
        </div>
        <ProfileCardGenerator />
      </div>
    </>
  )
}
