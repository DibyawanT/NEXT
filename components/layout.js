import Head from "next/head";
export default function Layout({title,keywords,children,description}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content ={keywords} />
            <div>{children}</div>
        </Head>
    )
}
Layout.defaultProps = {
    title:"Lets-Burn",
    description:"Greatest gym in the underworld",
    keywords:"gym,fitness,motivation,weight"
}
