import { useRouter } from 'next/router'
import useSWR from 'swr'


const HomeLang = () => {
    const router = useRouter();
    const locale = router.locale;

    const fetcher = async () => {
        const response = await fetch(`../public/locales/${locale}.json`)
        console.log("response :", response);
        const data = await response.json()
        console.log("data", data);
        return data
    }

    console.log("fetcher : ", fetcher); 

    //const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR(`../public/locales/${locale}.json`, fetcher)

    //console.log("language ", `${locale}`);

    return (
        <h1>Hey! I am home - {data?.language}</h1>
    )
}



export default HomeLang;