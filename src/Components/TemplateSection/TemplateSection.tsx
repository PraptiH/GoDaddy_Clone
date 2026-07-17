import { useState } from 'react'
import artGallery from '../../assets/koartgallerytemplate1_mobile.webp'
import bookStore from '../../assets/kobookstoretemplate_mobile.webp'
import healthAlterative from '../../assets/kohealthalternativetemplate_desktop.webp'
import homeHouse from '../../assets/kohomehousewarestemplate_desktop.webp'
import furniture from '../../assets/koretailfurniturebttemplate_desktop.webp'
import singleProduct from '../../assets/retailsingleproduct_mobile.webp'
import musicTemplate from '../../assets/komusicmusicianbttemplate_desktop.webp'

function TemplateSection() {

    const imgArr: string[] = [musicTemplate, singleProduct, healthAlterative, bookStore, furniture, artGallery, homeHouse]
    const duplicateImgArr: string[] = [...imgArr, ...imgArr]
    const [isPaused, setIsPaused] = useState(false)

    const replayPauseBtn = () => {
        setIsPaused(!isPaused)
    }

    return (
        <>
            <div className="bg-slate-100 pt-20 pb-10 my-15">
                <div className="text-center space-y-6">
                    <h1 className="font-bold text-5xl tracking-wide">Templates designed to sell</h1>
                    <p className="text-lg">Choose from 100s of designs for every idea and industry.</p>
                </div>

                <div className="overflow-hidden pt-15 pb-10">
                    <div className={`imgMarquee flex w-max gap-12 
                        ${isPaused ? "paused" : ''
                        }`}>
                        {duplicateImgArr.map((img, index) => (
                            <div className='group relative shrink-0 cursor-pointer'
                                key={index}>
                                <img
                                    src={img}
                                    alt=""
                                    className="h-125 rounded-xl"
                                />

                                <div className=" absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                                ></div>

                                <div className='absolute inset-0 opacity-0 flex flex-col justify-center items-center gap-3 group-hover:opacity-100 transition-opacity duration-300'>
                                    <button className="group/button bg-white font-semibold text-black px-12 py-4 rounded-lg flex items-center gap-2 cursor-pointer transition-all duration-500 ease-in-out">
                                        Start Editing

                                        <svg className="w-5 hidden transition-all group-hover/button:block"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z" />
                                        </svg>
                                    </button>

                                    <p className='text-white hover:underline hover:scale-102 font-medium text-xl'>Preview</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

                <button className="bg-black font-medium text-white w-1/6 mx-auto  group cursor-pointer object-cover py-4 rounded-lg flex items-center justify-center transition-all ease-in duration-500 hover:scale-x-102">Browse All Templates
                    <svg className="hidden group-hover:block" xmlns="http://www.w3.org/2000/svg" width="35" height="24"
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                    </svg>
                </button>

                <div className='flex justify-end pr-15 -translate-y-6'>
                    <button className='rounded-full bg-gray-600 hover:bg-black p-2 cursor-pointer' onClick={replayPauseBtn}>
                        {
                            isPaused ? (
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    fill="currentColor" viewBox="0 0 24 24"
                                    className='text-white w-3'>
                                    <path d="M8 6.65v10.69c0 .64.76.99 1.24.56l6.11-5.35c.34-.3.34-.83 0-1.13L9.24 6.07C8.76 5.65 8 5.99 8 6.63Z"></path>
                                </svg>

                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    fill="currentColor" viewBox="0 0 24 24"
                                    className='text-white w-3'>
                                    <path d="M6 18h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1M7 8h2v8H7zm7-2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm3 10h-2V8h2z"></path>
                                </svg>
                            )
                        }
                    </button>
                </div>
            </div>
        </>
    )
}

export default TemplateSection