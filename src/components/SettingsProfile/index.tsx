import React, { useEffect } from 'react';
import s from './SettingsProfile.module.scss';
import { SettingsProfileForm } from './SettingsProfileForm';
import { useSelector, useDispatch } from 'react-redux';
import { getProfileDataSelect } from '../../selectors/profile-select';
import { setProfileThunk } from '../../redux/profile-reducer';
import { getAuthIdSelect } from '../../selectors/auth-select';
import { Loading } from '../../utils/Loading/Loading';


export type PropsType = {

}

export const SettingsProfile: React.FC<PropsType> = React.memo((props) => {

  // const { } = props
  const dispatch = useDispatch()
  const id = useSelector(getAuthIdSelect)

  useEffect(() => {
    if (id) {
      dispatch(setProfileThunk(id))
    }
  }, [dispatch, id])

  let profile = useSelector(getProfileDataSelect)
  const { fullName, contacts, lookingForAJobDescription, lookingForAJob } = profile
  const { mainLink, website, github, vk, facebook, twitter, instagram, youtube } = contacts

  return (
    <div className={s.settings}>
      <div className={s.settings__form}>
        <h3 className={s.settings__title}>Настройки профиля</h3>
        {
          profile.userId === id ?
            <SettingsProfileForm
              fullName={fullName}
              lookingForAJob={lookingForAJob}
              lookingForAJobDescription={lookingForAJobDescription}
              mainLink={mainLink}
              website={website}
              github={github}
              vk={vk}
              facebook={facebook}
              twitter={twitter}
              instagram={instagram}
              youtube={youtube}
            /> :
            <Loading />
        }
      </div>
    </div>
  );
})
