import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full min-h-[70vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slide1} className="w-full h-[600px] opacity-30" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <div>
                        <h2 className="text-5xl text-blue-950 text-center font-bold mb-7">Explore the World, Worry-Free</h2>
                        <p className='text-xl font-bold max-w-lg mx-auto text-center text-gray-800'>Instantly check visa requirements for any country with our smart, user-friendly system.</p>
                    </div>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slide2} className="w-full h-[600px] opacity-30" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <div>
                        <h2 className="text-5xl text-blue-950 text-center font-bold mb-7">Apply for Your Visa Online in Minutes</h2>
                        <p className='text-xl font-bold max-w-lg mx-auto text-center text-gray-800'>Skip the long lines—our portal makes visa applications fast, secure, and paperless.</p>
                    </div>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slide3} className="w-full h-[600px] opacity-30" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <div>
                        <h2 className="text-5xl text-blue-950 text-center font-bold mb-7">Track Your Visa Status in Real-Time</h2>
                        <p className='text-xl font-bold max-w-lg mx-auto text-center text-gray-800'>Get updates and notifications on your visa application—anytime, anywhere.</p>
                    </div>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;