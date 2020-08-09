import React from 'react';
import './ScreenUsersRightColumn.scss';
import { UsersItem } from './UsersItem';
import { UserType } from '../../../redux/users-reducer';
import { Loading } from '../../../utils/Loading/Loading';

type PropsType = {
  title?: string
  users: Array<UserType>
  pages: Array<number>
  currentPage: number
  isPreloading: boolean
  onSetCurrentPage: (currentPage: number) => void
  isFetching: boolean
  setFollow: (id: number) => void
  setUnfollow: (id: number) => void
}

export const ScreenUsersRightColumn: React.FC<PropsType> = (props) => {

  const { title, users, pages, currentPage, onSetCurrentPage, isPreloading, isFetching, setFollow, setUnfollow } = props

  // console.log(users);
  let usersList = users.map(i => <UsersItem
    key={i.id}
    link={`/profile/`}
    id={i.id}
    name={i.name}
    status={i.status}
    photoLarge={i.photos.large}
    photoSmall={i.photos.small}
    follow={i.followed}
    isFetching={isFetching}
    setFollow={setFollow}
    setUnfollow={setUnfollow}
  />)

  let pagesBtn = pages.map(i => {
    let classSpanActive = 'screen__pagination'
    //Если текущая страница равна текущему элементу, то устанавливаем выделяющий ее класс
    if (currentPage === i) {
      classSpanActive += ' screen__pagination-active'
    }

    //Получаю из пропсов функцию для установления текущего пользователя по клику
    const setCurrentPage = () => {
      onSetCurrentPage(i)
    }

    return (<span key={i} className={classSpanActive} onClick={setCurrentPage}>{i}</span>)
  })

  return (
    <div className="screen-friends-right-column">
      <div className="screen-friends-right-column__header">
        <ul className="screen-friends-right-column__list">
          <li className="screen-friends-right-column__item">
            <button className="screen-friends-right-column__btn">{title}</button>
          </li>
        </ul>
      </div>
      <div className="screen-friends-right-column__users">
        <div className="screen-friends-right-column__user">
          {
            //Пока isPreloading будет true, то отрисовывай прелоудер(загрузку)
            isPreloading ? <Loading /> : usersList
          }
        </div>
      </div>
      <div className="screen-friends-right-column__pagination">
        {
          pagesBtn
        }
      </div>
    </div>
  );
}
