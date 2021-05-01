import Link from 'next/link'
import Layout  from "../components/layout";
import styles from '../styles/Register.module.css'

export default function signin() {
    return (
        <div className={styles.container}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <Layout title="Sign In"/>
        <h1>Sign Up</h1>
            <p>Email Id</p>
            <input type="text" placeholder="Enter Your Eamil Id" onChange ={(e) => {console.log(e.target.value)}}/>
            <p>Password</p>
            <input type="password" placeholder="Enter Your Password" onChange ={(e) => {console.log(e.target.value)}} />
            <Link href="/dashboard">
            <a class="waves-effect waves-light btn #ffcdd2 black">Sign In</a>
            </Link>
        </div>
    )
}
