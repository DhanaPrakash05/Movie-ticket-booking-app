import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const HomeSlider = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const banners = [
        {
            imgUrl: 'https://th.bing.com/th/id/R.47a3ed9651143436579f1ddd938e8794?rik=fMmeoS%2bUe%2bFhDg&riu=http%3a%2f%2f2.bp.blogspot.com%2f_o31CLSHm6KA%2fTA8B2Cp026I%2fAAAAAAAAAFM%2fJe4jEiWYRWo%2fs1600%2fInception%2bbanner%2b1.jpg&ehk=Nqpry653hqjN0o05nt2NhKGkXyx21jri29cRlhZOTQY%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            imgUrl: 'https://th.bing.com/th/id/R.f141845566c5f6863287fe27ad039f37?rik=kH38r0TRy%2b6AGg&riu=http%3a%2f%2fwww.impawards.com%2f2014%2fposters%2finterstellar_ver7_xlg.jpg&ehk=OK8Rxe7YfFYjZCf9jYNVsANdHPxzY4nm%2fVdY7W1R070%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            imgUrl: 'https://itsmoreofacomment.com/wp-content/uploads/2021/09/Dune-Movie-Official-Poster-banner-feature.jpg'
        }
    ];

    return (
        <div>
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={banner.imgUrl}
                        alt=""
                        width={width}
                        height={height / 2}
                        style={{ objectFit: "cover" }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
};

export default HomeSlider;
