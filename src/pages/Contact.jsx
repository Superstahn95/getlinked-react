import { useEffect, useState } from "react";
import linkedIn from "../assets/images/linkedIn.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import instagram from "../assets/images/instagram.png";
import x from "../assets/images/x.png";
import purpleStar from "../assets/images/purple-star.png";
import ashStar from "../assets/images/ash-star.png";
import whiteStar from "../assets/images/white-star.png";
import backArrow from "../assets/images/back.png";
import facebook from "../assets/images/facebook.png";
import MyTextInput from "../components/formInputs/MyTextInput";
import MyTextArea from "../components/formInputs/MyTextArea";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { contactTeam } from "../api/apiCalls";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const modalHeaderText = "Your message has been sent";
  const paragraphText = "  We will get back to you as soon as possible";
  //function to update desktop state based on the width of the screen
  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed
  };
  const messageTeam = async (formData) => {
    setIsLoading(true);
    try {
      const data = await contactTeam(formData);
      setIsLoading(false);
      if (data) setShowModal(true);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    //clean up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop && <Navbar isContactPage />}
      <section className="py-14 relative">
        <div className="absolute -left-10 top-0 w-[150px] h-[150px] md:w-[300px]  md:h-[300px] bg-gradient-to-t from-[#903AFF] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -right-10 bottom-0 w-[150px] h-[150px] md:w-[300px]  md:h-[300px] bg-gradient-to-t from-[#903AFF] to-transparent rounded-full blur-3xl"></div>
        <div
          onClick={() => navigate("/")}
          className="absolute flex items-center justify-center md:hidden rounded-full border border-[#D434FE] cursor-pointer w-[23px] h-[23px] top-4 left-4"
        >
          <img src={backArrow} alt="back arrow" />
        </div>
        <div className="absolute right-[10%] top-[15%] md:left-[10%] md:top-[10%]">
          <img src={purpleStar} alt="purple star" />
        </div>
        <div className="absolute right-[5%] md:left-[40%] bottom-[15%]">
          <img src={purpleStar} alt="purple star" />
        </div>
        <div className="absolute right-[5%] bottom-[10%] hidden md:block">
          <img src={whiteStar} alt="white star" />
        </div>
        <div className="absolute top-[50%]  md:right-[10%] md:top-[10%]">
          <img src={ashStar} alt="ash star" />
        </div>
        <div className="w-[90%]  md:w-[80%] mx-auto grid md:grid-cols-2 md:gap-14">
          {/* contact information */}
          <div className="hidden md:flex flex-col h-full items-center justify-center">
            <div>
              <h2 className="font-clash text-[32px] text-[#D434FE]">
                Get in touch
              </h2>
              <p className="font-montserrat text-white text-[16px] pb-3">
                Contact <br />
                Information
              </p>
              <p className="font-montserrat text-white text-[16px] pb-3">
                27,Alara Street
                <br />
                Yaba 100012
                <br />
                Lagos State
              </p>
              <p className="font-montserrat text-white text-[16px] pb-3">
                Call Us : 07067981819
              </p>
              <p className="font-montserrat text-white text-[16px] pb-3">
                we are open from Monday-Friday
                <br />
                08:00am - 05:00pm
              </p>
              <p className="font-montserrat text-[16px] text-[#D434FE]">
                Share on
              </p>
              <div className="flex items-center space-x-4">
                <img src={instagram} alt="instagram" />
                <img src={x} alt="x" />
                <img src={facebook} alt="facebook" />
                <img src={linkedIn} alt="linked in" />
              </div>
            </div>
          </div>
          {/* form field */}
          <div className="md:p-14 shadow-2xl rounded-xl">
            <h2 className="font-clash text-[#D434FE] text-[20px]">
              Questions or need
              <br className="md:hidden" /> assistance?
            </h2>
            <h2 className="font-clash text-[#D434FE] text-[20px] mb-4">
              Let us know about it!
            </h2>
            <p className="md:hidden font-montserrat text-white text-[12px] mb-5">
              Email us below to any question related
              <br /> to our event
            </p>
            <Formik
              initialValues={{
                first_name: "",
                email: "",
                message: "",
                phone_number: "",
              }}
              validationSchema={Yup.object({
                first_name: Yup.string().required("Required"),
                email: Yup.string().required("Required"),
                message: Yup.string().required("Required"),
                phone_number: Yup.string().required("Required"),
              })}
              onSubmit={(values) => messageTeam(values)}
            >
              <Form>
                <MyTextInput
                  name="first_name"
                  placeholder="First Name"
                  type="text"
                />
                <MyTextInput name="email" placeholder="Mail" type="email" />
                <MyTextInput
                  name="phone_number"
                  placeholder="Phone number"
                  type="text"
                />
                <MyTextArea name="message" placeholder="Message" />
                <div className="mt-4 text-center">
                  <Button text={"Submit"} type="submit" />
                </div>
              </Form>
            </Formik>
            {isLoading && (
              <p className="text-[#D434FE] w-full text-center">
                Please wait.......
              </p>
            )}
          </div>

          {/* socials div */}
          <div className="md:hidden flex flex-col space-y-2 items-center justify-center mt-12">
            <p className="font-montserrat text-[12px] text-[#D434FE]">
              Share on
            </p>
            <div className="flex items-center space-x-4">
              <img src={instagram} alt="instagram" />
              <img src={x} alt="x" />
              <img src={facebook} alt="facebook" />
              <img src={linkedIn} alt="linked in" />
            </div>
          </div>
        </div>
        <Modal
          isOpen={showModal}
          setShowModal={setShowModal}
          headerText={modalHeaderText}
          paragraph={paragraphText}
        />
      </section>
    </>
  );
}

export default Contact;
