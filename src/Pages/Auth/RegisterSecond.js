import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import SignImg from '../../assets/img/istockphoto-1321277096-612x612 1.png';
import Logo from '../../assets/img/ultimate hrm logo-05-02 2.png';
import PrimaryButton from '../../components/Button/PrimaryButton';

const RegisterSecond = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const mobile_number = `${e.target.country_code.value} ${e.target.mobile_number.value}`
        console.log(mobile_number);
        saveUser(mobile_number);
    }

      // save user
      const saveUser = (mobile_number) => {
        const user = {mobile_number}
        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          swal({title: "Number saved successful", icon: "success"});
          navigate('/register_final')
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
                            <h3 className='font-semibold text-xl text-center mt-[110px] mb-[80px]'>Sign up Form</h3>
                            <div className='px-[50px]'>
                            <form
                            onSubmit={handleSubmit}
                                noValidate=''
                                action=''
                                className='space-y-6 ng-untouched ng-pristine ng-valid'
                                >
                                <div className='space-y-4'>
                                    <div className='flex justify-between'>
                                    <input
                                        type='text'
                                        name='country_code'
                                        id='country_code'
                                        required
                                        placeholder='+880'
                                        className='w-[25%] mr-[2%] px-3 py-2 border-[#B4B4B4] border-b-2 focus:outline-none text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                    <input
                                        type='text'
                                        name='mobile_number'
                                        id='mobile_number'
                                        required
                                        placeholder='1XXXXXXXXX'
                                        className='w-[73%] px-3 py-2 border-[#B4B4B4] border-b-2 focus:outline-none text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                    </div>
                                    {/* <div className='pt-[35px]'>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        required
                                        placeholder='Write Email Address'
                                        className='w-full px-3 py-2 border-[#B4B4B4] border-b-2 focus:outline-none text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                    </div> */}
                                </div>

                                <div className='flex items-center'>
                                    <div>
                                        <Link to='/register'>
                                            <button className='text-black mt-8'>
                                                Back
                                            </button>
                                        </Link>
                                    </div>
                                        <div className="flex items-center justify-center pt-[40px] pl-24">
                                        <PrimaryButton
                                        type='submit'
                                        classes='flex items-center justify-center submit-btn px-8 py-3 font-semibold rounded-xl'
                                        >
                                        Next Step <FaArrowRight className='ml-2'/>
                                        </PrimaryButton>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <div className='mt-20'>
                             <p className='px-6 text-sm text-center text-gray-400'>
                                Already have an account yet?{' '}
                                <Link to='/login' className='hover:underline uppercase text-[#1678CB] font-semibold'>
                                    SignIn here
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

export default RegisterSecond;