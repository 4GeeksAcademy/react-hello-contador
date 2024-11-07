import React from "react";

const Card = ({digito}) => {
	return (
    <div className="card mb-3 bg-dark m-1" style={{width:"6rem", height:"3rem"}}>
		  <h5 className="card-title text-center text-white p-2">{digito}</h5>
		</div>
	);
  };
   export default Card