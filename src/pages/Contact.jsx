const Contact = () => {
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
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
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
                placeholder='name'
                className='input input-bordered'
              />
            </div>
            <textarea
              className='textarea text-area-ghost'
              placeholder='Your message here'
            ></textarea>
            <div className='form-control mt-6'>
              <button className='btn text-bold btn-info'>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
