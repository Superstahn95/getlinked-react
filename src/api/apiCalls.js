import client from "./client";

export const getCategories = async () => {
  try {
    const { data } = await client.get("hackathon/categories-list");
    return data;
  } catch (error) {
    //handle errors
    console.log(error);
  }
};

export const contactTeam = async (formData) => {
  try {
    const { data } = await client.post("hackathon/contact-form", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerTeam = async (formData) => {
  try {
    const { data } = await client.post("hackathon/registration", formData);
    return data;
    // return data;
  } catch (error) {
    console.log(error);
  }
};
