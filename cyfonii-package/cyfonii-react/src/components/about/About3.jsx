import React , {useState} from 'react';


import Button from '../button/Button';

import img1 from '../../assets/images/layouts/NINA_PNG.png'
import img2 from '../../assets/images/layouts/banner-05.png'

import avt from '../../assets/images/layouts/avt-05.png'






function About3(props) {

    const [dataBlock] = useState(
        {"one":{
            subheading: 'About us',
            heading: 'Simple Brief',
            desc1: 'Simple IT Solution:We are leanding tech company specializing in providing outsourcing in providing outsourcing services for Developers and DevOps resources' ,
            desc2: ''
            
        },
        "two":{
            subheading: 'About us',
            heading: 'Our mission',
            desc1: 'To help bussinesses scale and optimize their tech operations with cost-effective and efficient solutions' ,
            desc2: ''
            
        },
        "three":{
            subheading: 'About us',
            heading: 'Our Vision',
            desc1: 'To be the go-to outsourcing partner for organizations seeking unparalleled IT expertise and expeptional service quality' ,
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

export default About3;