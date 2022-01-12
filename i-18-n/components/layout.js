import { Head } from "next/document"
import Link from "next/link"

 function Layout({children})
{
    return(
        <div>
            <Head>
                <title> i18N Example </title>
                <link rel = "icon" href = "/favicon.ico" />
            </Head>

            <Link href = "/">
                <a> Home </a>
            </Link>

            <Link href = "/about">
                <a> About </a>
            </Link>
        </div>
    ) 
}

export default Layout
