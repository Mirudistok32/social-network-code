import React, { useState, useEffect, ChangeEvent } from 'react';
import './MainPhoto.scss';
import avatarDefault from '../../../../assets/images/octopus.svg'
import { PhotosType } from '../../../../redux/users-reducer';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppStateType } from '../../../../redux/store';
import { setPhotoProfileThunk } from '../../../../redux/profile-reducer';
// import avatarDefault from '../../assets/images/default-icon.jpg'

export type PropsType = {
  photos: PhotosType
}

export const MainPhoto: React.FC<PropsType> = React.memo((props) => {

  const { photos } = props

  const [isShow, setIsShow] = useState(false)
  const dispatch = useDispatch()
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


  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //Нужно ли проверять тут длинну массива или просто присутствие самого массива хватит?
    if (e.target.files?.length) {
      // eslint-disable-next-line no-restricted-globals
      let isYesNo = confirm('Вы точно хотите обновить фото?')
      if (isYesNo) {
        dispatch(setPhotoProfileThunk(e.target.files[0]))
      }
    } else {
      console.log("Файл пуст!")
    }
  }

  return (
    <div className="main-photo main-photo__box" >
      <img className="main-photo" src={photoURL} alt="avatar" />
      {
        isShow && (
          <label className="main-photo__change-box">Выбрать фото
            <input className="main-photo__change" type="file" onChange={onChangeHandler} />
          </label>
        )
      }
    </div>
  );
})
