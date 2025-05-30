import FAQSection from '@/components/service/FaqSection';
import FarService from '@/components/service/FarService';
import SectionBanner from '@/components/service/SectionBanner';
import ServiceServices from '@/components/service/ServiceSection';
import WorkProcess from '@/components/service/WorkProcess';
import React from 'react';

const Service = () => {
    return (
        <div>
            <SectionBanner />
            <WorkProcess />
            <ServiceServices/>
            <FarService/>
            <FAQSection />
        </div>
    );
}

export default Service;
