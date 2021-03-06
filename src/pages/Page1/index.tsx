import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';
import { page1Title } from 'constants/index';
import { useAppSelector } from 'hooks/typedReducer';

import styles from './index.module.css';

const { Title } = Typography;

const Page1: FC = () => {
  const history = useHistory();
  const { roles } = useAppSelector(state => state.page1Store);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(divRef.current);
  });

  return (
    <Space direction="vertical">
      <Title>
        {page1Title} --- {roles[0]}
      </Title>

      <div ref={divRef} className={styles.div}>
        <h4>enable css module and cssnext</h4>
      </div>

      <Space direction="horizontal">
        <Button onClick={() => history.push('/page2')}>to Page2</Button>
        <Button>
          <i className="if if-filter-icon" />
        </Button>
      </Space>
    </Space>
  );
};

export default Page1;
