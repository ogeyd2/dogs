import React from 'react'
import styles from './FeedPhotoItem.module.css'
import { UilEye } from '@iconscout/react-unicons'
import Image from '../Helper/Image'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo)
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>
        {photo.acessos} <UilEye />{' '}
      </span>
    </li>
  )
}

export default FeedPhotosItem
