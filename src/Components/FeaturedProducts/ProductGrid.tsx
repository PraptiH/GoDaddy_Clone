import domains from '../../assets/domains.avif'
import craft from '../../assets/craft.avif'
import domainMedium from '../../assets/domains-medium.avif'
import craftMedium from '../../assets/craft-medium.avif'
import domainSmall from '../../assets/domains-small.avif'
import craftSmall from '../../assets/craft-small.avif'

function ProductGrid() {
    return (
        <>
            {/* Large Device */}
            <div className='hidden lg:flex items-center justify-center gap-5 my-5'>
                <div className='relative w-1/3 h-120  cursor-pointer hover:shadow-xl'>
                    <img className='rounded-xl w-full h-150 object-cover' src={domains} alt="" />
                    <div className='absolute top-8/9 px-6 w-full space-y-2'>
                        <p className='font-semibold text-xl'>Domains</p>
                        <p className='text-sm tracking-wide'>Get started with the perfect domain, which comes with free domain privacy protection forever.</p>
                        <button className='bg-black text-white font-medium text-xs px-3 py-4 rounded-lg cursor-pointer hover:scale-105'>Search Domains</button>
                    </div>
                </div>

                <div className='relative w-1/3 h-120 cursor-pointer hover:shadow-xl'>
                    <img className='rounded-xl w-full h-150 object-cover' src={craft} alt="" />
                    <div className='absolute top-5/6 px-6 w-full space-y-2'>
                        <p className='bg-sky-300 font-medium w-26 px-1 rounded-sm text-sm text-nowrap'>FREE DOMAIN</p>
                        <p className='font-semibold text-xl'>Website Builder</p>
                        <p className='text-sm tracking-wide'>Free domain with annual plans. Save time and money and get your site built quickly.</p>
                        <button className='bg-black text-white font-medium text-xs px-3 py-4 rounded-lg cursor-pointer hover:scale-105'>Create Your site</button>
                    </div>
                </div>
            </div>

            {/* Medium Device */}
            <div className='hidden lg:hidden md:flex flex-col items-center justify-center gap-5 my-5'>
                <div className='relative min-w-3/5 max-w-4/5 cursor-pointer hover:shadow-xl'>
                    <img className='rounded-xl object-cover' src={domainMedium} alt="" />
                    <div className='absolute top-1/2 -translate-y-1/2 w-1/2 px-6 space-y-2'>
                        <p className='font-semibold text-xl'>Domains</p>
                        <p className='text-sm tracking-wide'>Get started with the perfect domain, which comes with free domain privacy protection forever.</p>
                        <button className='bg-black text-white font-medium text-xs px-3 py-4 rounded-lg cursor-pointer hover:scale-105'>Search Domains</button>
                    </div>
                </div>

                <div className='relative min-w-3/5 max-w-4/5 cursor-pointer hover:shadow-xl'>
                    <img className='rounded-xl object-cover' src={craftMedium} alt="" />
                    <div className='absolute top-1/2 -translate-y-1/2 w-1/2 px-6 space-y-2'>
                        <p className='bg-sky-300 font-medium w-26 px-1 rounded-sm text-sm text-nowrap'>FREE DOMAIN</p>
                        <p className='font-semibold text-xl'>Website Builder</p>
                        <p className='text-sm tracking-wide'>Free domain with annual plans. Save time and money and get your site built quickly.</p>
                        <button className='bg-black text-white font-medium text-xs px-3 py-4 rounded-lg cursor-pointer hover:scale-105'>Create Your site</button>
                    </div>
                </div>
            </div>

            {/* Small Device */}
            <div className='flex flex-col md:hidden lg:hidden items-center justify-center gap-8 my-5'>


                <div className='relative min-w-3/5 max-w-4/5 cursor-pointer hover:shadow-xl'>
                    <img className='rounded-xl h-100 object-cover' src={domainSmall} alt="" />
                    <div className='absolute top-3/4 -translate-y-1/4 w-full px-6 space-y-2'>
                        <p className='font-semibold text-xl'>Domains</p>
                        <p className='text-sm tracking-wide'>Get started with the perfect domain, which comes with free domain privacy protection forever.</p>
                        <div className='flex justify-end'>
                            <svg className='w-6' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 404.39">
                                <path fill-rule="nonzero" d="M438.95 219.45 0 219.99v-34.98l443.3-.55L269.8 25.79 293.39 0 512 199.92 288.88 404.39l-23.59-25.8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className='relative min-w-3/5 max-w-4/5 cursor-pointer hover:shadow-xl'>
                    <img className='rounded-xl h-100 object-cover' src={craftSmall} alt="" />
                    <div className='absolute top-3/4 -translate-y-1/4 w-full px-6 space-y-2'>
                        <p className='font-semibold text-xl'>Website Builder</p>
                        <p className='text-sm tracking-wide'>Free domain with annual plans. Save time and money and get your site built quickly.</p>
                        <div className='flex justify-end'>
                            <svg className='w-6' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 404.39">
                                <path fill-rule="nonzero" d="M438.95 219.45 0 219.99v-34.98l443.3-.55L269.8 25.79 293.39 0 512 199.92 288.88 404.39l-23.59-25.8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductGrid