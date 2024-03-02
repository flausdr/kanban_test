import { useEffect } from 'react';

import Sortable from 'sortablejs';
import { Row, Col } from 'antd';

const Desk = () => {
   useEffect(() => {
      const element: HTMLElement | null = document.getElementById('items');

      if (element) {
         new Sortable(element, {
            animation: 150,
            ghostClass: 'blue-background-class',
            touchStartThreshold: 3,
         });
      }
   }, []);

   return (
      <>
         <Row className="items">
            <Col span={8}>test</Col>
            <Col span={8}>test2</Col>
            <Col span={8}>test3</Col>
         </Row>
      </>
   );
};

export default Desk;
