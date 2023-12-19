import * as http from "./httpService";

export const contactus = async (expense) => {
  return await http
    .post("/user/insertComplains", expense)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
