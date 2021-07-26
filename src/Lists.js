import React from "react";


const Lists = (props) => {
  const date = new Date(props.createTime * 1000);

  console.log(props)

//   const data = [...props]
  
  

//   console.log(data.sort((a,b) => {
//       if(a.name < b.name) {
//           return -1;
//       }
//       if(a.name > b.name) 
//       return 1;
//       return 0;
//   }))
//   console.log(data)
  const initials = props.name.charAt(0);

  return (
    <>
      <div className="data-list pt-3 pb-2 ps-2">
        <div className="row text-center">
          <div className="col-md-2 col-lg-2 justify-content-center ">
            <div className="avatar-circle bg-light">{initials}</div>
          </div>
          <div className="col-md-8 col-lg-8">
            <h3>{props.name}</h3>
            <p>{date.toUTCString()}</p>
            <button className="btn btn-secondary check-button">
              <i class="bi bi-check2 check-icon"></i>
            </button>
          </div>
          <div className="col-md-2 col-lg-2"></div>
        </div>
      </div>
    </>
  );
};

export default Lists;
