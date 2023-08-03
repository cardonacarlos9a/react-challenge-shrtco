'use client'
import Nav from './_components/nav'
import Header from './_components/header'
import LinkForm from './_components/link-form'
import UrlList from './_components/url-list'
import Statistics from './_components/statistics'
import Booster from './_components/booster'
import Footer from './_components/footer'
import { useState, useEffect } from 'react'
export default function Home() {

  const [shortenedList, setShortenedList] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    // Load data from local storage on initial mount
    const storedData = localStorage.getItem('shortenedList');
    if (storedData) {
      setShortenedList(JSON.parse(storedData));
    }
  }, []);

  const shortenRequest = async (url) => {
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      const newUrl={
        url: url,
        short: data.result.short_link
      }
      setShortenedList((prevList) => [...prevList, newUrl]);
      localStorage.setItem('shortenedList', JSON.stringify([...shortenedList, newUrl]));
      setError('')

    } catch (error) {
      setError('Error shortening URL')
      //console.error('Error shortening URL:', error);
    }
  }

  return (
    <main >
      <Nav></Nav>
      <Header></Header>
      <LinkForm error={error} shortenUrl={shortenRequest}></LinkForm>
      <UrlList shortenedList={shortenedList}></UrlList>
      <Statistics></Statistics>
      <Booster></Booster>
      <Footer></Footer>
    </main>
  )
}
