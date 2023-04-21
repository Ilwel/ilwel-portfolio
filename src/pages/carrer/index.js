import { carrer } from '@/utils/carrer'
import styles from './Carrer.module.scss'
import DialogContext from '@/contexts/DialogContext'
import { useContext } from 'react'

export default function Carrer(){

  const { setDialog } = useContext(DialogContext)

  const onClick = (item) => {
    setDialog(item.about)
  }

  return (
    <div className={styles['l-carrer']}>
      <div className="outlined">
        {carrer.map(item => (
          <div key={item.title}>
            <h2 onClick={() => onClick(item)}>{item.title}</h2>
            <p className='sub-text-2'>{item.period} ({item.position})</p>
          </div>
        ))}
      </div>
    </div>
  )
}