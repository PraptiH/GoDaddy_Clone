import trustPilot from '../../assets/trustpilot-logo.svg'

function RatingBar() {
    return (
        <>
            <div className="flex items-center justify-center pt-5 gap-3 lg:gap-5 overflow-hidden">
                <div className='flex items-center gap-2'>
                    <p className="text-sm hidden lg:block">Our customers say </p>
                    <p className="font-semibold text-lg">Excellent</p>
                </div>

                <div className='text-gray-400 font-extralight hidden lg:block'>|</div>

                <div className="flex items-center gap-0.5">
                    <svg className='w-4.5 lg:w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
                    <svg className='w-4.5 lg:w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
                    <svg className='w-4.5 lg:w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
                    <svg className='w-4.5 lg:w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
                    <svg className='w-4.5 lg:w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#DCDCE6"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>

                    <p className="text-xs hidden lg:block ml-5">4.4 out of 5 stars based on <span className="font-bold">137,810</span> reviews</p>
                </div>

                <div className='text-gray-400 font-extralight hidden lg:block'>|</div>

                <div className="flex items-center gap-1">
                    <img className='w-24 lg:w-25' src={trustPilot} alt="" />

                </div>
            </div>
        </>
    )
}

export default RatingBar