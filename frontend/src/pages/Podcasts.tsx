import React from 'react';
// import styles from './Home.module.css';
import Layout from './Layout';

function Bacon(props: any) {
  // function TopBanner({ saying }: any) {
  return (
    // <React.Fragment>
    <>
      <div className="text-center">
        <Layout />
        <h1>My Podcasts</h1>
        <br></br>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <a
              href="https://baconsale.com"
              className="btn btn-outline-danger btn-lg btn-block"
            >
              Visit Bacon Sale Podcast
            </a>

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
