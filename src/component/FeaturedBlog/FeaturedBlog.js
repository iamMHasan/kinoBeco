import React from 'react'
import HeadingText from '../Heading text/HeadingText'
import blog1 from '../../image/blog1.jpg'
import blog2 from '../../image/blog2.jpg'

const data = [
    {
        id: 1,
        title: 'Unleash Your Ride.',
        image: blog1
    },
    {
        id: 2,
        title: 'Ride. Explore. Repeat.',
        image: blog2
    }
]

const FeaturedBlog = () => {
    return (
        <div className='w-[90%] mx-auto font-Tilt'>
            <HeadingText main={'Featured Blog'} title={'Read the latest blog'} />
            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>

                {
                    data.map(blog => (
                        <section data-aos='fade-left' key={blog.id} class="flex-1 ">
                            <div class="h-fit w-fit group">
                                <div class="relative overflow-hidden">
                                    <img class="h-96 w-full object-cover" src={blog.image} alt="" />
                                    <p className='absolute inset-0 flex text-center items-center justify-center text-4xl uppercase font-black text-black'>{blog.title}</p>
                                    <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedBlog
