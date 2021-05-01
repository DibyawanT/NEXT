import Head from 'next/head'


const Navbar = () =>{
    return(
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
            </Head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
              <nav>
                    <div class="nav-wrapper #02475e black">
                    <a>Lets Burn</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="profile">Profile</a></li>
                        <li><a href="plan">Plan</a></li>
                        <li><a href="signin">Log Out</a></li>
                    </ul>
                    </div>
                </nav>
        </div>
    )
}

export default Navbar;