import React from "react";
import Container from "../../components/container/container";
import ImageSelector from "../../components/imageSelector";
import Viewmap from "../../components/viewmap";

const Editdashboard = () => {
  return (
    <Container>
      <div className=" flex lg:flex-row flex-col gap-4">
        <ImageSelector/>
        <Viewmap/>
      </div>
    </Container>
  );
};

export default Editdashboard;
