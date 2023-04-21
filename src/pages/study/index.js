import DialogContext from '@/contexts/DialogContext'
import { useContext } from 'react'
import styles from './Study.module.scss'
import { study } from '@/utils/study'

export default function Study(){

  const { setDialog } = useContext(DialogContext)

  const onClick = (item) => {
    setDialog(item.about)
  }

  return (
    <div className={styles['l-study']}>
      <div className="outlined">
        {study.map(item => (
          <div key={item.title}>
            <h2 onClick={() => onClick(item)}>{item.title}</h2>
            <p className='sub-text-2'>{item.period} ({item.position})</p>
          </div>
        ))}
      </div>
    </div>
  )
}