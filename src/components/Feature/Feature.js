import React from 'react';
import './Feature.css';
import Feature from '../FeatureTag/Feature';

export default function Features() {
    return (
        <div className="features">
            <div className="features__heading">
                <h1>Need something done?</h1>
            </div>
            <div className="features__single">
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/post-a-job-redesign.svg"
                    title="Post an AD"
                    content="It's easy. Simply post an ad you need completed and receive competitive bids from companies within minutes."
                />
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/choose-freelancers-redesign.svg"
                    title="Choose Companies"
                    content="Whatever your needs, there will be a company to get it done: construction, real estate development, commercial real estate, resort projects buildings, heavy
                    and infrastructure projects. (and a whole lot more)."
                />
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/pay-safely-redesign.svg"
                    title="Pay safely"
                    content="With secure payments and thousands of reviewed professionals to choose from, Shatably.com is the simplest and safest way to get work done online."
                />
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/illustrations/freelancer/about-me.svg"
                    title="We’re here to help"
                    content="Our talented team of recruiters can help you find the best company for the job and our technical co-pilots can even manage the project for you."
                />
            </div>

        </div>
    )
}


