import styles from './styles.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import thumbImg from '../../../public/images/thumb.png'

export default function Posts(){
    return(
        <>
            <Head>
                <title>Blog | Matheus Machado</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <Link href="/">
                        <a>
                            <Image 
                                src={thumbImg}
                                width={720}
                                height={410}
                                quality={100}
                            />
                            <strong>+200 projetos</strong>
                            <time>14 MARÇO 2022</time>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra, diam ultricies gravida posuere, orci velit pharetra magna, ac porttitor dolor dui vel mi.</p>
                        </a>
                    </Link>
                </div>

                
            </main>
        </>
    )
}