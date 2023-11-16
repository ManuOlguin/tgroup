import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import { AppContextProvider } from '@/contexts/AppContext';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function App({ Component, pageProps }) {

  return (
    <AppContextProvider>
      <main className={`${poppins.variable}`}>
        <Component {...pageProps} />
      </main>
    </AppContextProvider>
  );
}