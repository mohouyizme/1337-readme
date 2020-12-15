import queryString from 'query-string'
import { Formik } from 'formik'
import { useState } from 'react'

export default function ProfileCardGenerator() {
  const [cardImage, setCardImage] = useState(
    '/api/profile?login=ozaazaa&cursus=42&email=hide'
  )

  function generateProfileCard({
    login,
    cursus,
    showEmail,
    darkTheme,
    hideLeetLogo,
    hideFortyTwoNetworkLogo,
  }) {
    const query = { login }
    if (cursus !== 'hide') query.cursus = cursus
    if (!showEmail) query.email = 'hide'
    if (darkTheme) query.dark = 'true'
    if (hideLeetLogo) query.leet_logo = 'hide'
    if (hideFortyTwoNetworkLogo) query.forty_two_network_logo = 'hide'
    const queryStringified = queryString.stringify(query)
    setCardImage(`/api/profile?${queryStringified}`)
  }

  return (
    <div>
      <h3 className="mb-5 text-xl font-bold">Profile Card Generator</h3>
      <div className="flex">
        <div className="mr-5">
          <img src={cardImage} width={450} />
          <p className="mt-5">
            Add the code bellow to your{' '}
            <code className="px-2 py-1 text-sm rounded bg-gray-50">
              README.md
            </code>{' '}
            file:
          </p>
          <div
            className="p-3 mt-2 overflow-x-auto font-mono text-xs rounded-lg select-all bg-gray-50"
            style={{ maxWidth: 450 }}
          >
            [![42 Profile Card](https://1337-readme.vercel.app{cardImage}
            )](https://github.com/mohouyizme/1337-readme)
          </div>
        </div>
        <Formik
          initialValues={{
            login: 'ozaazaa',
            cursus: '42',
            showEmail: false,
            darkTheme: false,
            hideLeetLogo: false,
            hideFortyTwoNetworkLogo: false,
          }}
          onSubmit={(values) => {
            setCardImage(null)
            generateProfileCard(values)
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  className="inline-block mb-2 font-bold cursor-pointer"
                  htmlFor="login"
                >
                  login
                </label>
                <input
                  className="w-full px-6 py-3 transition rounded bg-gray-50 focus:outline-none focus:ring focus:bg-white"
                  type="text"
                  name="login"
                  id="login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                />
              </div>
              <div className="mb-5">
                <label
                  className="inline-block mb-2 font-bold cursor-pointer"
                  htmlFor="cursus"
                >
                  cursus
                </label>
                <div className="relative">
                  <select
                    className="w-full px-6 py-3 transition rounded appearance-none pr-9 bg-gray-50 focus:outline-none focus:bg-white focus:ring"
                    name="cursus"
                    id="cursus"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cursus}
                  >
                    <option value="hide">hide</option>
                    <option value="42">42</option>
                    <option value="42cursus">42cursus</option>
                    <option value="piscine-c-decloisonnee">
                      Piscine C décloisonnée
                    </option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-hidden="true"
                    className="absolute w-6 h-6 pointer-events-none right-2 top-3"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="mb-2">
                <label className="inline-flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-5 h-5 cursor-pointer"
                    name="showEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.showEmail}
                  />
                  <span className="ml-3 text-gray-700">Show email</span>
                </label>
              </div>
              <div className="mb-2">
                <label className="inline-flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-5 h-5 cursor-pointer"
                    name="darkTheme"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.darkTheme}
                  />
                  <span className="ml-3 text-gray-700">Dark theme</span>
                </label>
              </div>
              <div className="mb-2">
                <label className="inline-flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-5 h-5 cursor-pointer"
                    name="hideLeetLogo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.hideLeetLogo}
                  />
                  <span className="ml-3 text-gray-700">Hide 1337 logo</span>
                </label>
              </div>
              <div className="mb-2">
                <label className="inline-flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-5 h-5 cursor-pointer"
                    name="hideFortyTwoNetworkLogo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.hideFortyTwoNetworkLogo}
                  />
                  <span className="ml-3 text-gray-700">
                    Hide 42 Network logo
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full p-3 mt-2 text-sm font-bold text-white bg-black rounded focus:outline-none focus:ring"
              >
                Generate
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
