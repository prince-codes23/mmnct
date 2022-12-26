import React from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { AiFillRightCircle } from "react-icons/ai";

const SponsorCarousel = () => {
  const carouselItem = "md:w-full md:mx-auto md:h-[400px]";
  return (
    <div className="my-10  md:w-3/5 md:mx-auto">
      <div>
        <p className="sponsor-title text-center lg:text-5xl font-extrabold text-3xl px-2 py-6 text-white">
          Our proud Sponsors{" "}
        </p>
      </div>
      <Carousel
        className="shadow-md mt-5 md:w-4/5 md:mx-auto px-2 shadow-yellow-500"
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        dynamicHeight={false}
      >
        <div className={carouselItem}>
          <img  src="data:image/jpeg;base64,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" />
        </div>
        <div className={carouselItem}>
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESEREREBEREREQEREPEREREREREhIRGBkZGRgYGRgcIS4lHB4rIRgYJjomLC8xNjU1GiQ7QDs0Py40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAQsAvQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABDEAACAQIEAQgGCAUDAwUAAAABAgADEQQFEiExBhMiQVFhcYEyM3KRobEHFEJSgpKywSNiwtHwNKLhFUNTJHPS4vH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Au0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREj82zHmVAWxd76AeAA4sfeIEhE5/i8ZiGJLVaqtfUumoUFuGwUgdnvmbL+VVSg/N4rVUQ6ensalO/X/ADj4/KBeomOhWSoiujB0cXVhwImSAiIgIiICIiAiIgIiICIiAiJ4q1FRS7GyqLk937wPcSpZln2KKmpQVKaKbWdbv+IHh4CRuH5c10Yc/SpOn2ub1U3A6yLsQT3beIgX+Jjw1dKiJUQ6kdVdGHWpFxMkBKtyo1CsjW25sAd/SbUPHdTLTNHNcvXEJoJ0sDdHAvpPh1jugUTFYgGzDqNvI7H/ADukNiXBcbXGpRbcX7rjxEnsdyZxoayU1qC/pJUpqD4hyD8JE5jllTDOoqsjPpLlEJbm+GnUeFzc7DsEC4/R/VLYaopB6GIffq3VDb5++WmRHJbCc1g6K2szrzz9R1P0t/AWHlJeAiIgIiICIiAm9lCg1bEAjQ2xF+yaM38l9b+Bv2gTnMJ91fyiRdVF+tIuldOnhYW9FuqTMiav+sT2f6WgSPMJ91fyiQ2dqFZNIA6J4ADrk9IPPvTT2D84G3ldJTRQlVJ6W5UE+kZXOWeNtqwqU10tTV6lRdOpbsbKAN1PRBv3yz5R6lfF/wBRnMOXWaU6WaOgJW9Cnzrb+na6gDrGnTv2k9kDbTJ2xrpTosVphBzlRxcql7WsOJ2IA/tLjlvJHAUANOGp1GHGpWRatQntuw6PgoAmDkBRtgUqEENXapU6XHSGKr5WF/xSyVHCgsdgoLE9w3MDB9Qo6dIpoqjgFULbwtwkbSw6riQgF1F9m34rebNLN6ZNmDKOpja3nbhNTFVgmJL2uABsOu62/eBM8wn3V/KI5hPur+USMfPaSK71f4SIutnY94AAHWSTsJQ+UnLGpWVlpk0KBuLKbVKg/mYcB3Dv3MCd5V8rqGHDUsMKb1twz6VZKXb7Td3AdfYafyfyVsU5xOKu1MtrRGves3HW/avd1+HHR5N5IcXVSpWVhhUOpgDp5y32F7jbc9nfOk12UsSihUsqqosAqqoUAAcBtAxxEQEREBERAREQE38l9b+Bv2mhN/JfW/gb9oFhkTV/1iez/S0lpE1f9Yns/wBLQJaQee+mnsH5yckHnvpp7B+cDfyj1K+L/qMZnRRqVQsiORTe2pVa3RPb4RlHqV8X/UZkzB9NGqx4LTc+5TAi+SVYNhUT7VIspHcSWB+NvIyZq01dWVgGVgVZSLgg7EEdYnH8ozzE0KpxQbWjC3NpujJ2EAX8D1e+dQyTO6GMpipRYH7yH0kPYR+8CscpMFjcIvO4NaeIw9NOnTcVHxFNR9oPq6agd2rb7W5HPMy5W4utsH5tLWC0rqdI4dP0vcRO/TlnKHkODjnemy08NVC1SoF2VyTrRF4AXGru1WtYQOekVHILFndiNNyWdieFusmdE5MfR9Udkq5jsgAZMMGN2PH+IRwH8oO/XbgbFyTyjD4eoeapgNzbAu3Sc7r9o8PAWEt8CtZnTVKmhFCqqKqqoAVVA2AA4Cak3s49c3sr8powEREBERAREQEREDZwmDaoH0kak02B4EG/9pI5XgWRiz2HRsBe/Hr+E8ZB/wBz8H9UmYCQ1dwMWh7NK+ZBH7yTxFdUUsxsB7yewSsV6xd2c7Fjfw7IFtkZmuDeoVZLEgEEE22mXAY5agAJAccRwv3ib0DWwVEpTVDxF727SSf3mDPaoXCYpzwXD1j7kM35zP6ReVyMhwWGYPrs1aqrDTZSDzanrJtueFtt7mwauUcknxWV4WvhagoYnTVWorD+FXAq1ANQF9LD74FyNjfa2xyJ5IZjhcatesyU6Khw6q4c1bqQAAOAuQbn7ss30cNfK8OdrlsSTa1rmvUPAcOPCWmAlO5UZsKWKpU3tzZpXd/uOWOm/dt8QZacTiUpi7HwHWT3TnuPdvrDviAGWsTY/ZKcNPcQABAtWREGoSNwaZII4EXWWCUjkej0sS1EHVRNF3pk8Us6dDw6Xwl3gVzOPXN4L8ppTezj1zeyvymjAREQEREBERAREQPSOVN1JU9oJB+EzDHVf/I3vmvED07sxuzFj2sSTPMSdyRRzZ2Hpn5CBA3mwmLqDYO9vEn5yz6R2D3THUwyN6Sqe+wv74HEM4zfEYkVEq4iq6c466BrCWDAKhUEAk3O56xIPHuNKEBdl2IBBFieiQdrC9v826Dyt5FHDq2JwampTXW1agQDUCm7FkaxLAE8DuANjObABgb8T1gDvPWf874HzC46tSYtRq1KLG1zSd6ZNu0qRfznUeSOIzA0udxWKquHUc3TYi6px1sbXudrd3jtQuS3JurmNbRTOlEs1WsVuqKeFt+kxsbDuJ6p3vDYGmgACgkADUQCf+PKBW2ck3JJPaTczFXorUUo4DKeo9vaOwy3tSUixVSOwgGRmPysWLUhYjcrxuO7+0CjVxXwjXp1HVXUotRbalvvY3BHUPG0l8gzuvVpaXqk1aR5up6I1H7L8PtCx8b9kzVaaupRxdWFiJU61BsG5qo51of4hZm0VEPAMOA2ItbgRAudSoznUxJPC5niaGX5rTrdEXSppDGk9g+n7w+8vePhN+AiIgIiICIiAiIgaWb5nTwtI1alyAQqqttTueCi/gT4AyjYjlxi2YmmlFE6lKs7W72uL+QE3fpHxP8Ap6Q/nqt8FX+uUi8C0DlxjPuYc/gf/wCck8t+kvE0xobD4dhqLGxqJ2bbk24SiBhEDqtP6VlsNeCcHa+iurjvtdRLNyY5XYbMNaUQ9OrTGtqVUKGKXtqUqSCLkA9YuLjcX4ITJzkXjDRzHBupNnrpQa3WtU83Y913B8oH6EnCfpByVMJjH0dCnWBxFNQLBQfTUW7GBsOoMBO7SifSPhucfLb20vixh3VgrBlqFNtLbE9HyuYE3yKyYYPA0adrVHUVq56zVcAkH2RZR3KJOVqgRSzcFFzMkr3K3HNSXCgcK+MSgw/lKVG+ag+UCRwWYrUYrpKm1xve4/vJCVnLWtWTxt7wRLNArWaUNFQ24N0h3X4/G8hs1y2niKZV9mt0XHUeq46x3SzZ8PVn2h8pDwKFRwuJpOj6FNXB06hc6rgqzEIPxdIeFzLvg8StWnTqp6NRFcX4i/Ue8cPKfGwqHnLi/O213sbgCwHgP3MxZZgFw6c2jMUDFlDW6N+IHde584G5ERAREQEREBERA579Io/9RQtxNEj/AHm37yoVVK31AggcCCDOk52gOOpm24pIL92uobCQb0PreMSm4BDuWfr6C9JvgLecC4HJcNUpU0rUKblaaKW0hXuFANnFmHvld5T8iUpYVsVheeYpVValL1gFM7alsNWzFb3J2udrS7SeyT1R9tvkIH5vJsSD6Q2IPEHvEleS1Jnx+CRdz9bw727kdXY/lUz9BY3LqFcaa9GlWHZVppUH+4GQeTckMLh6y4kUaaVaYYIULWXUCpNr2vYkcOswLPKN9IznnMpRblv+oU62kcSlOxf4GXmcV+lnMVr41aCm64WmUYjqqvZmHkBT879kDtUrnK/AmqMEwF1oY1a78NlFGsqn87JN7k1mgxeEoYgEXdBrA+zVXZ18mBm7iqAdGQ7XGx7CNxAgMuF6qe1f3AmWeRWW5eyOXci4BCgG/Hif87ZKwIfPjtTHex+X95DzezitqqWHBBp8+J/t5TRgIiICIiAiIgIiICIiBWM+dFxaMzoummnpOq9b9s0+RlMVMRiK4sVpoKakEEXc3NvJfjLLjckw9TXUelTd6gC6qiq5VVFgFv6PWdu2R/JLLfq9KshBBOIe1+OgWCeO0Cek9knqz/7jfISBmRK7qLK7KONgxAvAtkSq/W6n/kf87Ty9Z29J3YdhZiIE3j8xCAqh1OdtrEL3nv7p+f8AOMJUpYirTqsWqc4zs7camo6td/5r38SZ2G05/wAu8HV5/nip5ooiI43AIuSG7Dcn/LwPHIfla2X1GSqGbC1WDOqi7U32GtR17AAjrAFtxY9nwGOpYhBVoVEqo3BqbAjwPYe47ifm126p7wmLq0X10Kj0n2Oqm7oTbcA6SLjuMD9NyOx+YBAVUgvw23C957+6V/DZg9WklTW5WpTRwNbEWYA/vPsAT2xEQEREBERAREQERInNc1fDuoNPUjr0XB+2L6lII2NrG/jttAlp8rAqjMRYBSd9pE0eUSsBdXW9tgVN/gB8Z8/61Tub1bEXNttQA43XjwgS31hWACliO0U3I+VvjMVJrOUANrayzKV3O3A+BmmM7w62DuvSIF/S3PaAbjxMzYGqtR6jo4dLIoUEnQekTe+4vce6BuxEQEnci9W3tn9KyCk7kXq29s/pWBJyMwFFHoMlRQ6OzqyOoZWBO4IOxEk5X8PmTU1KBAbMxuSRxMDj3LXIjgcY6AWo1L1sOerQx3TxU3Xw0nrleM7fy7yn69lxqIl6+HviKQXdiBtUQdZuoO3WQs4j+8DsH0dZrz2VvRY3fCFqZudzTa7ofDdl/BJGcayvNK+Fdnw9RqbOuh7BWV042ZWBB+Y6pN0OXOLUjWtFx13RlJ81aw90DpUSp5Vy4oVGCV6ZoM2wfVrp37zYFfdbvlrVgQCCCCLggggjuMD7ERAREQEREBMeIoJUUo6h1PEH59x75kiBBVuTdO38Oo9PcnpAOLdnUfnMZ5OOf++L8PVf/aWGIFbfky2wFYW+10Le4XkrlOWLh1YBi5cgs1gvDgLeZm/EBERASdyL1be2f0rIKTuRerb2z+lYEnKg/E+JlvlQfifEwLJlfqafgfmZzTlr9H1VqtTE4EIab3qPQLBGV+LFL9EqeNiRY36uHS8r9TT8D8zMmM9XU9h/0mB+ccZlOJo71aFSmPvFCU/MNvjNIG/CdymljMow1b1tCm5+9oAfycWI98DkOBQGqgPo3ufASxYTF18M18M508Wpt0qbfh/cWMsFbkRhrlqT1KZIsASKiDyPS/3SOr8ksWm9OpTqAdV2pt7jt8YEtl/K6jUKU6yPSqOyoAFaojOxsACovue7rljc6QS2wAub7WnLkwuKp4ujztN0FJw+tkum25OsdE9nGX2hm91s1nBFrGxgSim/CeyhCliLKoJJNhYdu8i0zUIURQEV+gp2NmAuL34iw6//AM3BjS6m4s6nQ69n/HA3gZomDBFubp6jqYKFY3vdhsfO4meAiIgIiICIiAiIgJO5F6tvbP6VkFJ3IvVt7Z/SsCTlQfifEy3yoPxPiYFkyv1NPwPzMyYz1dT2H/SZjyv1NPwPzMyYz1dT2H+RgVaIiAiIgJG5jltN0YooSpY6CoIBbqBA4iSU+EX4wKdXSqunXSRWV1N3JqCwvq0MvA8RaSeAxKsS+o6mXT1abeXHhx2krjsKKlN0sLlbLfhcXtwlSy92psU9ELYqT9lewdpgWzAXAdT9l2PiHs/zYjym3I3K3LPUNxbRTHHe4Lm9uzcb90koCIiAiIgIiICIiAntajLsrMBxsGIniIGXn6n33/O395iiIHtazgWDuAOoMwE+ms52LuQdiCzWMxxAREQEREBERASrZrT5vEMy7E79mzbm3nf3S0zDWwtOoQXQMRsCb8OzvgaGQUiKb1GFjUYWvx0Lw+JaSs+AdQ6uE+wEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBPVNCzKo4sQo855n1HIIINiCCD2EQJHGZa4YBF1KFABuOPXe/fv5zwMrYDVUZUXvNz/b4z62bVSLDQO8Kb/E2mjUqMxuzFj2k3gbDmivohqh7WOhPcNzMD1CexR2KAo/5854iAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiJ8gfYiICIiAiIgIiIH//Z" />
        </div>
        <div className={carouselItem}>
          <img src="data:image/jpeg;base64,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" />
        </div>
        <div className={carouselItem}>
          <img src="https://m.media-amazon.com/images/I/71FMECoUgIL._SY879_.jpg" />
        </div>
        <div className={carouselItem}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1jWAANpKFpRJsJMIhZR820KFqtxs74txlw&usqp=CAU" />
        </div>
        <div className={carouselItem}>
          <img src="https://i.pinimg.com/originals/4a/71/ca/4a71cae235e6f7cd6a2bb1545d227994.jpg" />
        </div>
      </Carousel>
      <div className="flex flex-col items-center mt-4">
        <p className="text-center text-3xl my-2">
          Want to <span className="font-bold underline">Sponsor</span> us?
        </p>
        <Link
          href="/sponsors"
          className="w-3/5 md:w-2/5 flex justify-center items-center gap-2 text-center font-semibold text-2xl border rounded-full hover:bg-yellow-700 hover:text-white border-yellow-600 px-4 py-2 "
        >
          Click here! <AiFillRightCircle />
        </Link>
      </div>
    </div>
  );
};

export default SponsorCarousel;
