import { VscGithub } from 'react-icons/vsc'
import ThemesSelector from './ThemesSelector'
import UserDropDown from './UserDropDown'

const NavBar = () => {
  // TODO: store colorScheme in localStorage
  return (
    <header className='fixed top-0 flex h-14 w-full items-center justify-between bg-skin-base px-6 shadow-md'>
      <div className='select-none text-skin-base'>todo-app-name</div>

      <div className='flex h-full items-center children:border-r children:border-black children:px-3 last:children:border-r-0 last:children:pr-0'>
        <ThemesSelector />

        <a href='https://github.com/RickMortynson/near-notes-frontend'>
          <VscGithub className='text-2xl ' />
        </a>

        <UserDropDown />
      </div>
    </header>
  )
}

export default NavBar
