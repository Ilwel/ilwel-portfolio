import { projects } from '@/utils/projects'
import styles from './Projects.module.scss'
import { useContext, useState } from 'react'
import DialogContext from '@/contexts/DialogContext'

export default function Projects() {

  const { setDialog } = useContext(DialogContext)

  const [title, setTitle] = useState('')
  const [frontend, setFrontend] = useState('')
  const [backend, setBackend] = useState('')

  const onClick = (item) => {
    setFrontend(item.frontend)
    setBackend(item.backend)
    setTitle(item.name)
    setDialog(item.about)
  }

  return (
    <div className={styles['l-projects']}>
      <div className={styles['list']}>
        {projects.map(item => (
          <h2 onClick={() => onClick(item)} key={item.name}>{item.name}</h2>
        ))}
      </div>
      {title && (        
      <div className={styles['details'] + " outlined"}>
        <h2>{title}</h2>
        <div className={styles['buttons']}>
          {frontend ? (
            <a className='button' target='_blank' href={frontend}>Repo Front</a>
          ) : ''}
          {backend ? (
            <a className='button' target='_blank' href={backend}>Repo Back</a>
          ) : ''}
          {!(backend && frontend) && (
            <p>Infelizmente não tenho um repositório desse projeto :(</p>
          )}
        </div>
      </div>
      )}
    </div>
  )
}
