import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import Notification from '../ui/Notification';

const ContactForm = () => {
    const [invalidInput, setInvalidInput] = useState(false)
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();
    const [currentStatus, setCurrentStatus] = useState()
    const [errorHandler, setErrorHandler] = useState()


    async function contactFormHandler(e) {

        e.preventDefault();
        const enterdEmail = emailRef.current.value;
        const enterdName = nameRef.current.value;
        const enterdMessage = messageRef.current.value;
        //Validation Form inputs in client side
        if (!enterdEmail || !enterdEmail.includes('@') || !enterdName || enterdName.trim() === '' || !enterdMessage || enterdMessage.trim() === '') {
            setInvalidInput(true);
            return
        }
        //Send Form data to Api Route...
        setCurrentStatus('pending')
        try {
            const response = await axios.post('/api/contact', { email: enterdEmail, name: enterdName, message: enterdMessage })
            setCurrentStatus('success')
            console.log(response.data)
        } catch (error) {
            setErrorHandler(error.message)
            console.log(error.message)
            setCurrentStatus('error')
        }

        //Make Reset Form Value...
        emailRef.current.value = '';
        nameRef.current.value = '';
        messageRef.current.value = '';
    }

    //Notification Codes
    let notification;
    if (currentStatus === 'pending') {
        notification = {
            status: 'pending',
            title: "Sending message...",
            message: "Your message is on its way ! ",

        }
    }
    if (currentStatus === 'success') {
        notification = {
            status: 'success',
            title: "Success!",
            message: "Message sent Successfully!",

        }
    }
    if (currentStatus === 'error') {
        notification = {
            status: 'error',
            title: "Error!",
            message: errorHandler.message || "Something went wrong !",

        }
    }
    useEffect(() => {
        if (currentStatus === 'success' || currentStatus === 'error') {
            let timer;
            timer = setTimeout(() => {
                setCurrentStatus(null)
            }, 3000)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [currentStatus])




    return (
        <>
            <div className='max-w-[700px] mx-auto bg-slate-400 rounded-md mt-8 h-fit p-14'>
                <h1 className='text-4xl font-bold text-center p-4'>How Can I Help You?</h1>
                <form onSubmit={contactFormHandler} autoComplete='off' className='flex flex-col gap-4'>
                    <div className='flex justify-between  gap-2'>
                        <div >
                            <label htmlFor="email" className='text-2xl font-bold'>Your Email:</label>
                            <input ref={emailRef} type="email" id="email" className='w-full rounded-md p-2 text-xl' />
                        </div>
                        <div >
                            <label htmlFor="name" className='text-2xl font-bold'>Your Name:</label>
                            <input ref={nameRef} type="text" id="name" className='w-full rounded-md p-2 text-xl' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message" className='text-2xl font-bold'>Your Message:</label>
                        <textarea ref={messageRef} id="message" rows="5" className='rounded-md p-2 text-xl' />
                    </div>
                    <div>
                        <button className='px-4 py-1 bg-purple-800 text-white rounded-md text-xl'>Send Message</button>
                    </div>

                </form>
                {invalidInput && <p className='text-center  text-lg text-red-800'>Please enter valid data</p>}

            </div>
            {notification && <Notification title={notification.title} message={notification.message} status={notification.status} />}
        </>
    )
}

export default ContactForm