import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export default function Contact() {
    return (
        <main>
            <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
            <ContactForm />
            <ContactInfo />
        </main>
    )
}