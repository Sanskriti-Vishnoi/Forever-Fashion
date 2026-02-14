import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
    <div className='text-2xl text-center pt-8 border-t'>
     <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16 '>
     <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
     <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis dolor modi molestiae perspiciatis! Quasi et non nisi cumque explicabo unde modi reiciendis, commodi officia odit harum tempora temporibus voluptate dolorem magnam recusandae ad quis.</p>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quibusdam, eos temporibus aperiam rerum voluptatum impedit ratione eveniet reprehenderit mollitia nisi atque, eum molestias illo id saepe aliquam consectetur ipsum enim! Tenetur nulla dolore deserunt, beatae deleniti autem! Ratione, minus?</p>
        <b className='text-gray-800'>Our Mission</b>    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quia aspernatur voluptates, molestiae nihil dolore necessitatibus odio libero ipsum aliquid, deleniti harum pariatur rerum consectetur? Quibusdam itaque alias voluptas doloremque quae blanditiis animi vero inventore!</p>
     </div>
    </div>

    <div className='text-xl py-4 '>
     <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
       <b>Quality Assurance:</b>
       <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum et ipsum error illo?</p>
     </div>
     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
       <b>Convenience:</b>
       <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod, quaerat alias quae, fugiat perspiciatis laborum debitis repudiandae vero animi quam deserunt?</p>
     </div>
     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
       <b>Exceptional Customer Service:</b>
       <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsa quisquam fugiat aspernatur veniam itaque eos libero accusamus. Expedita, molestiae adipisci! Illo, reiciendis dicta iste in ea eaque quis?</p>
     </div>
    </div>

    <NewsletterBox/>

    </div>
  )
}

export default About
