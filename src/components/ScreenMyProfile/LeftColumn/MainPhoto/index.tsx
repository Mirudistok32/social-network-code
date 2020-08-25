import React, { useState, useEffect } from 'react';
import './MainPhoto.scss';
import avatarDefault from '../../../../assets/images/octopus.svg'
import { PhotosType } from '../../../../redux/users-reducer';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppStateType } from '../../../../redux/store';
// import avatarDefault from '../../assets/images/default-icon.jpg'

export type PropsType = {
  photos: PhotosType
}

export const MainPhoto: React.FC<PropsType> = React.memo((props) => {

  const { photos } = props

  const [isShow, setIsShow] = useState(false)
  const myId = useSelector((state: AppStateType) => state.authReducer.id)
  const { id } = useParams()

  useEffect(() => {
    if (myId) {
      if (id) {
        // eslint-disable-next-line eqeqeq
        if (myId == id) setIsShow(true)
      }
    }
  }, [myId, id])

  let photoURL = photos.small ? photos.small : photos.large ? photos.large : avatarDefault

  return (
    <div className="main-photo main-photo__box" >
      <img className="main-photo" src={photoURL} alt="avatar" />
      {
        isShow && (
          <label className="main-photo__change-box">Выбрать фото
            <input className="main-photo__change" type="file" />
          </label>
        )
      }
    </div>
  );
})
