import React from 'react';

function TopBanner(props: any) {
  return (
    <>
      <div className="text-center">
        {' '}
        {/* add text-center class here */}
        <h1>{props.saying}</h1>
        <br></br>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-3">
            <div className="border border-primary p-3">
              <img
                src="./JoelHiltonHeadshot.jpg"
                alt="Joel"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
