import Navbar from '@/components/Navbar';
import HomeContainer from '@/containers/HomeContainer';
import Footer from '@/components/Footer';
import { useEffect } from "react";


export default function Home() {

  function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }
  useEffect(() => {

    const token = getToken();
    {!token ? window.location.replace('/login') : ""}

  }, [])
  

  return (
    <>
      <Navbar />
      <HomeContainer/>
      <Footer />
    </>
  );
}
