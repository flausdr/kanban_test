import { Input, Button, Flex } from 'antd';

const Main = () => {
   return (
      <Flex gap="small">
         <Input placeholder="Enter repo URL" />
         <Button type="primary">Load issues</Button>
      </Flex>
   );
};

export default Main;
