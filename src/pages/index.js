import { tecnologies } from '@/utils/tecnologies'
import styles from '../styles/Home.module.scss'
import { useContext } from 'react'
import DialogContext from '@/contexts/DialogContext'

export default function Home() {

  const { setDialog } = useContext(DialogContext)

  const onClick = (item) => {
    setDialog(item.about)
  }

  return (
    <div className={styles['l-home']}>
      <div className={styles['list']}>
        {tecnologies.map(item => (
          <h2 onClick={() => onClick(item)} className='outlined' key={item.name}>{item.name}</h2>
        ))}
      </div>
    </div>
  )
}
