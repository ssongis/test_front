import Head from 'next/head';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="자신의 마음을 적는 공간" />
        <title>오늘의집 클론코딩</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>

  );
}
