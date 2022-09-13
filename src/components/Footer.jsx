import React from 'react'

const Footer = () => {
  return (
    <footer className="py-4 bg-dark">
      <div className="container px-5">

        <div className='singlecol social-media-icons-white d-flex justify-content-evenly pt-2 pb-4'>
          <a href='https://facebook.com'>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href='https://instagram.com'>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href='https://twitter.com'>
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href='https://tiktok.com'>
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href='https://youtube.com'>
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

        <p className="m-0 text-center text-white">
          Copyright &copy; Summersville Doggy Daycare 2022 - All Rights Reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer