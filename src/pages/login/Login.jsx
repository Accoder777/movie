import styles from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

const Login = () => {

  const navigator = useNavigate();

  // formik part in here
  const formik = useFormik({
    initialValues:{
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, {setSubmitting, resetForm})=>{
        setTimeout(() => {
          console.log(values)
          if(values.email === "Rozimurod@gmail.com" && values.password === "secret"){
            toast.success('Welcome to your website')
            navigator('/dashboard')
            resetForm();
          }else{
            toast.error('email or password is incorrect')
            resetForm();
          }
          setSubmitting(false)
        }, 5000);
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.loginImage}>
        <img src="/assets/image/person.png" alt="Pic" />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.loginForm}>
          <h1 className={styles.title}>Login</h1>
          <div className={styles.loginBox}>
            <div className={styles.inputIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input
              autoComplete='off' 
              className={styles.loginInput} 
              type="text" 
              placeholder='Email'
              autoFocus
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
            />
          </div>
          {
            formik.errors.email && formik.touched.email &&(
              <p className={styles.errMsg}>{formik.errors.email}</p>
            )}
          <div className={styles.loginBox}>
            <div className={styles.inputIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.28 13.6099C15.15 14.7399 13.53 15.0899 12.1 14.6399L9.50995 17.2199C9.32995 17.4099 8.95995 17.5299 8.68995 17.4899L7.48995 17.3299C7.08995 17.2799 6.72995 16.8999 6.66995 16.5099L6.50995 15.3099C6.46995 15.0499 6.59995 14.6799 6.77995 14.4899L9.35995 11.9099C8.91995 10.4799 9.25995 8.85989 10.39 7.72989C12.01 6.10989 14.65 6.10989 16.28 7.72989C17.9 9.33989 17.9 11.9799 16.28 13.6099Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.4501 16.2799L9.6001 15.4199" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.3944 10.7H13.4034" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input
              autoComplete='off' 
              className={styles.loginInput} 
              type="password" 
              placeholder='Password'
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}

            />
          </div>
          {
            formik.errors.password && formik.touched.password &&(
              <p className={styles.errMsg}>{formik.errors.password}</p>
            )
          }
          <button type='submit' className={styles.submitBtn} disabled={formik.isSubmitting}>
            {
              formik.isSubmitting?(
                 "Loading..." 
              ):(
                "Submit"
              )
            }
            </button>
        </div>
      </form>
    </div>
  )
}

export default Login