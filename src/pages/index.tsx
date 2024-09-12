import Head from 'next/head';

import AvatarSection from '@/components/avatar-section';

export default function Home() {
  return (
    <>
      <Head>
        <title>Walber Zaldivar</title>
        <meta name="description" content="Walber Zaldivar profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AvatarSection />
    </>
  );
}
