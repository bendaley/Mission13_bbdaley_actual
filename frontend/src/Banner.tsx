import React from 'react';
// import styles from './/Home.module.css';

function TopBanner(props: any) {
  // function TopBanner({ saying }: any) {
  return (
    // <React.Fragment>
    <>
      <div className="row text-center">
        <h1>{props.saying}</h1>
        <br></br>
        <div className="col-3 mx-auto">
          {/* <img src="./logo192.png" alt="companyLogo" /> */}
          <img src="./JoelHiltonHeadshot.jpg" alt="Joel" className="mx-auto" />
        </div>
        <div className="col align-self-center text-start">
          {/* <h1 className={styles.h1}>{saying}</h1>*/}
        </div>
      </div>
    </>
    // </React.Fragment>
  );
}

export default TopBanner;
