import domains from '../../assets/domains.avif'
import craft from '../../assets/craft.avif'

function ProductGrid() {
    return (
        <>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-5 my-5'>
                <div className='relative w-1/3 cursor-pointer hover:shadow-2xl'>
                    <img className='rounded-xl' src={domains} alt="" />
                    <div className='absolute top-3/4 -translate-y-1/5  w-full px-6 space-y-2'>
                        <p className='font-semibold text-xl'>Domains</p>
                        <p className='text-sm tracking-wide'>Get started with the perfect domain, which comes with free domain privacy protection forever.</p>
                        <button className='bg-black text-white font-medium text-xs px-3 py-4 rounded-lg cursor-pointer hover:scale-105'>Search Domains</button>
                    </div>
                </div>

                <div className='relative w-1/3 cursor-pointer hover:shadow-2xl'>
                    <img className='rounded-xl' src={craft} alt="" />
                    <div className='absolute top-3/4 -translate-y-1/3  w-full px-6 space-y-2'>
                        <p className='bg-sky-300 font-medium w-28 px-1 rounded-sm text-nowrap'>FREE DOMAIN</p>
                        <p className='font-semibold text-xl'>Website Builder</p>
                        <p className='text-sm tracking-wide'>Free domain with annual plans. Save time and money and get your site built quickly.</p>
                        <button className='bg-black text-white font-medium text-xs px-3 py-4 rounded-lg cursor-pointer hover:scale-105'>Create Your site</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductGrid