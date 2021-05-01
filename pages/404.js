import Link from 'next/link'
import styles from "../styles/404.module.css";
import Layout  from "../components/layout";

export default function Error() {
    return (
        
        <div className={styles.error}>
         <Layout title="404 Error"/>
            <h1>404</h1>
            <p>Error Hain Sala</p>
            <Link href="/register">Click to kill yourself,Bsdk</Link>
        </div>
    )
}
