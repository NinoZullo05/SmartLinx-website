import { Carousel } from "@material-tailwind/react";
import IMG1 from '../images/1.png'
import IMG2 from '../images/2.png'
import IMG3 from '../images/3.png'
export default function CarouselTest() {
    return (


        <>

            <Carousel className="rounded-xl">
                <img src={IMG1} alt="" className="" />
                <img src={IMG2} alt="" className="" />
                <img src={IMG3} alt="" className="" />
            </Carousel>
        </>
    );
}