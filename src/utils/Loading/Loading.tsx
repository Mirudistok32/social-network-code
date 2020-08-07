import React from 'react';
import './Loading.scss'

export const Loading = () => {

  return (<>
    <div className="lds-ripple__wrapper">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </>)

}