import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ProtectedRoutes from '../components/ProtectedRoutes';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ProtectedRoutes>
      <Component {...pageProps} />

    </ProtectedRoutes>
  )
}
export default MyApp
