import Image from 'next/image'

const Header = () => {
  return (
    <header className='masthead bg-white text-dark text-center'>
      <div className='container d-flex align-items-center flex-column'>
        {/* Masthead Avatar Image*/}
        <Image
          className='masthead-avatar mb-5'
          src='/redditavatar.png'
          alt='...'
          width={200}
          height={200}
        />
        {/* Masthead Heading*/}
        <h1 className='masthead-heading text-uppercase mb-0'>Patrick Mwangi</h1>
        {/* Icon Divider*/}
        <div className='divider-custom divider-light'>
          <div className='divider-custom-line' />
          <div className='divider-custom-icon'>
            <i className='fas fa-star' />
          </div>
          <div className='divider-custom-line' />
        </div>
        {/* Masthead Subheading*/}
        <p className='masthead-subheading font-weight-light mb-0'>
          I write Code on{' '}
          <a href='https://github.com/achingachris/' >
            GitHub
          </a>{' '}
          and
          <a href='https://chrisdevcode.hashnode.dev/' >
            {' '}
            articles
          </a>
        </p>
      </div>
    </header>
  )
}

export default Header
