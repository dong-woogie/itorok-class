import React from "react";
import MainTemplate from "../../components/main/MainTemplate";
import MainResponsive from "../../components/common/MainResponsive";
import Header from "../../components/base/Header";

export type HomePageProps = {};

function HomePage() {
  return (
    <MainTemplate>
      <Header />
      <MainResponsive>H!!!</MainResponsive>
    </MainTemplate>
  );
}

export default HomePage;
