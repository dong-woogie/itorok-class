import React from "react";

export type MainPageTemplateProps = {
  child: React.ReactNode;
};

function MainPageTemplate({ children }: MainPageTemplateProps) {
  return <div>{children}</div>;
}

export default MainPageTemplate;
