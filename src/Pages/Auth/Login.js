import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
                    <div className="flex flex-col space-y-8 lg:col-span-3">
                         {/*  */}
                         

                    </div>
                    <div className="lg:col-span-2">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        20 Nov 2020
                    </p>
                    <div className="mb-3">
                        <a
                        href="/"
                        aria-label="Article"
                        className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                        <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                            What it means when a man falls from outer space
                        </p>
                        </a>
                    </div>
                    <p className="mb-4 text-base text-gray-700 md:text-lg">
                        Call it magical realism, call it realistic fantasy—call it whatever
                        you want, but Arimah's playfully subversive style is wholly her own.
                    </p>
                    <div className="flex items-center">
                        <a href="/" aria-label="Author" className="mr-3">
                        <img
                            alt="avatar"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            className="object-cover w-10 h-10 rounded-full shadow-sm"
                        />
                        </a>
                        <div>
                        <a
                            href="/"
                            aria-label="Author"
                            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Petru Vîrtos
                        </a>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                            Author
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