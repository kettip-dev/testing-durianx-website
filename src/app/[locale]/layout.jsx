import {  Plus_Jakarta_Sans, Kantumruy_Pro } from 'next/font/google'
import '../../common/style/globals.css'
import Navbar from '@/common/component/navbar/Navbar'
import Footer from '@/common/module/Footer'
import { Providers } from '@/common/component/element/Providers'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';


const plus_Jakarta_Sans = Plus_Jakarta_Sans({subsets: ['latin']});
const kantumruy_Pro = Kantumruy_Pro({subsets: ['khmer'], weight: ['400', '700']});

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Index'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${locale === 'km' ? kantumruy_Pro.className : plus_Jakarta_Sans.className} dark:bg-black`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <Providers>
        <div className='flex justify-center items-center'>
          <Navbar />
        </div>
        {children}
        <div className='flex justify-center items-center'>
          <Footer />
        </div>
        </Providers>
        </NextIntlClientProvider>
        </body>
    </html>
  )
}
