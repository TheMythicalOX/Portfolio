import { Html, Button, Text } from "@react-email/components";

const Email = (message, name) => {
  return (
    <Html lang="en">
      <Button href="https://elijahcline.dev">Click me</Button>
      <Text>{name}</Text>
      <Text>{message}</Text>
    </Html>
  );
};

export default Email;
