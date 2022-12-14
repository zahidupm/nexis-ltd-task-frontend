import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/ultimate hrm logo-05-02 2.png';
import { auth } from '../../configs/firebase.config';
import { AuthContext } from '../../contexts/auth.context';

const Attendance = () => {
    const {user} = useContext(AuthContext);
    const {status} = {};
    return (
        <div className=''>
            <div className='mx-10 py-6'>
                <img src={Logo} alt="" />
            </div>
            <div className='flex items-center justify-center'>
            <button className='bg-[#1678CB] px-10 rounded-md py-2 text-center text-xl font-semibold text-white'>Attendance information</button>
            {user ? <button onClick={() => signOut(auth)} className='bg-[#1678CB] px-10 rounded-md py-2 text-center text-xl font-semibold text-white'>LogOut</button>
            :    <Link to='/login'>
                <button className='bg-[#1678CB] px-10 rounded-md py-2 text-center text-xl font-semibold text-white'>LogOut</button>
            </Link> 
        }
            </div>
            <div className='mx-10 py-6'>
            <div class="overflow-x-auto relative">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Date
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Employee Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                12/4/22
                            </th>
                            <td class="py-4 px-6">
                                Zahid Hasan
                            </td>
                            <td class="py-4 px-6">
                            {status === 'present' ? <p>Present</p> : <p>Absent</p> }
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                12/5/22
                            </th>
                            <td class="py-4 px-6">
                                Hasan Zahid
                            </td>
                            <td class="py-4 px-6">
                                {status === 'present' ? <p>Present</p> : <p>Absent</p> }
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                12/4/22
                            </th>
                            <td class="py-4 px-6">
                                Zahid Hasan
                            </td>
                            <td class="py-4 px-6">
                            {status === 'present' ? <p>Present</p> : <p>Absent</p> }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default Attendance;