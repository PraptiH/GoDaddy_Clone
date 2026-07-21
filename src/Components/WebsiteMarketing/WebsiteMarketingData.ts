import marketingDesktop from '../../assets/marketing-desktop.webp'
import trustDesktop from '../../assets/trust-desktop.webp'
import fastDesktop from '../../assets/fast-desktop.webp'
import marketingMobile from '../../assets/mobile-marketing-portrait.webp'
import trustMobile from '../../assets/mobile-trust-portrait.webp'
import fastMobile from '../../assets/mobile-fast-portrait.webp'

type Data = {
    image: string,
    title: string,
    description: string
}

const marketingInfo: Data[] = [
    {
         image: fastDesktop,
         title : 'Get online fast. No design skills needed.',
         description : 'Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.'
    },
    {
         image: trustDesktop,
         title : 'Build trust with email that matches your domain.',
         description : 'Help boost your credibility with customers with free Professional Email that’s identical to your domain name.'
    },
    {
         image: marketingDesktop,
         title : 'Engage with marketing tools.',
         description : 'Help your audience find you with built-in SEO and promote your business with social media and email marketing tools.'
    }

]

export const marketingInfoMobile: Data[] = [
    {
         image: fastMobile,
         title : 'Get online fast. No design skills needed.',
         description : 'Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.'
    },
    {
         image: trustMobile,
         title : 'Build trust with email that matches your domain.',
         description : 'Help boost your credibility with customers with free Professional Email that’s identical to your domain name.'
    },
    {
         image: marketingMobile,
         title : 'Engage with marketing tools.',
         description : 'Help your audience find you with built-in SEO and promote your business with social media and email marketing tools.'
    }

]

export default marketingInfo