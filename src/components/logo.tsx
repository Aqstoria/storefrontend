import Link from 'next/link'
import type { CommonComponentProps } from '@/types/common-component-props'

interface LogoProps extends CommonComponentProps {
  href?: string
  icon?: false | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

const Logo = ({ href, icon, children, className, ...props }: React.PropsWithChildren<LogoProps>) => {
  const iconClass = icon ? `d-none d-${icon}-flex` : 'd-flex'

  return (
    <Link href={href ? href : '/'} className={`navbar-brand${className ? ` ${className}` : ''}`} {...props}>
      {icon !== false && (
        <span className={`${iconClass} flex-shrink-0 text-primary me-2`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path
              d="M36 18.01c0 8.097-5.355 14.949-12.705 17.2a18.12 18.12 0 0 1-5.315.79C9.622 36 2.608 30.313.573 22.611.257 21.407.059 20.162 0 18.879v-1.758c.02-.395.059-.79.099-1.185.099-.908.277-1.817.514-2.686C2.687 5.628 9.682 0 18 0c5.572 0 10.551 2.528 13.871 6.517 1.502 1.797 2.648 3.91 3.359 6.201.494 1.659.771 3.436.771 5.292z"
              fill="currentColor"
            />
            <g fill="#fff">
              <path d="M17.466 21.624c-.514 0-.988-.316-1.146-.829-.198-.632.138-1.303.771-1.501l7.666-2.469-1.205-8.254-13.317 4.621a1.19 1.19 0 0 1-1.521-.75 1.19 1.19 0 0 1 .751-1.521l13.89-4.818c.553-.197 1.166-.138 1.64.158a1.82 1.82 0 0 1 .85 1.284l1.344 9.183c.138.987-.494 1.994-1.482 2.33l-7.864 2.528-.375.04zm7.31.138c-.178-.632-.85-1.007-1.482-.81l-5.177 1.58c-2.331.79-3.28.02-3.418-.099l-6.56-8.412a4.25 4.25 0 0 0-4.406-1.758l-3.122.987c-.237.889-.415 1.777-.514 2.686l4.228-1.363a1.84 1.84 0 0 1 1.857.81l6.659 8.551c.751.948 2.015 1.323 3.359 1.323.909 0 1.857-.178 2.687-.474l5.078-1.54c.632-.178 1.008-.829.81-1.481z" />
              <use href="#czlogo" />
              <use href="#czlogo" x="8.516" y="-2.172" />
            </g>
            <defs>
              <path
                id="czlogo"
                d="M18.689 28.654a1.94 1.94 0 0 1-1.936 1.935 1.94 1.94 0 0 1-1.936-1.935 1.94 1.94 0 0 1 1.936-1.935 1.94 1.94 0 0 1 1.936 1.935z"
              />
            </defs>
          </svg>
        </span>
      )}
      {children}
    </Link>
  )
}

export default Logo
