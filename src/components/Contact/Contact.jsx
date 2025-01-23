import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    setFormError('');
    setFormSuccess('');

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData);

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!data.from_name || !data.from_email || !data.from_phone || !data.from_college || !data.message) {
      setFormError('All fields are required.');
      return;
    }

    if (!gmailRegex.test(data.from_email)) {
      setFormError('Please enter a valid Gmail address.');
      return;
    }

    if (!/^\d+$/.test(data.from_phone)) {
      setFormError('Please enter a valid phone number (numbers only).');
      return;
    }

    try {
      await emailjs.sendForm('service_uzkuv7l', 'template_wgckv3s', form.current, '3ERo9wAPnsHLrBSEo');
      setFormSuccess('Email sent successfully!');
      form.current.reset();
      
    } catch (error) {
      setFormError('Failed to send email.');
      console.error('Failed to send email:', error.text);
    }
  };

  return (
    <div className='bg-black flex flex-col items-center py-36 relative '>
      <div className='bg-blue-50 w-[95%] md:w-[80%] rounded-3xl flex flex-col items-center gap-10 md:gap-20 py-12 hover:scale-105 transition-transform duration-300 ease-in-out'>
        <div className="heading-text">
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold mt-4'>
            Contact Me
          </h1>
        </div>
        <div className="form-section flex justify-center items-center w-[100%]">
          <div className="form-content w-[90%]  relative">
            <form ref={form} onSubmit={sendEmail} className=''>
              <div className='flex flex-col'>
                <div className="first-form-content flex flex-col md:flex-row md:gap-12">
                  <div className='w-full mb-4'>
                    <div className="Name-content flex bg-gray-200 rounded-full py-3 px-3 items-center">
                      <img src="https://cdn-icons-png.flaticon.com/128/1067/1067566.png" alt="photoshop" className='h-[30px] w-[30px]' />
                      <input type="text" name="from_name" placeholder='Full Name' className='w-full h-8 md:h-12 bg-gray-200 p-2 rounded-full text-base sm:text-lg outline-none' autoComplete='on' required />
                    </div>
                  </div>

                  <div className='w-full mb-4'>
                    <div className="email-contents flex bg-gray-200 rounded-full py-3 px-3 items-center">
                      <img src="https://cdn-icons-png.flaticon.com/128/2165/2165061.png" alt="photoshop" className='h-[30px] w-[30px]' />
                      <input type="email" name="from_email" placeholder='Email' className='w-full bg-gray-200 h-8 md:h-12 p-2 rounded-full text-base sm:text-lg outline-none' pattern="[a-zA-Z0-9._%+-]+@gmail\.com" title="Please enter a valid Gmail address" required autoComplete='on' />
                    </div>
                  </div>
                </div>

                <div className="second-form-content flex flex-col md:flex-row md:gap-12">
                  <div className='w-full mb-4'>
                    <div className="Phone-content flex bg-gray-200 rounded-full py-3 px-3 items-center">
                      <img src="https://cdn-icons-png.flaticon.com/128/15634/15634417.png" alt="photoshop" className='h-[30px] w-[30px]' />
                      <input
                        type="tel"
                        name="from_phone"
                        placeholder='Mobile No.'
                        className='w-full h-8 md:h-12 p-2 rounded-full text-base sm:text-lg bg-gray-200 outline-none'
                        pattern="\d*"
                        title="Please enter a valid phone number (numbers only)"
                        required 
                        autoComplete='on'
                      />
                    </div>
                  </div>

                  <div className='w-full mb-4'>
                    <div className="collete-content flex bg-gray-200 rounded-full py-3 px-3">
                      <input
                        type="text"
                        name="from_college"
                        placeholder='Subject*'
                        className='w-full h-8 md:h-12 bg-gray-200 p-2 rounded-full text-base sm:text-lg outline-none' 
                        autoComplete='on'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full mb-4'>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full bg-gray-200 border-gray-200 rounded-2xl p-3 text-base sm:text-lg focus:outline-none"
                  required 
                  autoComplete='on'
                  placeholder='Message'
                ></textarea>
              </div>

              {formError && (
                <p className="text-red-500 text-sm mb-4">{formError}</p>
              )}
              {formSuccess && (
                <p className="text-green-500 text-sm mb-4">{formSuccess}</p>
              )}

              <div className="w-full flex justify-center mt-6">
                <button
                  type="submit"
                  className='bg-blue-600 text-white text-xl font-bold sm:text-xl border-none rounded-2xl px-12 py-3 hover:bg-black border-2 border-blue-5000 hover:border-blue-600 hover:shadow-xl shadow-md transition-all duration-700'
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="absolute-icon absolute bottom-14 md:bottom-6 right-0 md:mb-4 md:mr-4">
              <img src="https://cdn-icons-png.flaticon.com/128/924/924915.png" alt="photoshop" className='w-24 md:w-44' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
