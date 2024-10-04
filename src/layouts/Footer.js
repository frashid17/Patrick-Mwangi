const Footer = () => {
  // get current year
  const year = new Date().getFullYear()
  return (
    <footer className='bg-white py-4 mt-auto'>
      <div className='container px-5'>
        <div className='row align-items-center justify-content-between flex-column flex-sm-row'>
          <div className='col-auto'>
            <div className='small m-0'>Copyright © Patrick Mwangi {year}</div>
          </div>
          <div className='col-auto'>
            <a
              className='small'
              href='https://www.linkedin.com/in/patrick-wanjiku-979381150/'
            >
              LinkedIn
            </a>
            <span className='mx-1'>·</span>
            <a className='small' href='https://x.com/_fahimmm'>
              Twitter
            </a>
            <span className='mx-1'>·</span>
            <a
              className='small'
              href='https://stackoverflow.com/users/18755448/fahim-rashid'
            >
              StackOver Flow
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
