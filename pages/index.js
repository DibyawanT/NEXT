import styles from '../styles/Index.module.css'
import Link from 'next/link'
import Layout  from "../components/layout";

export default function Home() {
  return (
    <div className={styles.container}>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <Layout />
      <body>
        <p className={styles.para}> <h1>Let's Burn</h1> </p>
        <Link href="/signup">
          <a class="waves-effect waves-light btn #ffcdd2 black">button</a>
        </Link>
      </body>
    </div>
  )
}
