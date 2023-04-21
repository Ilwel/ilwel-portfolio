import React, { useEffect, useRef, useState } from 'react';
import styles from './styles/Layout.module.scss'
import Head from 'next/head';
import Image from 'next/image';
import ilwel from '../../public/ilwel.png'
import diamond from '../../public/diamond.svg'
import burguer from '../../public/burguer.svg'
import linkedin from '../../public/linkedin.svg'
import github from '../../public/github.svg'
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect/dist/core';
import DialogContext from '@/contexts/DialogContext';
import NavModal from './NavModal';
import Link from 'next/link';
// import fallen from '../../public/audio/fallen.mp3'

const Layout = ({children}) => {

  const router = useRouter()

  const [dialog, setDialog] = useState('')

  const [open, setOpen] = useState(false)

  useEffect(() => {

    if(router.pathname === '/') setDialog('Olá, essa página foi feita para divulgar minha carreira como programador')
    if(router.pathname === '/projects') setDialog('Alguns dos projetos que estou e estive envolvido. Clique em um deles e saiba mais a respeito.')
    if(router.pathname === '/carrer') setDialog('Já tive o privilégio de trabalhar em algumas empresas no ramo da tecnologia. Fique a vontade para clicar no título e saber mais a respeito')
    if(router.pathname === '/study') setDialog('Aqui alguns lugares onde eu estudei. Se clicar no título eu te contarei um pouquinho mais sobre')

  }, [router.pathname])

  useEffect(() => {


    var tp = document.getElementById('typewriter');

    var typewriter = new Typewriter(tp, {
      delay: 70,
      deleteSpeed: 2,
    });

    if(router.pathname === '/' && dialog && dialog === 'Olá, essa página foi feita para divulgar minha carreira como programador'){
      const phrase2 = 'Eu <strong>sempre</strong> quis um lugar na internet para chamar de meu'
      const phrase3 = 'Eu tenho um <strong>imenso</strong> amor por tecnologia e tudo o que ela me permite criar'
      const phrase4 = 'Quero estar <strong>sempre</strong> criando coisas novas e ir preenchendo esse cantinho com essas experiências <3.'
      typewriter
      .typeString(dialog)
      .pauseFor(600)
      .deleteChars(dialog.length)
      .typeString(phrase2)
      .pauseFor(600)
      .deleteChars(phrase2.length)
      .typeString(phrase3)
      .pauseFor(600)
      .deleteChars(phrase3.length)
      .typeString(phrase4)
      .pauseFor(600)
      .typeString(' Sinta-se em casa ^^')
      .start();
    }
    else{
      typewriter
        .typeString(dialog)
        .pauseFor(300)
        .start();
    }
    
  
  }, [dialog, router.pathname])

  const onClick = (to) => {
    router.push('/' + to)
  }

  return (
    <>
      <Head>
      <title>Ilwel</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <main className={styles['l-general']}>
        <Image className={styles['ilwel']} src={ilwel} alt='ilwel pixel art'/>
        <div className={styles['dialog-box']}>
          <div className='outlined'>
            <p id='typewriter'></p>
          </div>
        </div>
        <div className={styles['nav']}>
          <div className="outlined">
            <div>
              <Link href={'/'}>
                <h2>Ilwel Isaac</h2>
              </Link>
              <Link target='_blank' href={'https://www.linkedin.com/in/ilwel/'}>
                <Image className={styles['icon']} src={linkedin} alt='linkedin icon'/>
              </Link>
              <Link target='_blank' href={'https://github.com/Ilwel'}>
                <Image className={styles['icon']} src={github} alt='github icon'/>
              </Link>
            </div>
            <p className='sub-text'>Desenvolvedor de Software</p>
            <ul>
              <li onClick={ () => onClick('projects')}>

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
        </div>

        <div onClick={() => setOpen(true)} className={styles['nav-mobile']}>
          <Image src={burguer} alt='burguer menu'/>
        </div>
        <DialogContext.Provider value={{dialog, setDialog}}>
         {children}
        </DialogContext.Provider>
        <NavModal open={open} setOpen={setOpen}/>
      </main>
    </>
  );
};

export default Layout;