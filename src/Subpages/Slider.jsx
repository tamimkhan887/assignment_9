import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import slider1 from "../assets/allison-jeffers-lD2YW31UXeU-unsplash.jpg"
import slider2 from "../assets/elibet-valencia-munoz-ztHHjV0t0Qw-unsplash.jpg"
import slider3 from "../assets/shayd-johnson-3SYi9YfTXdU-unsplash.jpg"
import slider4 from "../assets/susie-burleson-DUnYI0lvM5g-unsplash.jpg"
const Slider = () => {
    return (
        <div className='mt-8 md:mt-14 lg:mt-20 mx-7 md:mx-14'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className='h-auto lg:h-[70vh] w-full rounded-xl'
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Slider;