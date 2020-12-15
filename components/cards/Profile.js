export default function Profile({
  user: {
    login,
    fullName,
    email,
    image,
    isStaff,
    cursus,
    leetLogo,
    fortyTwoLogo,
    isDark,
  },
}) {
  const width = 450
  const height = cursus ? 260 : 200
  let levelProgress

  if (cursus)
    levelProgress = Math.floor((cursus.level - Math.floor(cursus.level)) * 100)

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <div
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              color: isDark ? '#ffffff' : '#111111',
              boxSizing: 'border-box',
              padding: 20,
              width: width,
              height: height,
              borderRadius: 10,
              backgroundColor: isDark ? '#111111' : '#f9f9f9',
              backgroundImage: isDark
                ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(251,840,485)'%3E%3Cstop offset='0' stop-color='%23111111'/%3E%3Cstop offset='1' stop-color='%23080808'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='487' height='405.8' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.03'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E\")"
                : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(276,840,485)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23e3e3e3'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='487' height='405.8' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.06'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E\")",
              backgroundSize: 'cover',
            }}
          >
            <div
              style={{
                marginBottom: 20,
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: 18,
                }}
              >
                <span>{login}</span>'s Profile
              </h2>
            </div>
            <div
              style={{
                marginBottom: 20,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  marginRight: 20,
                  height: 75,
                  width: 75,
                  borderRadius: 10,
                  background: '#f0f0f0',
                  backgroundImage: `url("data:image/jpeg;base64,${image}")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <table
                style={{
                  fontSize: 16,
                }}
              >
                <tr>
                  <td style={{ paddingRight: 10 }}>name:</td>
                  <td style={{ color: isDark ? '#6390e5' : '#426ab8' }}>
                    {fullName}
                  </td>
                </tr>
                {email && (
                  <tr>
                    <td style={{ paddingRight: 10 }}>email:</td>
                    <td style={{ color: isDark ? '#6390e5' : '#426ab8' }}>
                      {email}
                    </td>
                  </tr>
                )}
                {cursus && (
                  <tr>
                    <td style={{ paddingRight: 10 }}>grade:</td>
                    <td style={{ color: isDark ? '#6390e5' : '#426ab8' }}>
                      {cursus.grade}
                    </td>
                  </tr>
                )}
              </table>
            </div>
            {cursus && (
              <div
                style={{
                  marginBottom: 20,
                  height: 40,
                  borderRadius: 10,
                  background: isDark ? '#333333' : '#ffffff',
                  boxShadow: '0 0 20px 5px rgba(0,0,0,.1)',
                }}
              >
                <div
                  style={{
                    height: 40,
                    width: `${levelProgress}%`,
                    borderRadius: 10,
                    background: '#a4de84',
                  }}
                />
                <div
                  style={{
                    margin: 0,
                    marginTop: -40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <p
                    style={{
                      textShadow: isDark && '0 0 10px #000000',
                    }}
                  >
                    level {Math.floor(cursus.level)} - {levelProgress}%
                  </p>
                </div>
              </div>
            )}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  padding: '4px 6px',
                  borderRadius: 5,
                  background: isStaff ? '#ff7979' : '#7e69ff',
                  color: '#ffffff',
                }}
              >
                {isStaff ? 'STAFF' : 'STUDENT'}
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {leetLogo && (
                  <svg
                    style={{
                      marginRight: 20,
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="15"
                    fill={isDark ? '#ffffff' : '#111111'}
                    viewBox="0 0 57 15"
                  >
                    <path d="M2.125 13.247h2.318V1.753H1.74v2.338H0V0h6.568v13.247h2.318V15H2.125v-1.753zM16.034 13.247h6.954V8.182h-6.375V6.429h6.375V1.753h-6.954V0h9.08v15h-9.08v-1.753zM31.681 13.247h6.955V8.182H32.26V6.429h6.375V1.753H31.68V0h9.08v15h-9.08v-1.753zM54.477 1.753H48.68v3.702h-1.738V0h9.465v15h-1.931V1.753z"></path>
                  </svg>
                )}
                {fortyTwoLogo && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="91"
                    height="15"
                    fill={isDark ? '#ffffff' : '#111111'}
                  >
                    <path d="M11.813 0H7.874L0 7.875v3.188h7.875V15h3.938V7.875H3.936L11.814 0zM13.5 3.938L17.438 0H13.5v3.938z" />
                    <path d="M21.375 3.938V0h-3.938v3.938L13.5 7.874v3.938h3.938V7.874l3.937-3.938z" />
                    <path d="M21.375 7.875l-3.938 3.938h3.938V7.874zm8.063 2.588l1.05-8.438h1.687l3.9 5.475.675-5.475h1.95l-1.2 8.438h-1.538l-3.75-5.513-.825 5.513h-1.95zM45 3.75h-2.775v1.612h2.663l-.225 1.65H42l-.225 1.875h2.813v1.65h-5.063l1.05-8.512h4.65L45 3.75zm4.688 0l-.938 6.713H46.8l.938-6.713H45.9l.225-1.725h5.625l-.225 1.725h-1.837zm4.2-1.725L55.013 7.5l2.474-5.475h1.35L60 7.5l2.438-5.475H64.5l-3.75 8.438h-1.688l-1.124-5.138-2.4 5.138h-1.65L51.9 2.024h1.988zm18.712.9a4.05 4.05 0 011.2 3 5.025 5.025 0 01-1.313 3.45A4.651 4.651 0 0169 10.688a4.314 4.314 0 01-3.225-1.238 4.087 4.087 0 01-1.2-2.925 4.65 4.65 0 011.388-3.413 4.839 4.839 0 013.487-1.275 4.425 4.425 0 013.15 1.088zm-5.25 1.5a2.887 2.887 0 00-.75 1.95 2.476 2.476 0 00.675 1.8 2.437 2.437 0 001.837.675 2.513 2.513 0 001.913-.713c.518-.56.8-1.299.787-2.062a2.437 2.437 0 00-.562-1.8 2.513 2.513 0 00-1.875-.525 2.737 2.737 0 00-1.875.675h-.15zm11.062-2.4a2.812 2.812 0 012.25.75 2.4 2.4 0 01.6 1.725 2.7 2.7 0 01-.674 1.875 3.069 3.069 0 01-1.35.675l2.174 3.413h-2.287L77.1 7.125l-.412 3.338h-1.95l1.05-8.438h2.624zm-1.162 3.75h.487c.398.022.792-.083 1.126-.3a1.2 1.2 0 00.45-.975.937.937 0 00-.563-.75 1.875 1.875 0 00-1.088-.225H77.4l-.15 2.25zm7.763-.225l3.075-3.525h2.325l-3.75 4.088L90 10.463h-2.475l-2.55-3.75-.487 3.75H82.5l.975-8.438h1.95l-.412 3.525z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>
  )
}
