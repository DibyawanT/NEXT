import styles from '../styles/Register.module.css'
import Link from 'next/link'
import Layout  from "../components/layout";

export default function signup() {
    return (
        <div className={styles.container}>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <Layout title = "Sign Up" />
            <h1>Sign Up</h1>
            <p>Name</p>
            <input type="text" placeholder="Enter Your Full Name" onChange ={(e) => {console.log(e.target.value)}}/>
            <p>Email Id</p>
            <input type="text" placeholder="Enter Your Eamil Id" onChange ={(e) => {console.log(e.target.value)}}/>
            <p>Password</p>
            <input type="password" placeholder="Enter Your Password" onChange ={(e) => {console.log(e.target.value)}} />
            <p>Confirm Password</p>
            <input type="password" placeholder="Enter Your Password Again" onChange ={(e) => {console.log(e.target.value)}} />
            <p></p>
            <Link href="/dashboard">
            <a class="waves-effect waves-light btn #ffcdd2 black">Sign Up</a>
            </Link>
            <p></p>
            <Link href="/signin">
            <a class="waves-effect waves-light btn #ffcdd2 black">Already Registered , Sign In</a>
            </Link>
        </div>
    )
}
