import React from 'react';
import s from './LoginForm.module.scss';
import { useFormik, FormikConfig } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { loginInThunk } from '../../../redux/auth-reducer';

//Типизация для нашей формы
type InitialValuesType = {
  login: string,
  password: string,
  rememberMe: boolean
}

export const LoginForm = React.memo(() => {

  //Блокируем кнопку, пока идет запрос на сервер
  const isFetching = useSelector((state: AppStateType) => state.authReducer.isFetching)

  //Для диспатча наших Thunk или Action Creator
  const dispatch = useDispatch();

  //Константы для нашей валидационной схемы
  const maxLoginLength = 100
  const minLoginLength = 2
  const maxPasswordLength = 64
  const minPasswordLength = 2


  //Валидационная схема для нашей формы
  const validationSchema = Yup.object({
    login: Yup
      .string()
      .required('Обязательное поле')
      .email('Некорректный email')
      .max(maxLoginLength, `Максимальное количество символов ${maxLoginLength}`)
      .min(minLoginLength, `Минимальное количество символов ${minLoginLength}`),
    password: Yup
      .string()
      .required('Обязательное поле')
      .max(maxPasswordLength, `Максимальное число символов ${maxPasswordLength}`)
      .min(minPasswordLength, `Минимальное количество символов ${minPasswordLength}`),
  })


  //Конфигурация для нашей формы
  const config: FormikConfig<InitialValuesType> = {
    initialValues: {
      login: '',
      password: '',
      rememberMe: false
    },
    validationSchema,
    onSubmit: (values) => {
      let { login, password, rememberMe } = values
      //Диспатчим нашу санку для входа
      dispatch(loginInThunk(login, password, rememberMe))
    }
  }

  //Создаем нашу форму
  const formik = useFormik(config)

  return (
    <form className={s['login-form']} onSubmit={formik.handleSubmit}>

      <h2 className={s['login-form__mainTitle']}>Войдите в систему!</h2>

      <label className={s['login-form__row']}>
        <span className={s['login-form__title']}>Email</span>
        <input
          className={s['login-form__input']}
          type="text"
          name="login"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.login}
        />
        {
          formik.errors.login && <span className={s['login-form__error']}>*{formik.errors.login}</span>
        }
      </label>

      <label className={s['login-form__row']}>
        <span className={s['login-form__title']}>Пароль</span>
        <input
          className={s['login-form__input']}
          type="password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {
          formik.errors.password && <span className={s['login-form__error']}>*{formik.errors.password}</span>
        }
      </label>

      <label className={`${s['login-form__row-checkbox']}`}>
        <span className={s['login-form__title']}>Запомнить меня</span>
        <input
          className={s['login-form__input']}
          type="checkbox"
          name="rememberMe"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={formik.values.rememberMe}
        />
      </label>

      <button
        className={`${s['login-form__button']} ${isFetching && s['login-form__button-disabled']}`}
        type='submit'
        disabled={isFetching}>Войти</button>
    </form>
  );
})

