import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';
import './MainPhoto.scss';
import avatarDefault from '../../../../assets/images/octopus.svg'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setPhotoProfileThunk } from '../../../../redux/profile-reducer';
import { getAuthIdSelect } from '../../../../selectors/auth-select';
import { AppStateType } from '../../../../redux/store';

export type PropsType = {
}

export const MainPhoto: React.FC<PropsType> = React.memo((props) => {


  const [isShow, setIsShow] = useState(false)
  const dispatch = useDispatch()
  const myId = useSelector(getAuthIdSelect)
  const photos = useSelector((state: AppStateType) => state.profileReducer.photos)
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
 

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
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
  }, [dispatch])

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
