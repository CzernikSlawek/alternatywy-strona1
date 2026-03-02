"use client"
import { CauseData } from "@/app/api/data";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Causes = () => {
    const settings = {
        autoplay: false,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className="lg:py-28 py-16 bg-grey dark:bg-darkmode">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                <h2 className="text-center text-3xl font-medium mb-3" data-aos="fade-left">
                Plan dnia
                </h2>
                <p className="text-base text-muted dark:text-white/60 text-center">
                Dom Dziennego Pobytu „Alternatywy” w Zielonej Górze <br className="lg:block hidden" />  Opracowano w duchu Montessori Senior
                </p>
                <div className="mt-8">
                    <Slider {...settings}>
                        {CauseData.slice(0, 11).map((item, index) => (
                            <Link href={`/cause/${item.slug}`} key={index} className="px-4">
                                <div className="bg-white group dark:bg-dark rounded-4 overflow-hidden " data-aos="fade-up" data-aos-delay={`${(index) * 250}`}>
                                    <div className="overflow-hidden h-[240px]">
                                        <Image
                                            src={item.image}
                                            alt="image"
                                            width={350}
                                            height={250}
                                            className="w-full h-auto group-hover:scale-110 duration-300"
                                        />
                                    </div>
                                    <div className="px-8 pt-8 pb-6 shadow-cause-shadow dark:shadow-darkmd">
                                        <h4 className="text-lg font-bold dark:text-white group-hover:text-primary mb-4">
                                            {item.title}
                                        </h4>
                                        <p className="text-muted text-base pb-6 h-[96px] overflow-hidden">
                                            {item.text}
                                        </p>
                                        <div className="flex gap-4 mt-4">
                                            <div className="pr-4 border-r-2 dark:border-dark_border">
                                                <h4 className=" text-muted dark:text-white/60 text-sm mb-1">
                                                    Godzina
                                                </h4>
                                                <h5 className="text-2xl ">
                                                    {item.godzina}
                                                </h5>
                                            </div>
                                            <div className="">
                                                <h4 className=" text-muted dark:text-white/60 text-sm mb-1">
                                                    Czas
                                                </h4>
                                                <h5 className="text-2xl ">
                                                    {item.czas}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Causes;