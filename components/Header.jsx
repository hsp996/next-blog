import HeaderNavLinks from '@/data/headerNavLinks'
import Link from '@/components/Link'
const Header = () => {
  return (
    <header className={'flex items-center justify-between py-10'}>
      <div>
        <Link herf={'/'}>logo</Link>
      </div>
      <div className={'flex items-center space-x-4 leading-5 sm:space-x-6'}>
        {HeaderNavLinks.filter((item) => item.href !== '/').map((link) => (
          <Link
            className={'hidden font-medium text-gray-900 sm:block'}
            key={link.title}
            herf={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header
