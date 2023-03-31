import React from 'react';
// import styles from './Home.module.css';
import Layout from './Layout';

function Bacon(props: any) {
  // function TopBanner({ saying }: any) {
  return (
    // <React.Fragment>
    <>
      <div>
        <Layout />
        <div className="row">
          <div className="col align-self-center text-start">
            <a href="https://baconsale.com">Visit Bacon Sale Podcast</a>

            {/* <h1 className={styles.h1}>{props.saying}</h1> */}
            {/* <h1 className={styles.h1}>{saying}</h1>*/}
          </div>
        </div>
      </div>
    </>
    // </React.Fragment>
  );
}

export default Bacon;
