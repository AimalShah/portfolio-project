import ContactInfo from "../about/ContactInfo";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto lg:mt-40 mt-20 space-y-6 p-4">
     <h1 className="lg:text-6xl text-3xl lg:text-start text-center lg:max-w-2xl font-semibold">Let's Get in Touch: Ways to Connect with Me</h1>
     <p className="font-normal dark:text-[#737373] lg:text-justify text-center">Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at   <a className="font-semibold underline" href="mailto:info@khalidzarar.com">info@khalidzarar.com</a>. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Alternatively, you can use the contact form on my website to get in touch. Simply fill out the required fields and I'll get back to you as soon as possible. Finally, if you prefer to connect on social media, you can find me on <a href="https://www.instagram.com/video_editorkz/" className="underline font-semibold">https://instagram.com/</a>. I post regular updates and engage with my followers there, so don't hesitate to reach out. Thanks again for your interest, and I look forward to hearing from you!</p>
     <ContactInfo/>
    </div>
  )
}
