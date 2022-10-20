import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_USER_ID

const Contact = () => {
  const form = useRef()

  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        toast.success('Email was sent')
        navigate('/')
      },
      (error) => {
        toast.error('Oops! Something went wrong')
      }
    )
  }

  return (
    <div className='hero'>
      <div className='hero-content w-screen flex-col '>
        <div className='text-center '>
          <h1 className='text-5xl font-bold'>Contact Me</h1>
          <p className='py-6 text-xl'>
            I am currently accepting new freelance clients and looking for full
            time work
          </p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100'>
          <div className='card-body'>
            <form ref={form} onSubmit={onSubmit}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='text'
                  name='reply_to'
                  placeholder='email'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  name='from_name'
                  placeholder='name'
                  className='input input-bordered '
                />
              </div>
              <textarea
                name='message'
                className='textarea text-area-ghost w-full '
                placeholder='Your message here'
              ></textarea>
              <div className='form-control mt-6'>
                <button className='btn text-bold btn-info'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
