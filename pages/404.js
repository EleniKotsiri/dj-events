import { FaExclamationTriangle } from 'react-icons/fa';

import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';

export default function PageNotFound() {
   return (
      <Layout title='Page Not Found'>
         <div className={styles.error}>
            <h1><FaExclamationTriangle/> 404</h1>
            <h4>Sorry, there is nothing to see here</h4>
            <Link href='/'>Go to Home page</Link>
         </div>
      </Layout>
   )
}