import React from 'react'
import { useContextGlobal } from './utils/globalcontext';


  const Footer = () => {
  const {state} = useContextGlobal();
  const {theme} = state;
  return (
    <footer className={`${theme ? 'dark' : ''} ${FooterStyles.footer}`} >
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
