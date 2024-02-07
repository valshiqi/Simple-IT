import React , {useState} from 'react';


import Button from '../button/Button';

import img1 from '../../assets/images/layouts/NINA_PNG.png'
import img2 from '../../assets/images/layouts/banner-05.png'

import avt from '../../assets/images/layouts/avt-05.png'






function Services(props) {

    const [dataBlock] = useState(
        {"one":{
            subheading: 'About us',
            heading: 'Software development',
            desc1: 'Transforming ideas into reality,our expert developers craft tailored software solutions aligend with your unique business needs.From robust applications to intuitive interfaces,we specialize in creating cutting-edge software that drives efficiency and innovation.' ,
            desc2: ''
            
        },
        "two":{
            subheading: 'About us',
            heading: 'Cybersecurity',
            desc1: 'Safeguard your digital landscape with our top-notch cybersecurity services.We employ advanced strategies and thechnologies to shield yout data,networks,and systems from evolving threats.Our proactive approach ensures a secure foundation for your bussines oprations.' ,
            desc2: ''
            
        },
        "three":{
            subheading: 'About us',
            heading: 'Network Infrastructure',
            desc1: 'Building the backbone of connectivity,we design,implement,and optimize network infrastructures that facilitate seamless communication and data flow.From scalable architectures to resilent networks,we ensure your systems remain robust and reliable ' ,
            desc2: ''
            
        },    "four":{
            subheading: 'About us',
            heading: 'Cloud Solutions',
            desc1: 'Unlock the power of the cloud with our specialized solutions.Whether its migration,optimization,or creating cloud-native applications,we enable businesses to harness the flexibility,scalability and cost-efficency of cloud technologies.' ,
            desc2: ''
            
        },
        "five":{
            subheading: 'About us',
            heading: 'IT Consulting',
            desc1: 'Guiding your technology journey,our experienced consultants offer strategic insights and guidance.We analyze,strategize,and implement solutions tailored to align with your business objectives,ensuring optimal utilization of technology resources' ,
            desc2: ''
            
        } ,
        "six":{
            subheading: 'About us',
            heading: 'Infrastructure Optimization',
            desc1: 'Maximize efficiency and performance with our ifrastructure optimization services.We assess,streamline,and optimize your IT infrastructure,ensuring it operates at peak performance while minimizing costs and complexities' ,
            desc2: ''
            
        }            
        }
    )
    const [dataCard] = useState(
        [
            {
                id: 1, 
                img: img1,
                title: '3D Digital Artwork',
                price : '2.26 ETH',
                avt: avt,
                name: 'Leslie Alexander',
                tag: '@leslie754'
            },
            {
                id: 2, 
                img: img2,
                title: '3D Digital Artwork',
                price : '2.26 ETH',
                avt: avt,
                name: 'Leslie Alexander',
                tag: '@leslie754',
                class: 'sm'
            },
        ]
    )
    return (
        <section className="about s3">
            <div className="shape"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-12">
                        <div className="block-text pd-0">
                            {/* <h6 className="sub-heading"><span>{dataBlock.one.subheading}</span></h6> */}
                            <h3 className="heading">{dataBlock.one.heading}</h3>
                                <p className="mb-17">{dataBlock.one.desc1}</p>
                                <p className="mb-26">{dataBlock.one.desc2}</p>
                                {/* <Button title='More About Us' link='/about' /> */}
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                        <div className="block-text pd-0">
                            {/* <h6 className="sub-heading"><span>{dataBlock.two.subheading}</span></h6> */}
                            <h3 className="heading">{dataBlock.two.heading}</h3>
                                <p className="mb-17">{dataBlock.two.desc1}</p>
                                <p className="mb-26">{dataBlock.two.desc2}</p>
                                {/* <Button title='More About Us' link='/about' /> */}
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                        <div className="block-text pd-0">
                            {/* <h6 className="sub-heading"><span>{dataBlock.three.subheading}</span></h6> */}
                            <h3 className="heading">{dataBlock.three.heading}</h3>
                                <p className="mb-17">{dataBlock.three.desc1}</p>
                                <p className="mb-26">{dataBlock.three.desc2}</p>
                                {/* <Button title='More About Us' link='/about' /> */}
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                        <div className="block-text pd-0">
                            {/* <h6 className="sub-heading"><span>{dataBlock.two.subheading}</span></h6> */}
                            <h3 className="heading">{dataBlock.four.heading}</h3>
                                <p className="mb-17">{dataBlock.four.desc1}</p>
                                <p className="mb-26">{dataBlock.four.desc2}</p>
                                {/* <Button title='More About Us' link='/about' /> */}
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                        <div className="block-text pd-0">
                            {/* <h6 className="sub-heading"><span>{dataBlock.three.subheading}</span></h6> */}
                            <h3 className="heading">{dataBlock.five.heading}</h3>
                                <p className="mb-17">{dataBlock.five.desc1}</p>
                                <p className="mb-26">{dataBlock.five.desc2}</p>
                                {/* <Button title='More About Us' link='/about' /> */}
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                        <div className="block-text pd-0">
                            {/* <h6 className="sub-heading"><span>{dataBlock.three.subheading}</span></h6> */}
                            <h3 className="heading">{dataBlock.six.heading}</h3>
                                <p className="mb-17">{dataBlock.six.desc1}</p>
                                <p className="mb-26">{dataBlock.six.desc2}</p>
                                {/* <Button title='More About Us' link='/about' /> */}
                        </div>
                    </div>
                    {/* <div className="col-xl-6 col-md-12">
                        <div className="about__right" data-aos="fade-left" data-aos-duration="2000">

                            {
                                dataCard.map(idx => (
                                    <div key={idx.id} className={`card-box ${idx.class}`}>
                                        <div className="top d-flex">
                                            <span className="icon-logo-01"></span>
                                            <div>
                                                <h6>{idx.title}</h6>
                                                <h6 className="price">{idx.price}</h6>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="image">
                                                <img src={idx.img} alt="Cyfonii" />
                                            </div>

                                            <div className="info d-flex">
                                                <img src={idx.avt} alt="Cyfonii" />

                                                <div >
                                                    <h6 className="name">{idx.name}</h6>
                                                    <p>{idx.tag}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div> */}
                    
                </div>
            </div>
            <br />
            <br />
            <br />
        </section>
    );
}

export default Services;




