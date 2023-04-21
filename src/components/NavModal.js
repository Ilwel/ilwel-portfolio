import React from 'react';
import styles from './styles/NavModal.module.scss'
import Image from 'next/image';
import diamond from '../../public/diamond.svg'
import linkedin from '../../public/linkedin.svg'
import github from '../../public/github.svg'
import close from '../../public/close.svg'
import { useRouter } from 'next/router';
import Link from 'next/link';

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

      <div>
        <Link target='_blank' href={'https://www.linkedin.com/in/ilwel/'}>
          <Image className={styles['icon']} src={linkedin} alt='linkedin icon'/>
        </Link>
        <Link target='_blank' href={'https://github.com/Ilwel'}>
          <Image className={styles['icon']} src={github} alt='github icon'/>
        </Link>
      </div>
      <ul>
        <li onClick={ () => onClick('projects')} >

            <Image src={diamond} alt='diamond icon'/>

          <p>
            Projetos
          </p>
        </li>
        <li onClick={ () => onClick('carrer')}>

            <Image src={diamond} alt='diamond icon'/>

          <p>
            Carreira
          </p>
        </li>
        <li onClick={ () => onClick('study')}>

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