import {  Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import '../../common/style/globals.css'
import Navbar from '@/common/component/navbar/Navbar'
import Footer from '@/common/module/Footer'
import { Providers } from '@/common/component/element/Providers'
import PageTransition from '@/common/component/element/PageTransition'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';


const plus_Jakarta_Sans = Plus_Jakarta_Sans({subsets: ['latin']});
const misansKhmer = localFont({
  src: [
    {
      path: '../../../public/fonts/MiSansKhmer-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/MiSansKhmer-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/MiSansKhmer-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/MiSansKhmer-Normal.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/MiSansKhmer-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/MiSansKhmer-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/MiSansKhmer-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/MiSansKhmer-Demibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/MiSansKhmer-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/MiSansKhmer-Heavy.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-misans-khmer',
});

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
      <body className={`${locale === 'km' ? misansKhmer.className : plus_Jakarta_Sans.className} ${misansKhmer.variable} dark:bg-black`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <Providers>
        {/* GSAP full-screen curtain transition — fires on every route change */}
        <PageTransition />
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
