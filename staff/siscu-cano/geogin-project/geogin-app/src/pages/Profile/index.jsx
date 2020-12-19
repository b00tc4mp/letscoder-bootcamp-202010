import React, { useState, useEffect } from 'react'
import { useBodyClass } from '../../hooks/useBodyClass'
import { retrieveUser } from '../../logic'
import updateUser from '../../logic/update-user'
import { ProfileWrapper } from './styles'
import { UploadImage } from '../../components/UploadImage'
import avatarDefault from '../../assets/images/default-avatar.png'
import { MdFavorite } from 'react-icons/md'
import { GiTrophyCup } from 'react-icons/gi'
import { IoLogoGameControllerA } from 'react-icons/io'
import { RiSave3Fill } from 'react-icons/ri'
import { IoEye, IoEyeOff } from 'react-icons/io5'

const ICON_SIZE = '22px'

export const Profile = () => {
  const [userState, setUserState] = useState(false)
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [image, setImage] = useState()
  const [password, setPassword] = useState()
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown)
  }

  useBodyClass('profile')

  const handleUpdateData = event => {
    const token = window.sessionStorage.token
    event.preventDefault()
    try {
      updateUser(
        token,
        fullName,
        email,
        undefined,
        image,
        undefined,
        undefined,
        (error, res) => {
          if (error) console.log(error)
          console.log(res)
        }
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  const retrieveUserState = token => {
    try {
      retrieveUser(token, (error, user) => {
        if (error) return window.alert(error.message)
        console.log('USER RETRIEVE:', user)
        setUserState(user)
      })
    } catch (error) {
      window.alert(error.message)
    }
  }

  useEffect(() => {
    const token = window.sessionStorage.token
    retrieveUserState(token)
  }, [])

  return (
    <ProfileWrapper>
      <header>
        <figure>
          <img
            className='profile__image'
            src={image || userState.image || avatarDefault}
          />
          <figcaption>{fullName || userState.fullname}</figcaption>
        </figure>
      </header>
      <section>
        <div className='additional-info'>
          <div className='favourite'>
            <MdFavorite className='menu-icon' size={ICON_SIZE} />
            <span>
              100 <em>favoritos</em>
            </span>
          </div>
          <div className='score'>
            <GiTrophyCup className='menu-icon' size={ICON_SIZE} />
            <span>
              {userState.score} <em>puntos</em>
            </span>
          </div>
          <div className='games-created'>
            <IoLogoGameControllerA className='menu-icon' size={ICON_SIZE} />
            <span>
              100 <em>búsquedas</em>
            </span>
          </div>
        </div>
        <div className='modify-info'>
          <h2>Modificación perfil usuario:</h2>
          <form action=''>
            {/* <form onSubmit={handleSubmit}> */}
            <label htmlFor='name'>Nombre:</label>
            <input
              id='name'
              className='profile__name'
              type='text'
              onChange={event => setFullName(event.target.value)}
              name='fullname'
              placeholder='full name'
              defaultValue={userState.fullname}
            />
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              className='profile__email'
              type='text'
              onChange={event => setEmail(event.target.value)}
              name='email'
              placeholder='email'
              defaultValue={userState.email}
            />
            <div className='password-wrapper'>
              <label htmlFor='password'>Nuevo password:</label>
              <input
                id='password'
                className='profile__password'
                type={passwordShown ? 'text' : 'password'}
                onChange={event => setPassword(event.target.value)}
                name='password'
                placeholder='Password'
                defaultValue={userState.password}
              />
              <i className='icon-visibility' onClick={togglePasswordVisiblity}>
                {passwordShown
                  ? <IoEyeOff size={14} />
                  : <IoEye size={14} />}
              </i>
            </div>
            <UploadImage
              onUploadImage={image => setImage(image)}
              previewImage={image}
              preview={false}
            />
            <button onClick={handleUpdateData} className='btn'>
              <RiSave3Fill className='menu-icon' size={14} /> Guardar
            </button>
          </form>
        </div>
      </section>
    </ProfileWrapper>
  )
}
