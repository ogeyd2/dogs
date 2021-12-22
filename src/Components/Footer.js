import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Mamacos } from '../Assets/dogs-footer.svg'
const Footer = () => {
  return (
    <section className={styles.footer}>
      <Mamacos />
      <p>Mamacos. Todos os direitos reservados</p>
    </section>
  )
}

export default Footer
