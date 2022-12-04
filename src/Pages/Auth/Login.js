import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import SignImg from '../../assets/img/istockphoto-1321277096-612x612 1.png';
import Logo from '../../assets/img/ultimate hrm logo-05-02 2.png';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { AuthContext } from '../../contexts/auth.context';

const Login = () => {
    const {singIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: ""
    })

    const handleEmail = (e) => {
        const email = e.target.value;
        console.log(email);
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          setErrors({...errors, email: "Please provide a valid email"});
          setUserInfo({...userInfo, email: ''});
        } else {
          setErrors({...errors, email: ''});
          setUserInfo({...userInfo, email: e.target.value});
        }
      }

      const handlePassword = (e) => {
        const password = e.target.value;
        console.log(password);
    
        const lengthError = password.length < 8;
        const noSymbolError = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);
        const noCapitalLetterError = !/[A-Z]{1,}/.test(password);
    
        if(lengthError) {
          setErrors({...errors, password: 'Must be at least 8 character'});
          setUserInfo({...userInfo, password: ''});
        } else if(noSymbolError) {
          setErrors({...errors, password: 'At least 1 Especial character'});
          setUserInfo({...userInfo, password: ''})
        } else if(noCapitalLetterError) {
          setErrors({...errors, password: 'At least 1 Uppercase character'});
          setUserInfo({...userInfo, password: ''});
        } else {
          setErrors({...errors, password: ''});
          setUserInfo({...userInfo, password: e.target.value});
        }
      }

      const handleSubmit = (e) => {
        e.preventDefault();

        singIn(userInfo.email, userInfo.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            swal({title: "Login Successful", icon: "success"});
            navigate('/attendance');
        })
        .catch(error => {
            console.error(error);
            setErrors({...errors, general: error.message})
        })
      }


    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
                    <div className="flex flex-col space-y-8 lg:col-span-3">
                         <img  className='w-[164px] h-[60px]' src={Logo} alt="" />
                         <img className='w-[612px] h-[437px]' src={SignImg} alt="" />

                    </div>
                    <div className="lg:col-span-2 ">
                        <div className='h-[630px] w-[500px] rounded-md shadow-gray-300 login-form border-gray-100'>
                            <h3 className='font-semibold text-xl text-center mt-[110px] mb-[80px]'>Log in Form</h3>
                            <div className='px-[50px]'>
                            <form
                            onSubmit={handleSubmit}
                                noValidate=''
                                action=''
                                className='space-y-6 ng-untouched ng-pristine ng-valid'
                                >
                                <div className='space-y-4'>
                                    <div>
                                    <input
                                    onChange={handleEmail}
                                        type='email'
                                        name='email'
                                        id='email'
                                        required
                                        placeholder='Write Email Address'
                                        className='w-full px-3 py-2  border-b-2 focus:outline-none text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                    {errors.email && <p className='error-message'>{errors.email}</p>}
                                    </div>
                                    <div className='pt-[35px]'>
                                    <input
                                    onChange={handlePassword}
                                        type='password'
                                        name='password'
                                        id='password'
                                        required
                                        placeholder='Write Password'
                                        className='w-full px-3 py-2 border-b-2 focus:outline-none text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                    {errors.password && <p className='error-message'>{errors.password}</p>}
                                    </div>
                                </div>

                                <div className="flex items-center justify-center pt-[40px]">
                                    <PrimaryButton
                                    type='submit'
                                    classes='flex items-center justify-center submit-btn px-8 py-3 font-semibold rounded-xl'
                                    >
                                    Log in
                                    </PrimaryButton>                                    
                                </div>
                                {errors.general && <p className='error-message d-block'>{errors.general}</p>}
                                </form>
                            </div>
                            <div className='mt-20'>
                             <p className='px-6 text-sm text-center text-gray-400'>
                                Don't have an account yet?{' '}
                                <Link to='/register' className='hover:underline uppercase text-[#1678CB] font-semibold'>
                                    Signup here
                                </Link>
                                .
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;