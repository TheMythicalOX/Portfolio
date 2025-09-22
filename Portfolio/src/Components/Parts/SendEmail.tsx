import axios from "axios";
const SendEmail = async (
  name: string,
  email: string,
  message: string
): Promise<string> => {
  return await axios
    .post(`https:///elijahcline.dev/php/sendemail.php`, {
      message: message,
      name: name,
      email: email,
    })
    .then((res) => {
      if (res.data === 1) {
        return [
          {
            username: "no projects",
          },
        ];
      } else {
        return res.data;
      }
    });
};

export default SendEmail;
