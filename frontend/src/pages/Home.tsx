import React from 'react';
// import styles from '../Home.module.css';
import TopBanner from '../Banner';
import Layout from './Layout';

function Home(props: any) {
  // function TopBanner({ saying }: any) {
  return (
    <>
      <div>
        <Layout />
        <TopBanner saying="Welcome! This Website will list out Joel's favorite movies" />
      </div>
    </>
  );
}

export default Home;
