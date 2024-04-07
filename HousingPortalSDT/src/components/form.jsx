import React, { useState } from "react";

function Form({ Submit, formData, setFormData }) {
  const [hostelName, setHostelName] = useState("");
  const [price, setPrice] = useState("");
  const [availableRooms, setAvailableRooms] = useState("");
  const [description, setDescription] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isInputFilled, setInputFilled] = useState(false);

  const handleInputChange = (e) => {
    setPrice(e.target.value);
    setFormData({ ...formData, price: e.target.value });
    setInputFilled(e.target.value !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={Submit} className="gap-4 mt-[10px] ">
      <h2 className=" text-[28px] font-medium">Property info</h2>
      <hr className="mt-2" style={{ borderColor: "lightgray" }} /> <br />
      <p className="mb-2 font-medium text-[15px] mt-1">Property Name </p>
      <label>
        <input
          type="text"
          value={hostelName}
          onChange={(e) => {
            setHostelName(e.target.value);
            setFormData({ ...formData, title: e.target.value });
          }}
          placeholder="Add a hostel name"
          style={{
            border: "none",
            width: "100%",
            colorAdjust: "black",
            height: "45px",
          }}
          className=" rounded-[8px]   text-[16px]  bg-lightgray1 text-black1 pl-5 "
        />
      </label>
      <br />
      <p className="mb-2 font-medium text-[14px] mt-5">Price</p>
      <label className="flex items-center gap-2  text-center">
        <input
          type="number"
          value={price}
          onChange={handleInputChange}
          placeholder="Add a price"
          style={{
            width: "20%",
            border: "none",
            height: "45px",
            color: isInputFilled ? "gray" : "lightgray",
          }}
          className="text-[16px] pl-5 bg-lightgray1 rounded-[7px] font-red-300"
        />{" "}
        <p className=" text-grey3  font-medium text-[16px]">: per person</p>
      </label>
      <br />
      <p className="flex flex-row text-black1 font-medium text-[14px] whitespace-nowrap">
        Available rooms
      </p>
      <label className="flex items-center justify-between gap-5 mt-2">
        <input
          type="number"
          value={availableRooms}
          onChange={(e) => {
            setAvailableRooms(e.target.value);
            setFormData({ ...formData, availableRooms: e.target.value });
          }}
          style={{ color: "black", height: "40px", width: "20%" }}
          className="text-[16px] pl-5 bg-lightgray1 rounded-[7px] font-red-300"
        />
      </label>
      <br />
      <p className="mb-2 font-medium text-[14px] mt-1">Description</p>

      <label className="flex mt-3 ">
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setFormData({ ...formData, description: e.target.value });
          }}
          placeholder="Add a description"
          style={{
            color: "black",
            height: "160px",
            paddingTop: "15px",
            fontSize: "16px",
          }}
          className="bg-lightgray1 rounded-[10px] sm:pl-[10px] w-full"
        />{" "}
      </label>
      <br />
      <h2 className="text-[28px]  mt-10 font-medium">Contact info</h2>
      <hr className="mt-2" style={{ borderColor: "lightgray" }} /> <br />
      <div className="flex flex-col ">
      <p className="mb-2 font-medium text-[14px] mt-1">Contact Number</p>

        <label className="">
          <input
            type="number"
            value={contactNumber}
            onChange={(e) => {
              setContactNumber(e.target.value);
              setFormData((prevState) => ({
                ...prevState,
                propertyOwnerDetails: {
                  ...prevState.propertyOwnerDetails,
                  mobile: e.target.value,
                },
              }));
            }}
            placeholder="077xxxxxxx"
            style={{
              paddingLeft: "15px",
              width: "30%",
              color: "black",
              height: "40px",
            }}
            className="bg-lightgray1 rounded-[7px]"
          />
        </label>
        <br />
        <p className="mb-2 font-medium text-[14px] ">Email</p>

        <label className="mb-6 ">
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setFormData((prevState) => ({
                ...prevState,
                propertyOwnerDetails: {
                  ...prevState.propertyOwnerDetails,
                  email: e.target.value,
                },
              }));
            }}
            placeholder="example@example.com"
            style={{
              paddingLeft: "15px",
              width: "30%",
              color: "black",
              height: "40px",
            }}
            className="bg-lightgray1 rounded-[7px]"
          />
        </label>

        <br />
      </div>
      <div className="flex justify-center mt-[50px] mb-[50px]">
        {" "}
        <button
          type="submit"
          className="border bg-blue1 text-white px-8 py-3 rounded-[7px] font-medium "
        >
          Publish
        </button>{" "}
      </div>
    </form>
  );
}

export default Form;
