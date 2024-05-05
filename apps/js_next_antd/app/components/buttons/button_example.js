import { Flex, Button } from "antd";

const ButtonExample = () => {
  return (
    <Flex gap="small" wrap>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Flex>
  )
};

export default ButtonExample;