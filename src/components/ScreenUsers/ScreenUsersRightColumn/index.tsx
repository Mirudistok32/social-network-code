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
  isFetchings: Array<number>
  setFollow: (id: number) => void
  setUnfollow: (id: number) => void
  leftPortionPageNumber: number
  rightPortionPageNumber: number
  portionNumber: number
  portionCount: number
  setPortionNumber: (value: number) => void
}

export const ScreenUsersRightColumn: React.FC<PropsType> = React.memo((props) => {

  const {
    title,
    users,
    pages,
    currentPage,
    onSetCurrentPage,
    isPreloading,
    isFetchings,
    setFollow,
    setUnfollow,
    leftPortionPageNumber,
    rightPortionPageNumber,
    portionNumber,
    portionCount,
    setPortionNumber } = props

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
    isFetchings={isFetchings}
    setFollow={setFollow}
    setUnfollow={setUnfollow}
  />)



  let pagesBtn = pages
    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
    .map(i => {
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
          portionNumber > 1 && <button className="screen-friends-right-column__pagination-left" onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>
        }
        {
          pagesBtn
        }
        {
          portionCount > portionNumber && <button className="screen-friends-right-column__pagination-right" onClick={() => setPortionNumber(portionNumber + 1)}>next</button>
        }
      </div>
    </div>
  );
})
