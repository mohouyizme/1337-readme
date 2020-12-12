import Logo from '../components/Logo'
import ProfileCardGenerator from '../components/ProfileCardGenerator'

export default function HomePage() {
  return (
    <div className="max-w-screen-md mx-auto">
      <div className="flex flex-col items-center my-24">
        <Logo />
      </div>
      <ProfileCardGenerator />
    </div>
  )
}
