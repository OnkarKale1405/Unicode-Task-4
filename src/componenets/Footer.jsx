import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container-xl bg-gray-100 h-96">
                <div className=" h-3/4 w-4/5 mx-auto relative top-8 flex justify-evenly">
                    <div className='w-1/3 h-3/4 self-center'>
                        <p className='text-2xl m-4 ml-0'>Company Name</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aut illum fugiat.
                            Facere mollitia modi incidunt? Est laudantium assumenda quae facilis voluptatem
                            architecto quis, iste, illo nihil ipsum dolorem fugiat.</p>
                    </div>

                    <div className="follow-us flex flex-col self-center mb-12">
                        <h3 className='my-4 text-xl mx-auto'>Follow us</h3>
                        <div className='flex'>
                            <div className="discord mx-1">
                                <img className='h-12 w-12 rounded-full' src="https://media.tenor.com/5a7v-p3E5pkAAAAC/discord.gif" alt="discord" />
                            </div>
                            <div className="instagram mx-1">
                                <img className='h-12 w-12 rounded-full' src="https://tse2.mm.bing.net/th?id=OIP.9rn8esAmcUOyDwRBsqx5-wHaHa&pid=Api&P=0&h=180" alt="discord" />
                            </div>
                            <div className="facebook mx-1">
                                <img className='h-12 w-12 rounded-full' src="https://s3.amazonaws.com/freebiesupply/large/2x/facebook-logo-circle-transparent.png" alt="discord" />
                            </div>
                        </div>
                    </div>

                    <div className="contact-us self-center mb-16">
                        <p className='my-2'>Company@gmail.com</p>
                        <p>+912341043894</p>
                    </div>
                </div>
                <hr className='h-px mx-1 my-2 bg-black border-0 dark:bg-gray-700' />
                <div className="last-content mx-auto flex justify-center">
                    <p>Rights Reservered @2024</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer
