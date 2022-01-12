import Link from 'next/link';
import { useRouter } from 'next/router'
import useSWR from 'swr'
import HomeLang from './homelang';

export function getStaticProps({locale})
{
  return{
    props: {locale
    }
  }
}
export default function Home(props)
{

  let router = useRouter();
  const locale = router.locale;

  

  const { data, error } = useSWR(`./public/locales/${locale}.json`, fetcher)

 let greeting = router.locale === 'en-us' 
  ? 'Hello world' 
  : router.locale === 'fr' 
  ? 'Bonjour le monde'
  :router.locale === 'kn-in' ? 'ಹಲೋ ವರ್ಲ್ಡ್'
  : router.locale === 'hi-in' ? 'नमस्ते दुनिया'
  : "";

  return (
    <div> 
        <h1> {greeting} </h1> 
       <h2> {props.locale} </h2>

       <HomeLang/>

     </div>
   )
}
