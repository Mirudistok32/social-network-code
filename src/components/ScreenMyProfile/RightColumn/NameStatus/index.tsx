import React, { useState } from 'react';
import './NameStatus.scss';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/store';

export type NameStatusType = {
  fullName: string,
  status: string
  userId: number
}

export const NameStatus: React.FC<NameStatusType> = (props) => {

  const { fullName, status, userId } = props
  const myId = useSelector((state: AppStateType) => state.authReducer.id)
  const [active, setActive] = useState<boolean>(true)

  let myStatus = active ?
    <span className='name-info__status-my' onDoubleClick={() => setActive(false)}>{status}</span> :
    <input type="text" onBlur={() => setActive(true)} autoFocus/>

  let userStatus = <span className='name-info__status-user'>{status}</span>

  let watchingStatus = userId === myId ? myStatus : userStatus


  return (
    <div className="name-info">
      <span className='name-info__name'>{fullName}</span>
      {
        watchingStatus
      }
    </div>
  );
}
