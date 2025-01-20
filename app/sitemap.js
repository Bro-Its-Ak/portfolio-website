export default function sitemap() {
    return [
      {
        url: `${process.env.NEXT_PUBLIC_URL}`,
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/portfolio`,
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/bittree`,
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/advanced-bittree`,
      },
    ]
  }