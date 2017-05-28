import Link from 'next/link'
import HeaderExampleUsersIcon from '../components/HeaderExampleUsersIcon'


export default ({ pathname }) => (
  <header>
      <HeaderExampleUsersIcon/>
    <Link prefetch href='/'>
      <a className={pathname === '/' && 'is-active'}>Home</a>
    </Link>

    <Link prefetch href='/signin'>
      <a className={pathname === '/signin' && 'is-active'}>signin</a>
    </Link>
      <Link prefetch href='/dashboard'>
          <a className={pathname === '/dashboard' && 'is-active'}>dashboard</a>
      </Link>
      <Link prefetch href='/controlpanel'>
          <a className={pathname === '/controlpanel' && 'is-active'}>controlpanel</a>
      </Link>

    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
)
