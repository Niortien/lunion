import ContactForm from '@/components/contact/ContactForm';
import ContactSection from '@/components/contact/ContactSection';
import SectionBannerContact from '@/components/contact/SectionBannerContact';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <SectionBannerContact />
            <ContactSection />
            <ContactForm />
        </div>
    );
}

export default Contact;
