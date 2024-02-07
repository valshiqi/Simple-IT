import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



import { EffectCoverflow ,Autoplay , Pagination , Navigation } from "swiper";
import Button from '../button/Button';

Banner2.propTypes = {
    data: PropTypes.array
};

function Banner2(props) {
    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'We are Monteno NFT',
            heading: 'Most Popular Collections',
            desc:'Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself'
        }
    )
    return (
                <section className="banner s2">
                    <div className="shape"></div>
                    <div className="shape right"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="block-text center">
                                    <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                    <h2 className="heading pd">{dataBlock.heading}
                                        
                                        </h2>
                                        <p className="mb-34">{dataBlock.desc}</p>
                                        
                                        <Button title='Get Connected' link='/contact' />
                                </div>

                                <Swiper
                                    effect={"coverflow"}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        500: {
                                            slidesPerView: 2,
                                            },
                                        700: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    coverflowEffect={{
                                    rotate: 30,
                                    stretch: 15,
                                    depth: 320,
                                    modifier: 1,
                                    slideShadows: false,
                                    }}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                      }}
                                  
                                    
              
                                    modules={[EffectCoverflow, Pagination , Navigation , Autoplay]}
                                    className="bannerSwiper"
                                >

                                    {
                                        data.map(idx => (
                                            <SwiperSlide key={idx.id}>
                                                <div className="card-box" >
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
                                                </SwiperSlide>
                                        ))
                                    }
                                    
       

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default Banner2;