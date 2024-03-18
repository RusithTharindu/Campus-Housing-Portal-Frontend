import React from "react";
import Container from "../../components/container/container";
import ImageSelector from "../../components/imageSelector";
import Viewmap from "../../components/viewmap";

const Editdashboard = () => {
  return (
    <Container>
      <div className="flex flex-row">
        <div className="  hidden lg:flex lg:w-[300px] lg:-ml-20 mr-20 border">side bar</div>
        <div className="flex flex-col justify-between flex-grow gap-4 lg:flex-row">
          <ImageSelector />
          <Viewmap />
        </div>
      </div>
    </Container>
  );
};

export default Editdashboard;
