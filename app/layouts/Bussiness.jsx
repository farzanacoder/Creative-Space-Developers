import Image from 'next/image';
import monirhosen from "../../public/images/Rectangle 10.png"
import businesslogo from "../../public/images/creative-business-group-logo 2.png"

const Bussiness = () => {
  return (
    <>
      <section className="bg-[#F9FAFB] py-25">
        <div className="container">
          <div className="grid grid-cols-2 gap-28">
            <div className="max-w-[648px]">
              <Image src={monirhosen} alt="ceo" className="w-full" />
              <div className="bg-white px-8 py-7.5 rounded-2xl -translate-y-15 max-w-[632px] translate-x-2">
                <h4 className="text-[32px] font-semibold leading-[120%] text-primary mb-2">
                  Monir Hosen{" "}
                </h4>
                <div className="flex items-center justify-between">
                  <div>
                    <h6 className="text-secondary font-semibold leading-7 text-xl">
                      Chairman
                    </h6>
                    <p className="text-secondary font-normal leading-[150%] text-base">
                      Creative Business Group
                    </p>
                  </div>
                  <Image
                    src={businesslogo}
                    alt="businesslogo"
                    className="w-fit"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-[490px] mt-14">
              <h2 className='text-5xl font-bold text-primary leading-15 mb-6'>Creative Space concern of Creative Business Group</h2>
              <p className='text-base font-normal text-secondary leading-[150%]'>
                Creative Business Group is dedicated to delivering exceptional
                construction solutions that blend innovation, sustainability,
                and craftsmanship.
              </p>
              <p className='text-base font-normal text-secondary leading-[150%] mt-8'>
                Our approach combines cutting-edge techniques with
                environmentally conscious practices to create spaces that
                inspire and endure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bussiness