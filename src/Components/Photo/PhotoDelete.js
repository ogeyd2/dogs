import React from 'react'
import styles from './PhotoDelete.module.css'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch()
  async function handleClick() {
    const confirm = window.confirm('DESEJA MESMO DELETAR A POSTAGEM?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          deletando
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  )
}

export default PhotoDelete
