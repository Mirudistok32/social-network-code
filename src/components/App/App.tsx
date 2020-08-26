import React, { useEffect, Suspense } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContainerHeader from '../Header/ContainerHeader';
// import { ScreenMessages } from '../ScreenMessages';
// import { ScreenFriends } from '../ScreenFriends';
// import { ScreenUsers } from '../ScreenUsers';
import ContainerScreenMyProfile from '../ScreenMyProfile/ContainerScreenMyProfile';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { setDataMeThunk } from '../../redux/auth-reducer';
import { Login } from '../Login';
import { Loading } from '../../utils/Loading/Loading';

const ScreenUsers = React.lazy(() => import('../ScreenUsers')
  .then(({ ScreenUsers }) => ({ default: ScreenUsers }))
);

const ScreenFriends = React.lazy(() => import('../ScreenFriends')
  .then(({ ScreenFriends }) => ({ default: ScreenFriends }))
);

const ScreenMessages = React.lazy(() => import('../ScreenMessages')
  .then(({ ScreenMessages }) => ({ default: ScreenMessages }))
);

const SettingsProfile = React.lazy(() => import('../SettingsProfile')
  .then(({ SettingsProfile }) => ({ default: SettingsProfile }))
);

export const App = () => {

  //Проверяю, авторизован ли я или нет. Если да, 
  // то отрисовываю все приложение, 
  // а иначе перекидываем на страницу для гостей /login
  const id = useSelector((state: AppStateType) => state.authReducer.id)
  const isAuth = useSelector((state: AppStateType) => state.authReducer.isAutorization)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDataMeThunk())
  }, [dispatch, id])

  return (
    <div className="app" >
      {
        isAuth && <>
          < ContainerHeader />
          <Switch >
            <Route exact path='/' render={() => <Redirect to={`/profile/${id}`} />} />
            <Route exact path='/profile/:id?' render={() => <ContainerScreenMyProfile />} />
            <Route exact path='/messages/' render={() => (
              <Suspense fallback={<Loading />}>
                <ScreenMessages />
              </Suspense>)} />
            <Route exact path='/messages/:id' render={() => <ScreenMessages />} />
            <Route exact path='/friends/' render={() => (
              <Suspense fallback={<Loading />}>
                <ScreenFriends />
              </Suspense>)} />
            <Route exact path='/users/' render={() => (
              <Suspense fallback={<Loading />}>
                <ScreenUsers />
              </Suspense>)} />
            <Route exact path='/settings/profile' render={() => (
              <Suspense fallback={<Loading />}>
                <SettingsProfile />
              </Suspense>)} />

            {/* <Route exact path='/main' render={() => <div>Вот так вот</div>} /> !!! Не забыть сделать компоненту */}
            <Redirect to={`/settings/profile`} />
            {/* <Redirect to={`/profile/${id}`} /> */}
          </Switch>
        </>
      }
      {
        !isAuth &&
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/login' />} />
          <Route exact path='/login' render={() => <Login />} /> {/* !!! Не забыть сделать компоненту*/}
          <Redirect to="/login" />
        </Switch>
      }
    </div>
  );
}
