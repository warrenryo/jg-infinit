const About = () => {
  return (
    <>
      <section aria-label="about" className="section about " id="about">
        <div className=" shadow-lg py-[17vh]">
          <div className="md:flex items-center mx-10 md:mx-40 ">
            <div className=" has-after mr-10 aboutFade hide">
              <img
                alt="about banner"
                cla
                height="648"
                loading="lazy"
                src="/images/Website/2.jpg"
                width="660"
              />
            </div>
            <div className="mt-10 md:mt-0 aboutFade hide">
              <p className="text-[5vh] font-bold text-primary_red">ABOUT US</p>
              <h2 className="text-[3vh] font-bold text-paragraph_black">
                JG Infinit Insurance Agency
              </h2>
              <div className=" text-[17px] ">
                <p className="md:w-[40vh] lg:w-[50vh] xl:w-[70vh] 2xl:w-[80vh] text-paragraph_black">
                  We want to be more than just an insurance company agency; we
                  want to be a reliable partner helping to protect your future.
                  We are the go-to option for non-life insurance needs because
                  of our everlasting commitment to quality and unshakable
                  dedication to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
