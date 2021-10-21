import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;
function HomeMenu() {
  return (
    <div>
      <Tabs tabPosition="left">
        <TabPane
          tab={
            <img
              src="https://picsum.photos/200"
              className="rounded-full w-10 h-10"
              alt=""
            />
          }
          key="1"
        >
          Content of Tab 1
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/200"
              className="rounded-full w-10 h-10"
              alt=""
            />
          }
          key="2"
        >
          Content of Tab 2
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/200"
              className="rounded-full w-10 h-10"
              alt=""
            />
          }
          key="3"
        >
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default HomeMenu;
