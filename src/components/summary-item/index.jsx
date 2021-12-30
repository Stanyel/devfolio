import { Link } from 'gatsby';
import React from 'react';

const spacing = {
    padding: '10px',
};

const classes = {
    wrapper: 'mb-6',
    name: 'font-bold text-gray-900 pb-1',
    description: 'font-semibold text-gray-900 pb-1',
    duty: 'font-md text-gray-900 pb-1',
    bullet: 'leading-tight text-gray-900 pb-1',
};


const SummaryItem = ({ name, description, duty, bullets, bullets2, bullets3, bulletsCheck,  link = false, internal = false }) => {
    let linkContent;
    if (internal) {
        linkContent = <Link to={link}>{name}</Link>;
    } else {
        linkContent = <a href={link}>{name}</a>;
    }

    if (bullets3 != bulletsCheck) {
        //Create 3 bullet points
        return (
            <div className={classes.wrapper}>
                <h3
                    className={`${classes.name} ${link ? 'hover:underline hover:text-black' : ''
                        }`}
                >
                    {link ? linkContent : name}
                </h3>
                <p className={classes.description}>{description}</p>
                <div className={classes.wrapper} style={spacing}>
                    <ul>
                        <li><p className={classes.duty}>{duty}</p></li>
                    </ul>
                    <ul role="list" class="marker:text-sky-400 list-disc pl-10  space-y-1 text-gray-500">
                        <li><p className={classes.bullet} >{bullets}</p></li>
                        <li><p className={classes.bullet} >{bullets2}</p></li>
                        <li><p className={classes.bullet} >{bullets3}</p></li>
                    </ul>
                </div>
            </div>
        );
    }
    else if (bullets2 != bulletsCheck) {
        //Create 2 bullet points
        return (
            <div className={classes.wrapper}>
                <h3
                    className={`${classes.name} ${link ? 'hover:underline hover:text-black' : ''
                        }`}
                >
                    {link ? linkContent : name}
                </h3>
                <p className={classes.description}>{description}</p>
                <div className={classes.wrapper} style={spacing}>
                    <ul>
                        <li><p className={classes.duty}>{duty}</p></li>
                    </ul>
                    <ul role="list" class="marker:text-sky-400 list-disc pl-10  space-y-1 text-gray-500">
                        <li><p className={classes.bullet}>{bullets}</p></li>
                        <li><p className={classes.bullet}>{bullets2}</p></li>
                    </ul>
                </div>
            </div>
        );
    }
    else if (bullets != bulletsCheck) {
        //Create 1 bullet point
        return (
            <div className={classes.wrapper}>
                <h3
                    className={`${classes.name} ${link ? 'hover:underline hover:text-black' : ''
                        }`}
                >
                    {link ? linkContent : name}
                </h3>
                <p className={classes.description}>{description}</p>
                <div className={classes.wrapper} style={spacing}>
                    <ul>
                        <li><p className={classes.duty}>{duty}</p></li>
                    </ul>
                    <ul role="list" class="marker:text-sky-400 list-disc pl-10  space-y-1 text-gray-500">
                        <li><p className={classes.bullet}>{bullets}</p></li>
                    </ul>
                </div>
            </div>
        );
    }
    else if (duty != bulletsCheck) {
        //Create only the duty section
        return (
            <div className={classes.wrapper}>
                <h3
                    className={`${classes.name} ${link ? 'hover:underline hover:text-black' : ''
                        }`}
                >
                    {link ? linkContent : name}
                </h3>
                <p className={classes.description}>{description}</p>
                <div className={classes.wrapper} style={spacing}>
                    <ul>
                        <li><p className={classes.description}>{duty}</p></li>
                    </ul>
                </div>
            </div>
        );
    }
    else {
        //If the section shouldnt include the duty of bullets fields, return this build
        return (
            <div className={classes.wrapper}>
                <h3
                    className={`${classes.name} ${link ? 'hover:underline hover:text-black' : ''
                        }`}
                >
                    {link ? linkContent : name}
                </h3>
                <p className={classes.description}>{description}</p>
            </div>
        );
    }
};

export default SummaryItem;