import DisclaimerSection from "./DisclaimerSection"
import logo from '../../assets/GoDaddy-White-Logo.png'
import { useState } from "react";

function Footer() {

    interface FooterSection {
        title: string;
        links: string[];
    }

    const footerSections: FooterSection[] = [
        {
            title: "About GoDaddy",
            links: [
                "About Us",
                "Careers",
                "Contact Us",
                "GoDaddy Blog",
                "Investor Relations",
                "Legal",
                "Trust Center",
            ],
        },
        {
            title: "Support",
            links: [
                "Product Support",
                "Report Abuse",
                "Resources",
                "Domain Registration Data Disclosure Policy",
            ],
        },
        {
            title: "Resources",
            links: [
                "Webmail",
                "WHOIS",
                "ICANN Confirmation",
                "Designers & Developers",
                "Corporate Domains",
                "Redeem Code",
                "Product Catalog",
                "Business Name Generator",
            ],
        },
        {
            title: "Partner Programs",
            links: [
                "Affiliates",
                "Reseller Programs",
                "GoDaddy Pro"
            ],
        },
        {
            title: "Account",
            links: [
                "Sign In to GoDaddy",
                "Renewals & Billing",
                "Create Account"
            ],
        },
        {
            title: "Shopping",
            links: [
                "Buy a Domain",
                "gTLD Domain Extensions",
                "Websites",
                "Business Email",
                "WordPress",
                "Hosting",
                "Web Security",
                "Logo Maker",
                "Phone Numbers",
            ]
        },
    ];

    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (title: string) => {
        setOpenSection(openSection === title ? null : title);
    };

    return (
        <>
            <DisclaimerSection />

            <div className="bg-black/90 text-gray-400 space-y-5 ">

                {/* Large Device */}
                <div className="hidden lg:block">
                    <div className="flex items-center gap-2 border-b border-gray-400 px-10 py-5">
                        <svg className="cursor-pointer" data-cy="godaddy-icon" aria-label="GoDaddy" width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2898 1.09579C20.4839 -0.650961 16.7898 -0.238551 13.4952 1.82921C10.2109 -0.237408 6.51458 -0.650961 3.71203 1.09579C-0.721244 3.86157 -1.26024 10.9856 2.5093 17.0062C5.28782 21.4467 9.63298 24.0468 13.5009 23.9989C17.3689 24.0468 21.7141 21.4467 24.4926 17.0062C28.2575 10.9856 27.7231 3.86157 23.2898 1.09579ZM4.54742 15.7358C3.76994 14.5054 3.18348 13.1647 2.80798 11.7591C2.4741 10.5393 2.34647 9.2725 2.43034 8.01081C2.59856 5.78653 3.50604 4.05349 4.98457 3.13042C6.46309 2.20735 8.41766 2.15366 10.4993 2.97734C10.8157 3.10437 11.1254 3.24736 11.4273 3.40574C10.2703 4.458 9.26448 5.66474 8.43826 6.99177C6.14953 10.6475 5.45147 14.7168 6.25023 17.9589C5.61391 17.2729 5.04378 16.5286 4.54742 15.7358ZM24.195 11.7591C23.819 13.1645 23.2326 14.5052 22.4556 15.7358C21.9594 16.5302 21.3893 17.276 20.7528 17.9635C21.4669 15.0561 20.9817 11.4952 19.2308 8.15475C19.2031 8.09951 19.164 8.05072 19.1161 8.01157C19.0682 7.97241 19.0126 7.94376 18.9529 7.92748C18.8932 7.91121 18.8308 7.90767 18.7696 7.91711C18.7084 7.92654 18.6499 7.94874 18.5979 7.98225L13.1393 11.3878C13.0896 11.4187 13.0464 11.4591 13.0123 11.5067C12.9783 11.5543 12.954 11.6081 12.9408 11.6651C12.9276 11.7221 12.9258 11.7811 12.9355 11.8388C12.9452 11.8965 12.9663 11.9517 12.9974 12.0012L13.7985 13.2796C13.8294 13.3293 13.8699 13.3723 13.9176 13.4064C13.9653 13.4404 14.0192 13.4647 14.0763 13.4778C14.1334 13.491 14.1925 13.4928 14.2503 13.4831C14.3081 13.4734 14.3634 13.4524 14.413 13.4213L17.9514 11.2153C18.0658 11.558 18.1803 11.895 18.2661 12.2434C18.5999 13.4632 18.7275 14.73 18.6437 15.9917C18.4755 18.2171 17.568 19.9501 16.0895 20.8732C15.3269 21.3387 14.4531 21.5912 13.5593 21.6044H13.4449C12.5511 21.5915 11.6772 21.3389 10.9147 20.8732C9.435 19.9501 8.52752 18.2171 8.3593 15.9917C8.27611 14.73 8.40373 13.4633 8.73694 12.2434C9.50427 9.42175 11.0896 6.88927 13.2938 4.96399C14.2445 4.1306 15.3273 3.46077 16.498 2.98191C18.5739 2.15823 20.5319 2.21192 22.0116 3.13499C23.4913 4.05806 24.3976 5.7911 24.5658 8.01538C24.6509 9.27516 24.5256 10.5403 24.195 11.7591ZM21.0721 22.9193V22.7605C21.0718 22.755 21.0727 22.7496 21.0747 22.7444C21.0767 22.7393 21.0797 22.7347 21.0835 22.7308C21.0872 22.7269 21.0916 22.7239 21.0966 22.7219C21.1015 22.7199 21.1068 22.7191 21.1121 22.7194H22.126C22.1313 22.7191 22.1367 22.7199 22.1416 22.7219C22.1465 22.7239 22.151 22.7269 22.1546 22.7308C22.1585 22.7347 22.1615 22.7393 22.1634 22.7444C22.1654 22.7496 22.1663 22.755 22.1661 22.7605V22.9193C22.1664 22.9248 22.1655 22.9302 22.1635 22.9354C22.1616 22.9405 22.1585 22.9451 22.1546 22.949C22.151 22.9528 22.1465 22.9559 22.1416 22.9578C22.1367 22.9598 22.1313 22.9607 22.126 22.9604H21.7553V23.9577C21.7555 23.9633 21.7545 23.9689 21.7523 23.974C21.7501 23.9791 21.7468 23.9837 21.7427 23.9874C21.739 23.9914 21.7346 23.9945 21.7297 23.9967C21.7248 23.9989 21.7194 24 21.7141 24H21.5229C21.5121 23.9997 21.5018 23.9952 21.4943 23.9874C21.4871 23.9792 21.483 23.9687 21.4829 23.9577V22.9604H21.1121C21.1068 22.9607 21.1015 22.9598 21.0966 22.9578C21.0916 22.9559 21.0872 22.9528 21.0835 22.949C21.0796 22.9451 21.0766 22.9405 21.0746 22.9354C21.0726 22.9302 21.0718 22.9248 21.0721 22.9193ZM22.8435 22.7559L23.1262 23.3957L23.41 22.7559C23.4144 22.7445 23.4224 22.7348 23.4329 22.7285C23.4438 22.7216 23.4566 22.7184 23.4695 22.7194H23.7728C23.7781 22.7192 23.7833 22.7201 23.7883 22.7221C23.7932 22.724 23.7977 22.727 23.8014 22.7307C23.8052 22.7345 23.8081 22.7389 23.8101 22.7439C23.8121 22.7488 23.813 22.754 23.8128 22.7593V23.96C23.813 23.9705 23.8094 23.9807 23.8025 23.9886C23.799 23.9922 23.7947 23.9951 23.79 23.9971C23.7852 23.9991 23.7802 24.0001 23.7751 24H23.5931C23.5824 24 23.5722 23.9959 23.5645 23.9886C23.5572 23.9808 23.5531 23.9706 23.5531 23.96V23.0529L23.2567 23.7121C23.2521 23.7244 23.2442 23.7351 23.2338 23.743C23.2224 23.7498 23.2092 23.7529 23.196 23.7521H23.0495C23.0367 23.7528 23.0239 23.7496 23.0129 23.743C23.0025 23.7351 22.9946 23.7244 22.99 23.7121L22.6936 23.0529V23.96C22.6938 23.9653 22.6929 23.9706 22.691 23.9755C22.689 23.9804 22.686 23.9849 22.6822 23.9886C22.6748 23.9958 22.665 23.9999 22.6547 24H22.4716C22.4665 24.0001 22.4614 23.9991 22.4567 23.9971C22.452 23.9951 22.4477 23.9922 22.4442 23.9886C22.4369 23.9808 22.4328 23.9706 22.4327 23.96V22.7593C22.4327 22.754 22.4337 22.7486 22.4359 22.7437C22.4381 22.7388 22.4413 22.7344 22.4453 22.7308C22.4488 22.727 22.453 22.724 22.4578 22.7221C22.4625 22.7201 22.4676 22.7192 22.4728 22.7194H22.7852C22.798 22.7186 22.8108 22.7218 22.8218 22.7285C22.8319 22.735 22.8396 22.7446 22.8435 22.7559Z" fill="#AFAFAF"></path></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" viewBox="0 0 24 24" color="gray"
                            className="">
                            <path d="m9.71 17.71 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z"></path>
                        </svg>

                        <p className="text-white">Offers</p>
                    </div>

                    <div className="border-b p-10 space-y-20">
                        <div className="flex items-start justify-between">

                            <div className="text-xs font-medium space-y-5">
                                <h5 className="text-base text-white">About GoDaddy</h5>
                                <p className=" cursor-pointer hover:underline">About Us</p>
                                <p className=" cursor-pointer hover:underline">Careers</p>
                                <p className=" cursor-pointer hover:underline">Contact Us</p>
                                <p className=" cursor-pointer hover:underline">GoDaddy Blog</p>
                                <p className=" cursor-pointer hover:underline">Investor Relations</p>
                                <p className=" cursor-pointer hover:underline">Legal</p>
                                <p className=" cursor-pointer hover:underline">Trust Center</p>
                            </div>

                            <div className="text-xs font-medium space-y-5">
                                <h5 className="text-base text-white">Support</h5>
                                <p className=" cursor-pointer hover:underline">Product Support</p>
                                <p className=" cursor-pointer hover:underline">Report Abuse</p>
                                <p className=" cursor-pointer hover:underline">Resources</p>
                                <p className=" cursor-pointer hover:underline">Domain Registration Data Disclosure Policy</p>
                            </div>

                            <div className="text-xs font-medium space-y-5">
                                <h5 className="text-base text-white">Resources</h5>
                                <p className=" cursor-pointer hover:underline">Webmail</p>
                                <p className=" cursor-pointer hover:underline">WHOIS</p>
                                <p className=" cursor-pointer hover:underline">ICANN Confirmation</p>
                                <p className=" cursor-pointer hover:underline">Designers & Developers</p>
                                <p className=" cursor-pointer hover:underline">Corporate Domains</p>
                                <p className=" cursor-pointer hover:underline">Redeem Code</p>
                                <p className=" cursor-pointer hover:underline">Product Catalog</p>
                                <p className=" cursor-pointer hover:underline">Business Name Generator</p>
                            </div>

                            <div className="text-xs font-medium space-y-5">
                                <h5 className="text-base text-white">Partner Programs</h5>
                                <p className=" cursor-pointer hover:underline">Affiliates</p>
                                <p className=" cursor-pointer hover:underline">Reseller Programs</p>
                                <p className=" cursor-pointer hover:underline">GoDaddy Pro</p>
                            </div>

                            <div className="text-xs font-medium space-y-5">
                                <h5 className="text-base text-white">Account</h5>
                                <p className=" cursor-pointer hover:underline">Sign in to GoDaddy</p>
                                <p className=" cursor-pointer hover:underline">Renewals & Billing</p>
                                <p className=" cursor-pointer hover:underline">Create Account</p>
                            </div>

                            <div className="text-xs font-medium space-y-5">
                                <h5 className="text-base text-white">Shopping</h5>
                                <p className=" cursor-pointer hover:underline">Buy a Domain</p>
                                <p className=" cursor-pointer hover:underline">gTLD Domain Extensions</p>
                                <p className=" cursor-pointer hover:underline">Websites</p>
                                <p className=" cursor-pointer hover:underline">Business Email</p>
                                <p className=" cursor-pointer hover:underline">WordPress</p>
                                <p className=" cursor-pointer hover:underline">Hosting</p>
                                <p className=" cursor-pointer hover:underline">Web Security</p>
                                <p className=" cursor-pointer hover:underline">Logo Maker</p>
                                <p className=" cursor-pointer hover:underline">Phone Numbers</p>
                            </div>

                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-white flex items-center font-medium gap-6">
                                <img className="cursor-pointer w-40" src={logo} alt="" />

                                <div className="cursor-pointer flex">
                                    <p>Philippines - English</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="m7.71 15.71 4.29-4.3 4.29 4.3 1.42-1.42L12 8.59l-5.71 5.7z"></path>
                                    </svg>
                                </div>

                                <div className="cursor-pointer flex">
                                    <p>USD $</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="m7.71 15.71 4.29-4.3 4.29 4.3 1.42-1.42L12 8.59l-5.71 5.7z"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className='flex items-center gap-5'>
                                <svg className="text-white hover:text-cyan-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" ><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
                                </svg>

                                <svg className="text-white hover:text-cyan-700 cursor-pointer" fill="#FFFFFF" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" width="30" height="30" color=''>
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"></path> </g>
                                </svg>

                                <svg className="text-white hover:text-cyan-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 512.098" width="30" height="30">
                                    <path fill="#fff" fill-rule="nonzero" d="M321.331.011h-81.882v347.887c0 45.59-32.751 74.918-72.582 74.918-39.832 0-75.238-29.327-75.238-74.918 0-52.673 41.165-80.485 96.044-74.727v-88.153c-7.966-1.333-15.932-1.77-22.576-1.77C75.249 183.248 0 255.393 0 344.794c0 94.722 74.353 167.304 165.534 167.304 80.112 0 165.097-58.868 165.097-169.96V161.109c35.406 35.406 78.341 46.476 124.369 46.476V126.14C398.35 122.151 335.494 84.975 321.331 0v.011z" />
                                </svg>

                                <svg className="text-white hover:text-cyan-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="30" height="30">
                                    <path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z" />
                                </svg>

                                <svg className="text-white hover:text-cyan-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 360.726" width="30" height="30">
                                    <path fill="#fff" d="M456.035 10.769c22.031 5.926 39.377 23.386 45.265 45.56C512 96.516 512 180.363 512 180.363s0 83.846-10.7 124.037c-5.888 22.17-23.234 39.631-45.265 45.559-39.928 10.767-200.034 10.767-200.034 10.767s-160.107 0-200.035-10.767C33.937 344.031 16.587 326.57 10.7 304.4 0 264.209 0 180.363 0 180.363S0 96.516 10.7 56.329c5.887-22.174 23.237-39.634 45.266-45.56C95.894 0 256.001 0 256.001 0s160.106 0 200.034 10.769zm-252.398 245.72l133.818-76.122-133.818-76.131v152.253z" />
                                </svg>

                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 p-10 text-white text-xs">
                        <div className="flex gap-5">
                            <p className="leading-relaxed">Copyright © 1999 - 2026 GoDaddy Operating Company, LLC. All Rights Reserved. The GoDaddy word mark is a registered trademark of GoDaddy Operating Company, LLC in the US and other countries. The “GO” logo is a registered trademark of GoDaddy.com, LLC in the US.</p>
                            <div className="flex gap-8 text-nowrap font-medium">
                                <p className="cursor-pointer hover:underline">Legal</p>
                                <p className="cursor-pointer hover:underline">Privacy Policy</p>
                                <p className="cursor-pointer hover:underline">Cookies</p>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <p>Use of this Site is subject to express terms of use. By using this site, you signify that you agree to be bound by these <span className="cursor-pointer text-gray-400 hover:text-cyan-300 hover:underline">Universal Terms of Service.</span></p>
                            <p className="cursor-pointer hover:underline">Do not sell my personal information</p>
                        </div>
                    </div>
                </div>

                {/* Medium/Small Device */}
                <div className="lg:hidden block">
                    <div className="flex items-center gap-2 border-b border-gray-400 px-4 py-5">
                        <svg className="cursor-pointer" data-cy="godaddy-icon" aria-label="GoDaddy" width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2898 1.09579C20.4839 -0.650961 16.7898 -0.238551 13.4952 1.82921C10.2109 -0.237408 6.51458 -0.650961 3.71203 1.09579C-0.721244 3.86157 -1.26024 10.9856 2.5093 17.0062C5.28782 21.4467 9.63298 24.0468 13.5009 23.9989C17.3689 24.0468 21.7141 21.4467 24.4926 17.0062C28.2575 10.9856 27.7231 3.86157 23.2898 1.09579ZM4.54742 15.7358C3.76994 14.5054 3.18348 13.1647 2.80798 11.7591C2.4741 10.5393 2.34647 9.2725 2.43034 8.01081C2.59856 5.78653 3.50604 4.05349 4.98457 3.13042C6.46309 2.20735 8.41766 2.15366 10.4993 2.97734C10.8157 3.10437 11.1254 3.24736 11.4273 3.40574C10.2703 4.458 9.26448 5.66474 8.43826 6.99177C6.14953 10.6475 5.45147 14.7168 6.25023 17.9589C5.61391 17.2729 5.04378 16.5286 4.54742 15.7358ZM24.195 11.7591C23.819 13.1645 23.2326 14.5052 22.4556 15.7358C21.9594 16.5302 21.3893 17.276 20.7528 17.9635C21.4669 15.0561 20.9817 11.4952 19.2308 8.15475C19.2031 8.09951 19.164 8.05072 19.1161 8.01157C19.0682 7.97241 19.0126 7.94376 18.9529 7.92748C18.8932 7.91121 18.8308 7.90767 18.7696 7.91711C18.7084 7.92654 18.6499 7.94874 18.5979 7.98225L13.1393 11.3878C13.0896 11.4187 13.0464 11.4591 13.0123 11.5067C12.9783 11.5543 12.954 11.6081 12.9408 11.6651C12.9276 11.7221 12.9258 11.7811 12.9355 11.8388C12.9452 11.8965 12.9663 11.9517 12.9974 12.0012L13.7985 13.2796C13.8294 13.3293 13.8699 13.3723 13.9176 13.4064C13.9653 13.4404 14.0192 13.4647 14.0763 13.4778C14.1334 13.491 14.1925 13.4928 14.2503 13.4831C14.3081 13.4734 14.3634 13.4524 14.413 13.4213L17.9514 11.2153C18.0658 11.558 18.1803 11.895 18.2661 12.2434C18.5999 13.4632 18.7275 14.73 18.6437 15.9917C18.4755 18.2171 17.568 19.9501 16.0895 20.8732C15.3269 21.3387 14.4531 21.5912 13.5593 21.6044H13.4449C12.5511 21.5915 11.6772 21.3389 10.9147 20.8732C9.435 19.9501 8.52752 18.2171 8.3593 15.9917C8.27611 14.73 8.40373 13.4633 8.73694 12.2434C9.50427 9.42175 11.0896 6.88927 13.2938 4.96399C14.2445 4.1306 15.3273 3.46077 16.498 2.98191C18.5739 2.15823 20.5319 2.21192 22.0116 3.13499C23.4913 4.05806 24.3976 5.7911 24.5658 8.01538C24.6509 9.27516 24.5256 10.5403 24.195 11.7591ZM21.0721 22.9193V22.7605C21.0718 22.755 21.0727 22.7496 21.0747 22.7444C21.0767 22.7393 21.0797 22.7347 21.0835 22.7308C21.0872 22.7269 21.0916 22.7239 21.0966 22.7219C21.1015 22.7199 21.1068 22.7191 21.1121 22.7194H22.126C22.1313 22.7191 22.1367 22.7199 22.1416 22.7219C22.1465 22.7239 22.151 22.7269 22.1546 22.7308C22.1585 22.7347 22.1615 22.7393 22.1634 22.7444C22.1654 22.7496 22.1663 22.755 22.1661 22.7605V22.9193C22.1664 22.9248 22.1655 22.9302 22.1635 22.9354C22.1616 22.9405 22.1585 22.9451 22.1546 22.949C22.151 22.9528 22.1465 22.9559 22.1416 22.9578C22.1367 22.9598 22.1313 22.9607 22.126 22.9604H21.7553V23.9577C21.7555 23.9633 21.7545 23.9689 21.7523 23.974C21.7501 23.9791 21.7468 23.9837 21.7427 23.9874C21.739 23.9914 21.7346 23.9945 21.7297 23.9967C21.7248 23.9989 21.7194 24 21.7141 24H21.5229C21.5121 23.9997 21.5018 23.9952 21.4943 23.9874C21.4871 23.9792 21.483 23.9687 21.4829 23.9577V22.9604H21.1121C21.1068 22.9607 21.1015 22.9598 21.0966 22.9578C21.0916 22.9559 21.0872 22.9528 21.0835 22.949C21.0796 22.9451 21.0766 22.9405 21.0746 22.9354C21.0726 22.9302 21.0718 22.9248 21.0721 22.9193ZM22.8435 22.7559L23.1262 23.3957L23.41 22.7559C23.4144 22.7445 23.4224 22.7348 23.4329 22.7285C23.4438 22.7216 23.4566 22.7184 23.4695 22.7194H23.7728C23.7781 22.7192 23.7833 22.7201 23.7883 22.7221C23.7932 22.724 23.7977 22.727 23.8014 22.7307C23.8052 22.7345 23.8081 22.7389 23.8101 22.7439C23.8121 22.7488 23.813 22.754 23.8128 22.7593V23.96C23.813 23.9705 23.8094 23.9807 23.8025 23.9886C23.799 23.9922 23.7947 23.9951 23.79 23.9971C23.7852 23.9991 23.7802 24.0001 23.7751 24H23.5931C23.5824 24 23.5722 23.9959 23.5645 23.9886C23.5572 23.9808 23.5531 23.9706 23.5531 23.96V23.0529L23.2567 23.7121C23.2521 23.7244 23.2442 23.7351 23.2338 23.743C23.2224 23.7498 23.2092 23.7529 23.196 23.7521H23.0495C23.0367 23.7528 23.0239 23.7496 23.0129 23.743C23.0025 23.7351 22.9946 23.7244 22.99 23.7121L22.6936 23.0529V23.96C22.6938 23.9653 22.6929 23.9706 22.691 23.9755C22.689 23.9804 22.686 23.9849 22.6822 23.9886C22.6748 23.9958 22.665 23.9999 22.6547 24H22.4716C22.4665 24.0001 22.4614 23.9991 22.4567 23.9971C22.452 23.9951 22.4477 23.9922 22.4442 23.9886C22.4369 23.9808 22.4328 23.9706 22.4327 23.96V22.7593C22.4327 22.754 22.4337 22.7486 22.4359 22.7437C22.4381 22.7388 22.4413 22.7344 22.4453 22.7308C22.4488 22.727 22.453 22.724 22.4578 22.7221C22.4625 22.7201 22.4676 22.7192 22.4728 22.7194H22.7852C22.798 22.7186 22.8108 22.7218 22.8218 22.7285C22.8319 22.735 22.8396 22.7446 22.8435 22.7559Z" fill="#AFAFAF"></path></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" viewBox="0 0 24 24" color="gray"
                            className="">
                            <path d="m9.71 17.71 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z"></path>
                        </svg>

                        <p className="text-white">Offers</p>
                    </div>

                    <div className="py-5">
                        {footerSections.map((section) => (
                            <div key={section.title} className=" py-2">
                                <button onClick={() => toggleSection(section.title)}
                                    className="flex justify-between items-center w-full px-4 text-white font-semibold text-base">
                                    <span>{section.title}</span>

                                    <span className="text-2xl">
                                        {openSection === section.title ? "−" : "+"}
                                    </span>
                                </button>

                                {openSection === section.title && (
                                    <div className="mt-3 mb-6 px-4 space-y-4 text-sm text-gray-400">
                                        {section.links.map((link) => (
                                            <p key={link} className="cursor-pointer hover:underline">
                                                {link}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="pt-10 pb-5 mx-4 border-b border-gray-400">
                            <img className="w-40" src={logo} alt="" />
                        </div>

                        <div className="pt-8 pb-4 px-4 space-y-5 border-b border-gray-400">
                            <div className="text-white flex items-center justify-between font-medium gap-6">


                                <div className="cursor-pointer flex">
                                    <p>Philippines - English</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="m7.71 15.71 4.29-4.3 4.29 4.3 1.42-1.42L12 8.59l-5.71 5.7z"></path>
                                    </svg>
                                </div>

                                <div className="cursor-pointer flex">
                                    <p>USD $</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="m7.71 15.71 4.29-4.3 4.29 4.3 1.42-1.42L12 8.59l-5.71 5.7z"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className='flex items-center gap-5'>
                                <svg className="text-white hover:text-cyan-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" ><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
                                </svg>

                                <svg className="text-white hover:text-cyan-700 cursor-pointer" fill="#FFFFFF" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" width="30" height="30" color=''>
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"></path> </g>
                                </svg>

                                <svg className="text-white hover:text-cyan-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 512.098" width="30" height="30">
                                    <path fill="#fff" fill-rule="nonzero" d="M321.331.011h-81.882v347.887c0 45.59-32.751 74.918-72.582 74.918-39.832 0-75.238-29.327-75.238-74.918 0-52.673 41.165-80.485 96.044-74.727v-88.153c-7.966-1.333-15.932-1.77-22.576-1.77C75.249 183.248 0 255.393 0 344.794c0 94.722 74.353 167.304 165.534 167.304 80.112 0 165.097-58.868 165.097-169.96V161.109c35.406 35.406 78.341 46.476 124.369 46.476V126.14C398.35 122.151 335.494 84.975 321.331 0v.011z" />
                                </svg>

                                <svg className="text-white hover:text-cyan-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="30" height="30">
                                    <path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z" />
                                </svg>

                                <svg className="text-white hover:text-cyan-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 360.726" width="30" height="30">
                                    <path fill="#fff" d="M456.035 10.769c22.031 5.926 39.377 23.386 45.265 45.56C512 96.516 512 180.363 512 180.363s0 83.846-10.7 124.037c-5.888 22.17-23.234 39.631-45.265 45.559-39.928 10.767-200.034 10.767-200.034 10.767s-160.107 0-200.035-10.767C33.937 344.031 16.587 326.57 10.7 304.4 0 264.209 0 180.363 0 180.363S0 96.516 10.7 56.329c5.887-22.174 23.237-39.634 45.266-45.56C95.894 0 256.001 0 256.001 0s160.106 0 200.034 10.769zm-252.398 245.72l133.818-76.122-133.818-76.131v152.253z" />
                                </svg>

                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 pt-5 pb-10 px-5 text-white text-xs">
                        <div className="flex flex-col items-center gap-5">
                            <div className="flex gap-8 text-nowrap font-medium">
                                <p className="cursor-pointer hover:underline">Legal</p>
                                <p className="cursor-pointer hover:underline">Privacy Policy</p>
                                <p className="cursor-pointer hover:underline">Cookies</p>
                            </div>
                            <p className="cursor-pointer hover:underline">Do Not sell my personal information</p>
                        </div>

                        <div className="flex flex-col items-center gap-5 leading-relaxed text-center">
                            <p>Copyright © 1999 - 2026 GoDaddy Operating Company, LLC. All Rights Reserved. The GoDaddy word mark is a registered trademark of GoDaddy Operating Company, LLC in the US and other countries. The “GO” logo is a registered trademark of GoDaddy.com, LLC in the US.</p>
                            <p>Use of this Site is subject to express terms of use. By using this site, you signify that you agree to be bound by these <span className="cursor-pointer text-gray-400 hover:text-cyan-300 hover:underline">Universal Terms of Service.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer