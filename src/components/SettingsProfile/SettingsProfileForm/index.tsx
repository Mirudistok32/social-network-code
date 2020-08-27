import React from 'react';
import s from './SettingsProfileForm.module.scss';
import { useFormik, FormikConfig } from 'formik';
import * as Yup from 'yup'


type PropsType = {
  fullName: string
  facebook: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  github: string
  instagram: string
  mainLink: string
  twitter: string
  vk: string
  website: string
  youtube: string
  aboutMe: string
  onSubmit: (values: SettingsProfileFormInitialValuesType) => void
}

export type SettingsProfileFormInitialValuesType = {
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  contacts: {
    facebook: string
    github: string
    instagram: string
    mainLink: string
    twitter: string
    vk: string
    website: string
    youtube: string
  }
  aboutMe: string
}

export const SettingsProfileForm: React.FC<PropsType> = (props) => {

  const {
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    mainLink,
    website,
    github,
    vk,
    facebook,
    twitter,
    instagram,
    youtube,
    aboutMe,
    onSubmit
  } = props



  const maxLinkLength = 100
  const maxNameLength = 30
  const maxJobDescriptionLength = 300

  const validationSchema = Yup.object({
    fullName: Yup
      .string()
      .required()
      .max(maxNameLength, `Максимальное количество символов ${maxNameLength}`),

    lookingForAJobDescription: Yup
      .string()
      .required()
      .max(maxJobDescriptionLength, `Максимальное количество символов ${maxJobDescriptionLength}`),

    contacts: Yup
      .object()
      .shape({

        mainLink: Yup
          .string()
          .max(maxLinkLength, `Максимальное количество символов ${maxLinkLength}`)
          .url('Некорректный ввод ссылки'),

        website: Yup
          .string()
          .max(maxLinkLength, `Максимальное количество символов ${maxLinkLength}`)
          .url('Некорректный ввод ссылки'),

        github: Yup
          .string()
          .max(maxLinkLength, `Максимальное количество символов ${maxLinkLength}`)
          .url('Некорректный ввод ссылки'),

        vk: Yup
          .string()
          .max(maxLinkLength, `Максимальное количество символов ${maxLinkLength}`)
          .url('Некорректный ввод ссылки'),

        facebook: Yup
          .string()
          .max(maxLinkLength, `Максимальное количество символов ${maxLinkLength}`)
          .url('Некорректный ввод ссылки'),

        twitter: Yup
          .string()
          .max(maxLinkLength, `Максимальное количество символов ${maxLinkLength}`)
          .url('Некорректный ввод ссылки'),

        instagram: Yup
          .string()
          .max(maxLinkLength, `Максимальное количество символов ${maxLinkLength}`)
          .url('Некорректный ввод ссылки'),

        youtube: Yup
          .string()
          .max(maxLinkLength, `Максимальное количество символов ${maxLinkLength}`)
          .url('Некорректный ввод ссылки'),
      }),
    aboutMe: Yup
      .string()
      .required()
      .max(maxJobDescriptionLength, `Максимальное количество символов ${maxJobDescriptionLength}`),
  })

  const config: FormikConfig<SettingsProfileFormInitialValuesType> = {
    initialValues: {
      fullName: fullName,
      lookingForAJob,
      lookingForAJobDescription,
      contacts: {
        mainLink, 
        website, 
        github, 
        vk, 
        facebook, 
        twitter, 
        instagram, 
        youtube,
      },
      aboutMe
    },
    onSubmit: (values) => {

      // eslint-disable-next-line no-restricted-globals
      let isYesNo = confirm("Вы точно хотите изменить свои данные?")
      if (isYesNo) {
        onSubmit(values)
      }
    },
    validationSchema
  }

  const formik = useFormik(config)

  return (
    <form className={s['settings-profile-form']} onSubmit={formik.handleSubmit}>

      <label className={s['settings-profile-form__row']}>
        <span className={s['settings-profile-form__row-title']}>Полное имя: <span>{fullName}</span></span>
        <input
          className={s['settings-profile-form__row-input']}
          type="text"
          name="fullName"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
        {
          formik.errors.fullName &&
          <span className={s['settings-profile-form__row-error']}>*{formik.errors.fullName}</span>
        }
      </label>

      <label className={s['settings-profile-form__row']}>
        <span className={s['settings-profile-form__row-title']}>У вас есть работа?</span>
        <input
          type="checkbox"
          name="lookingForAJob"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={formik.values.lookingForAJob}
        />
        <span className={s['settings-profile-form__row-error']}>{}</span>
      </label>

      <label className={s['settings-profile-form__row']}>
        <span className={s['settings-profile-form__row-title']}>Опишите, чем вы занимаетесь на работе:</span>
        <span>{lookingForAJobDescription}</span>
        <textarea
          className={s['settings-profile-form__row-input']}
          name="lookingForAJobDescription"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.lookingForAJobDescription} />
        {
          formik.errors.lookingForAJobDescription &&
          <span className={s['settings-profile-form__row-error']}>*{formik.errors.lookingForAJobDescription}</span>
        }
      </label>

      <label className={s['settings-profile-form__row']}>
        <span className={s['settings-profile-form__row-title']}>Обо мне</span>
        <span>{aboutMe}</span>
        <textarea
          className={s['settings-profile-form__row-input']}
          name="aboutMe"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.aboutMe} />
        {
          formik.errors.aboutMe &&
          <span className={s['settings-profile-form__row-error']}>*{formik.errors.aboutMe}</span>
        }
      </label>

      <span className={`${s['settings-profile-form__row-title']} ${s['settings-profile-form__contacts-title']}`}>Все ваши контакты:</span>
      <span className={`${s['settings-profile-form__row']} ${s['settings-profile-form__row-contacts']}`}>

        <label className={s['settings-profile-form__row']}>
          <span className={s['settings-profile-form__row-subtitle']}>MainLink: <span>{mainLink}</span></span>
          <input className={s['settings-profile-form__row-input']}
            type="text"
            name="contacts.mainLink"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.contacts.mainLink}
          />
          {
            formik.errors.contacts?.mainLink &&
            <span className={s['settings-profile-form__row-error']}>{formik.errors.contacts?.mainLink}</span>
          }
        </label>

        <label className={s['settings-profile-form__row']}>
          <span className={s['settings-profile-form__row-subtitle']}>Website: <span>{website}</span></span>
          <input className={s['settings-profile-form__row-input']}
            type="text"
            name="contacts.website"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.contacts.website}
          />
          {
            formik.errors.contacts?.website &&
            <span className={s['settings-profile-form__row-error']}>{formik.errors.contacts?.website}</span>
          }
        </label>

        <label className={s['settings-profile-form__row']}>
          <span className={s['settings-profile-form__row-subtitle']}>Github: <span>{github}</span></span>
          <input className={s['settings-profile-form__row-input']}
            type="text"
            name="contacts.github"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.contacts.github}
          />
          {
            formik.errors.contacts?.github &&
            <span className={s['settings-profile-form__row-error']}>{formik.errors.contacts?.github}</span>
          }
        </label>

        <label className={s['settings-profile-form__row']}>
          <span className={s['settings-profile-form__row-subtitle']}>Vk: <span>{vk}</span></span>
          <input className={s['settings-profile-form__row-input']}
            type="text"
            name="contacts.vk"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.contacts.vk}
          />
          {
            formik.errors.contacts?.vk &&
            <span className={s['settings-profile-form__row-error']}>{formik.errors.contacts?.vk}</span>
          }
        </label>

        <label className={s['settings-profile-form__row']}>
          <span className={s['settings-profile-form__row-subtitle']}>Facebook: <span>{facebook}</span></span>
          <input className={s['settings-profile-form__row-input']}
            type="text"
            name="contacts.facebook"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.contacts.facebook}
          />
          {
            formik.errors.contacts?.facebook &&
            <span className={s['settings-profile-form__row-error']}>{formik.errors.contacts?.facebook}</span>
          }
        </label>

        <label className={s['settings-profile-form__row']}>
          <span className={s['settings-profile-form__row-subtitle']}>Twitter: <span>{twitter}</span></span>
          <input className={s['settings-profile-form__row-input']}
            type="text"
            name="contacts.twitter"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.contacts.twitter}
          />
          {
            formik.errors.contacts?.twitter &&
            <span className={s['settings-profile-form__row-error']}>{formik.errors.contacts?.twitter}</span>
          }
        </label>

        <label className={s['settings-profile-form__row']}>
          <span className={s['settings-profile-form__row-subtitle']}>Instagram: <span>{instagram}</span></span>
          <input className={s['settings-profile-form__row-input']}
            type="text"
            name="contacts.instagram"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.contacts.instagram}
          />
          {
            formik.errors.contacts?.instagram &&
            <span className={s['settings-profile-form__row-error']}>{formik.errors.contacts?.instagram}</span>
          }
        </label>

        <label className={s['settings-profile-form__row']}>
          <span className={s['settings-profile-form__row-subtitle']}>Youtube: <span>{youtube}</span></span>
          <input className={s['settings-profile-form__row-input']}
            type="text"
            name="contacts.youtube"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.contacts.youtube}
          />
          {
            formik.errors.contacts?.youtube &&
            <span className={s['settings-profile-form__row-error']}>{formik.errors.contacts?.youtube}</span>
          }
        </label>

      </span>

      <button className={s['settings-profile-form__btn']} type='submit'>Сохранить</button>
    </form>
  );
}
