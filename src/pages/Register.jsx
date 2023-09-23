import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import Navbar from "../components/Navbar";
import thumbsUp from "../assets/images/thumbs-up.png";
import * as Yup from "yup";
import MyTextInput from "../components/formInputs/MyTextInput";
import MySelectField from "../components/formInputs/MySelectField";
import MyCheckBox from "../components/formInputs/MyCheckBox";
import Button from "../components/Button";
import boy from "../assets/images/boy-movement.png";
import girl from "../assets/images/girl-movement.png";
import { getCategories } from "../api/apiCalls";
import Modal from "../components/Modal";
import purpleShadow from "../assets/images/purple-shadow.png";
import purpleStar from "../assets/images/purple-star.png";
import ashStar from "../assets/images/ash-star.png";
import whiteStar from "../assets/images/white-star.png";
import { registerTeam } from "../api/apiCalls";

function Register() {
  const [categories, setCategories] = useState([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [showModal, setShowModal] = useState(false);
  const signUp = async (formData) => {
    console.log(formData);
    const data = await registerTeam(formData);
    console.log(data);
    if (!data) return alert("Email taken");
    if (data) setShowModal(true);
  };
  const modalHeaderText = "Congratulations you have successfully registered";
  const paragraphText =
    "Yes, it was easy and you did it! check your mailbox for next step";
  //function to generate an array with items ranging from 1 to 10
  const groupSizeArray = Array(10)
    .fill()
    .map((_, i) => i + 1);
  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };
  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    //clean up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(categories);
  return (
    <>
      {isDesktop && <Navbar />}

      <section className="relative py-4">
        <div class="absolute -left-10 top-0 w-[150px] h-[150px] md:w-[300px]  md:h-[300px] bg-gradient-to-t from-[#903AFF] to-transparent rounded-full blur-3xl"></div>
        <div class="absolute -right-10 bottom-0 w-[150px] h-[150px] md:w-[300px]  md:h-[300px] bg-gradient-to-t from-[#903AFF] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute right-[10%] top-[15%] md:left-[10%] md:top-[10%]">
          <img src={purpleStar} alt="purple star" />
        </div>
        <div className="absolute right-[5%] md:left-[40%] bottom-[15%]">
          <img src={purpleStar} alt="purple star" />
        </div>
        <div className="absolute left-[10%] bottom-[10%] hidden md:block">
          <img src={ashStar} alt="ash star" />
        </div>
        {/* work on the below */}
        <div className="absolute top-[50%]  md:right-[10%] md:top-[10%]">
          <img src={ashStar} alt="ash star" />
        </div>
        <h2 className="font-clash text-[#D434FE] text-[20px] w-[90%] mx-auto mb-4 block md:hidden">
          Register
        </h2>
        <div className="w-[90%] mx-auto grid md:grid-cols-2 gap-8">
          <div className="relative ">
            <div className="relative z-10">
              <img src={thumbsUp} alt="thumbs up" />
            </div>
          </div>
          {/* form div */}
          <div className="md:p-14 shadow-2xl relative rounded-xl">
            <h2 className="font-clash text-[#D434FE] text-[20px] mb-4 hidden md:block">
              Register
            </h2>
            <div className="font-montserrat flex items-center space-x-2 text-[14px] text-white mb-7">
              <p>Be part of this movement!</p>
              <div className="relative text-[#D434FE] ">
                ----------{" "}
                <div className="absolute -top-4 flex items-center ">
                  <img src={girl} alt="" />
                  <img src={boy} alt="" />
                </div>
              </div>
            </div>
            <h2 className="font-montserrat text-white text-[24px] uppercase mb-5">
              Create your account
            </h2>
            <Formik
              initialValues={{
                team_name: "",
                email: "",
                group_size: "",
                phone_number: "",
                project_topic: "",
                privacy_policy_accepted: false,
                category: "",
              }}
              validationSchema={Yup.object({
                team_name: Yup.string().required("Required"),
                phone_number: Yup.string().required("Required"),
                email: Yup.string().required("Required"),
                group_size: Yup.string().required("Required"),
                project_topic: Yup.string().required("Required"),
                category: Yup.string().required("Required"),
                privacy_policy_accepted: Yup.boolean()
                  .required("Required")
                  .oneOf([true], "You must accept our privacy policy"),
              })}
              onSubmit={(values) =>
                signUp({
                  ...values,
                  group_size: parseInt(values.group_size),
                  category: parseInt(values.category),
                })
              }
            >
              <Form>
                <div className="grid md:grid-cols-2 gap-3">
                  {/* convert into an array of objects and map through */}
                  <MyTextInput
                    label="Team's Name"
                    name="team_name"
                    placeholder="Enter the name of your group"
                    type="text"
                  />
                  <MyTextInput
                    label="Phone"
                    name="phone_number"
                    placeholder="Enter your phone number"
                    type="text"
                  />
                  <MyTextInput
                    label="Email"
                    name="email"
                    placeholder="Enter your email address"
                    type="email"
                  />
                  <MyTextInput
                    label="Project Topic"
                    name="project_topic"
                    placeholder="What is your group project topic"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-3 md:grid-cols-2 gap-3">
                  <div className="col-span-2 md:col-span-1">
                    <MySelectField name="category" label="Category">
                      <option value="">Select your category</option>
                      {categories?.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </MySelectField>
                  </div>
                  <MySelectField name="group_size" label="Group size">
                    <option value="">Select</option>
                    {groupSizeArray.map((number) => (
                      <option value={number}>{number}</option>
                    ))}
                  </MySelectField>
                </div>
                <div>
                  <p className="text-[10px] md:text-[12px] font-montserrat italic text-[#FF26B9] py-2">
                    Please review your registration details before submitting
                  </p>{" "}
                  <MyCheckBox name="privacy_policy_accepted">
                    I agreed with the event terms and conditions and privacy
                    policy
                  </MyCheckBox>
                </div>
                <div className="mt-4 w-full bg-red-500">
                  <Button text={"Submit"} isFullWidth type="submit" />
                </div>
              </Form>
            </Formik>
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

export default Register;
