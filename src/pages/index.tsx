import Head from 'next/head';
import styles from '../styles/home.module.scss'

import Image from 'next/image'
import techsImage from '../../public/images/techs.svg'
import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

type Content ={
  title: string;
  titleContent: string;
  titleImage: string;
  linkAction: string;
  mobileTitle: string;
  mobileContent: string;
  mobileBanner: string;
  webTitle: string;
  webContent: string;
  webBanner: string;
}

interface ContentProps{
  content: Content;
}

export default function Home({ content }: ContentProps) {
  return (
    <>
      <Head>
        <title>Pagina Dinamica - Matheus Machado</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{content.title}</h1>
            <span>{content.titleContent}</span>
            <a href={content.linkAction}>
              <button>
                COMEÇAR AGORA!
              </button>
            </a>
          </section>

          <img 
              src={content.titleImage} 
          />
        </div>
        <hr  className={styles.divisor}/>

        <div className={styles.sectionContent}>
          <section>
            <h2>{content.mobileTitle}</h2>
            <span>{content.mobileContent}</span>
          </section>

          <img 
            src={content.mobileBanner} 
          />
        </div>

        <hr  className={styles.divisor}/>

        <div className={styles.sectionContent}>
          <img 
            src={content.webBanner} 
          />
          <section>
            <h2>{content.webTitle}</h2>
            <span>{content.webContent}</span>
          </section>    
        </div>

        <div className={styles.nextLevelContent}>
          <Image src={techsImage} />
          <h2>+ de <span className={styles.alunos}>200 empresas</span> já levaram suas vendas ao próximo nivel.</h2>
          <span>E você, vai perder a chance de evoluir de uma vez por todas?</span>
          <a href={content.linkAction}>
            <button>SABER MAIS!</button>
          </a>
        </div>



      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])

  const {
    title, sub_title, title_image, link_action,
    mobile, mobile_content, mobile_banner,
    title_web, web_content, web_banner
  } = response.results[0].data;

  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    titleImage: title_image.url,
    linkAction: link_action.url,
    mobileTitle: RichText.asText(mobile),
    mobileContent: RichText.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: RichText.asText(title_web),
    webContent: RichText.asText(web_content),
    webBanner: web_banner.url
  }

  return{
    props:{
      content
    }
  }
}