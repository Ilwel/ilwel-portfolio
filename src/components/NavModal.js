import React from 'react';
import styles from './styles/NavModal.module.scss'
import Image from 'next/image';
import diamond from '../../public/diamond.svg'
import close from '../../public/close.svg'
import { useRouter } from 'next/router';

const NavModal = ({open, setOpen}) => {

  const router = useRouter()

  const onClick = (to) => {
    setOpen(false)
    router.push('/' + to)
  }

  return (
    open &&
    <div className={styles['m-nav']}>
      <Image onClick={() => setOpen(false)} className={styles['close']} src={close} alt='close icon'/>
      <ul>
        <li onClick={ () => onClick('projects')} >

            <Image src={diamond} alt='diamond icon'/>

          <p>
            Projetos
          </p>
        </li>
        <li>

            <Image src={diamond} alt='diamond icon'/>

          <p>
            Carreira
          </p>
        </li>
        <li>

            <Image src={diamond} alt='diamond icon'/>

          <p>
            Formação
          </p>
        </li>
      </ul>
    </div>
  );
};

export default NavModal;