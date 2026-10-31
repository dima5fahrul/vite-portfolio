import { Link } from 'react-router-dom'
import socialLinks from '../../socialLinks.json'

const footerSocials = socialLinks.filter((link) => ['LinkedIn', 'GitHub'].includes(link.title))

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t dark:border-gray-600 py-10">
      <div className="max-w-screen-xl px-4 mx-auto flex md:flex-row flex-col gap-6 md:items-center md:justify-between text-gray-500">
        <p>
          © {new Date().getFullYear()} Dimas Fahrul
        </p>
        <nav className="flex gap-x-6">
          <Link to="/portfolio" className="hover:text-neutral-950 dark:hover:text-white">Portfolio</Link>
          <Link to="/contact" className="hover:text-neutral-950 dark:hover:text-white">Contact</Link>
          <Link to="/resume" className="hover:text-neutral-950 dark:hover:text-white">Resume</Link>
        </nav>
        <div className="flex gap-x-4">
          {
            footerSocials.map((link) =>
              <a
                key={link.link}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                aria-label={link.title}
                className="hover:text-neutral-950 dark:hover:text-white"
              >
                <i className={`lab ${link.iconClass} text-2xl`} />
              </a>
            )
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer
