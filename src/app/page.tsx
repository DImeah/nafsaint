import Image from "next/image";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      {/* <Carousel effect="fade" autoplay>
        {carouselData.map((item) => (
          <SingleCarousel {...item} key={item.slideID} />
        ))}
      </Carousel> */}

      {/* Commandant's section */}
      <section className="w-full mx-auto flex flex-col sm:flex-row gap-8 items-center p-4 my-4 bg-[#CCD4D7] ">
        <div className="h-full">
          <Image
            alt="picture of the Commandant"
            className="max-w-xs rounded-xl"
            src={"/comdt.jpg"}
            width={300}
            height={300}
            data-aos="zoom-out-right"
          />
          {/* <h3 className="text-white w-full text-center pt-10 absolute bottom-0 z-10 font-semibold">
            COMMANDANT NAFSAINT
          </h3> */}
        </div>

        <div className="space-y-4 px-4 flex-1" data-aos="fade-right">
          <h2 className="text-neutral-800 font-bold ">WELCOME HERE</h2>
          <p className="text-justify text-neutral-800 font-medium ">
            The Nigerian Air Force School of Air Intelligence (NAFSAINT) is a
            training institution saddled with the responsibility of training
            personnel of the Armed Forces of Nigeria particularly the Nigerian
            Air Force on Intelligence statecraft. The School is referred to as
            the &quot;Cradle of the Eagle Eye of the NAF&quot; and stands on the
            fundamentals of its motto &ldquo;Discipline and Knowledge&rdquo;
          </p>
          {/* <Button type="primary">Read more</Button> */}
        </div>
      </section>

      {/* what we do section */}

      {/* <section className="my-4 px-4">
        <div className="w-full space-y-5 mx-auto px-4">
          <h2 className="text-darkNafowaBlue">WHAT WE DO</h2> */}

      {/* <div className="flex justify-center flex-wrap gap-5">
            {whatWeDo.map((item) => {
              return (
                <Card
                  hoverable
                  key={item.id}
                  className="hover:shadow-gray-500 hover:shadow-md w-[300px] "
                  size="small"
                  cover={
                    <img
                      alt="example"
                      src={
                        item.imgSrc[
                          Math.floor(Math.random() * item.imgSrc.length)
                        ].link
                      }
                      data-aos="zoom-in-down"
                    />
                  }
                >
                  <h2 title={item.heading} className="line-clamp-1">
                    {item.heading}
                  </h2>
                  <p className="line-clamp-3">{item.content}</p>
                  <Button type="link" className="text-nafowaBlue p-0">
                    Read more
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}

      <section className="my-20 bg-lighterNafowaBlue h-[40vh] grid place-items-center px-4 ">
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-xl font-bold">HOW WE DO IT</h2> <br />
          <p className="text-lg">
            NAFSAINT relies on its dedicated and hardworking staff officers and
            airmen/airwomen instructors to carry out its mission. The school
            comprises of a trained team of instructors and partners with other
            military institution to achieve its goals
          </p>
        </div>
      </section>
    </>
  );
}
