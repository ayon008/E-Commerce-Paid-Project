import React from 'react'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Chackout = () => {
    return (
        <section className='md:max-w-[1220px] mx-auto px-3 md:px-0'>
            <section className='flex justify-center pt-6'>
                <div className='flex flex-col mx-1 md:mx-0  md:flex-row gap-x-6'>
                    <div className='w-[330px]'>
                        <Carousel showArrows={true}>
                            <div>
                                <img className='md:rounded-[0px]' src="https://static-01.daraz.com.bd/p/cefac422b4f375c84910a9471531e6e0.jpg_750x750.jpg_.webp" alt="" />
                            </div>
                            <div>
                                <img className='md:rounded-[0px]' src="https://static-01.daraz.com.bd/p/cefac422b4f375c84910a9471531e6e0.jpg_750x750.jpg_.webp" alt="" />
                            </div>
                            <div>
                                <img src="assets/3.jpeg" />
                            </div>
                            <div>
                                <img src="assets/4.jpeg" />
                            </div>
                            <div>
                                <img src="assets/5.jpeg" />
                            </div>
                            <div>
                                <img src="assets/6.jpeg" />
                            </div>
                        </Carousel>
                    </div>
                    <div className='py-6 md:py-0'>
                        <p className='md:text-[22px] text-[15px] text-[#212121] md:max-w-[600px] '>badgeDEROL 8 Colourrr hfhfgf Bag Little Monster Capsule Mini Candy Matte Lipstick - DR040</p>
                        <p><span className='text-[#444] text-[14px]'>Brand:</span> <span className='text-[#1a9cb7] cursor-pointer text-[14px]'>Derol</span></p>
                        <div className='pt-5'>
                            <p className='text-primaryColor1 text-[18px]  md:text-[29px] font-normal'>৳ 220</p>
                            <p className="text-[13px]"><span className="line-through text-slate-400">ট300 </span><span className="pl-1"> -30%</span> </p>
                        </div>
                        <div class="">
                            <span class="text-[25px] bg-[#eff0f5] text-[#9e9e9e] cursor-pointer px-2">-</span>
                            <input className='text-center w-[10%] mx-3' type="text" value="1" />
                            <span class="text-[25px] bg-[#eff0f5] text-[#9e9e9e] cursor-pointer px-1">+</span>
                        </div>

                        <div className='flex gap-x-3 pt-6'>
                            <Link to="/shipping"><button className='text-white bg-[#2abbe8] md:px-[87px] px-[29px] md:py-[9.5px] py-[8px] rounded-[1.8px] hover:scale-105 duration-50000 transition-all'>Buy Now</button></Link>
                            <button className='text-white bg-[#f57224] md:px-[87px] px-[22px] md:py-[9.5px] py-[8px] rounded-[1.8px] hover:scale-105 duration-50000 transition-all'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Chackout

