import React from 'react';
import s from './Settings.module.scss';


export type DialogsType = {
  name?: string,
  avatar?: string,
  id?: string
}

export const Settings: React.FC<DialogsType> = (props) => {

  // const { } = props
  
  return (
    <div className={s.settings}>
     
    </div>
  );
}
