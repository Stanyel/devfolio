
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ experience }) => {
    if (!experience.length) return null;

    return (
        <Section title="Experience">
            {experience.map((item) => (
                <SummaryItem
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    link={item.link}
                    duty={item.duty}
                    bullets={item.bullets}
                    bullets2={item.bullets2}
                    bullets3={item.bullets3}
                    bulletsCheck={item.bulletsCheck}
                />
            ))}
        </Section>
    );
};

export default SectionExperience;
