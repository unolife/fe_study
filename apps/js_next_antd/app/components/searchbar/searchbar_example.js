import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';

const SearchBarExamples = () => {
  return (
    <Flex gap="small" vertical>
      <Flex wrap gap="small">
        <Tooltip title="Search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon={<SearchOutlined />}>Search</Button>
        <Tooltip title="Search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button shape="circle" icon={<SearchOutlined />} />
        <Button icon={<SearchOutlined />}> Search</Button>
      </Flex>
      <Flex wrap gap="small">
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Tooltip title="search">
          <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="dashed" icon={<SearchOutlined />}>Search</Button>
        <Button icon={<SearchOutlined />} href="https://www.google.com" />
      </Flex>
    </Flex>
  )
};

export default SearchBarExamples;