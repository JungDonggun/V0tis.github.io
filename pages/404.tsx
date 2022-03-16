import React from 'react';
import { Empty, Row, Col, Button } from 'antd';
import { useRouter } from 'next/router';
import UIPositionCenter from '../components/UI/UIPositionCenter';

const NotFoundPage: React.FunctionComponent = () => {
  const router = useRouter();

  const goBack = React.useCallback(() => {
    router.back();
  }, []);

  return (
    <Row align="middle" justify="center" style={{ height: '100%' }}>
      <Col span={14}>
        <UIPositionCenter>
          <div>
            <Empty description={'앗, 이 페이지는 비밀 페이지에요!'}/>
            {/*<Button type="primary" onClick={goBack}>알겠어요, 못본 척 할게요</Button>*/}
          </div>
        </UIPositionCenter>
      </Col>
    </Row>
  );
};

export default NotFoundPage;
