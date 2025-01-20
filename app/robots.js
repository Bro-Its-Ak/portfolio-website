export default function robots(){
    return{
        rules:[
            {
                userAgent:"*",
                allow:"/",
                disallow:["/testingpage"]
            }
        ],
        sitemap:`${process.env.NEXT_PUBLIC_URL}`
    }
}