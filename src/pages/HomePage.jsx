import React, { useState } from "react";
import profileClipArt from "../assets/img/clipart.png";

const HomePage = () => {
  const [time, setTime] = useState("");
  const [operator, setOperator] = useState("");
  const [date, setDate] = useState("");
  const [contactName, setContactName] = useState("");
  const [status, setStatus] = useState("");
  const [msgReceivedTime, SetMsgReceivedTime] = useState("");
  const [receivedMsg, setReceivedMsg] = useState("");
  const [sentMsg, setSentMsg] = useState("");
  const [sentMsgTime, setSentMsgTime] = useState("");

  const setTimeMethod = (e) => {
    setTime(e.target.value);
  };

  const setOperatorMethod = (e) => {
    setOperator(e.target.value);
  };

  const setDateMethod = (e) => {
    setDate(e.target.value);
  };

  const setContactNameMethod = (e) => {
    setContactName(e.target.value);
  };

  const setStatusMethod = (e) => {
    setStatus(e.target.value);
  };

  const setMsgReceivedTimeMethod = (e) => {
    SetMsgReceivedTime(e.target.value);
  };

  const setReceivedMsgMethod = (e) => {
    setReceivedMsg(e.target.value);
  };

  const setSentMsgMethod = (e) => {
    setSentMsg(e.target.value);
  };

  const setSentMsgTimeMethod = (e) => {
    setSentMsgTime(e.target.value);
  };

  return (
    <div className=" bg-gray-200 min-h-screen pt-20 font-Sen flex justify-center gap-20">
      {/* inputs Div */}
      {/* <form method="post" id="dummy-chat-form"> */}
      <div className="h-[600px] overflow-y-scroll bg-gray-700 p-10 text-white rounded-md">
        {/* Clock */}
        <div className="flex flex-col max-w-sm mb-3">
          <label htmlFor="clock-input" className="font-semibold">
            Clock
          </label>
          <input
            type="text"
            name="clock-input"
            id="clock-input"
            className="p-2 rounded-md mt-1 outline-none text-black"
            placeholder="Ex: 10:04 am"
            onChange={setTimeMethod}
          />
        </div>

        {/* Operator */}
        <div className="flex flex-col max-w-sm mb-3">
          <label htmlFor="operator-input" className="font-semibold">
            Operator
          </label>
          <input
            type="text"
            name="operator-input"
            id="operator-input"
            className="p-2 rounded-md mt-1 outline-none text-black"
            placeholder="Ex: 4G"
            onChange={setOperatorMethod}
          />
        </div>

        {/* Date */}
        <div className="flex flex-col max-w-sm mb-3">
          <label htmlFor="date-input" className="font-semibold">
            Date
          </label>
          <input
            type="text"
            name="date-input"
            id="date-input"
            className="p-2 rounded-md mt-1 outline-none text-black"
            placeholder="Ex: 25 Oct, 2023"
            onChange={setDateMethod}
          />
        </div>

        {/* Contact Name */}
        <div className="flex flex-col max-w-sm mb-3">
          <label htmlFor="contact-input" className="font-semibold">
            Contact Name
          </label>
          <input
            type="text"
            name="contact-input"
            id="contact-input"
            className="p-2 rounded-md mt-1 outline-none text-black"
            placeholder="Ex: Mushkir"
            onChange={setContactNameMethod}
          />
        </div>

        {/* Status */}
        <div className="flex flex-col max-w-sm mb-3">
          <label htmlFor="status-input" className="font-semibold">
            Status
          </label>
          <input
            type="text"
            name="status-input"
            id="status-input"
            className="p-2 rounded-md mt-1 outline-none text-black"
            placeholder="Ex: online"
            onChange={setStatusMethod}
          />
        </div>

        {/* Person 1 Img */}
        <div className="flex flex-col max-w-sm mb-3">
          <label htmlFor="reciever-input" className="font-semibold">
            Profile Image
          </label>
          <input
            type="file"
            name="reciever-img"
            id="reciever-img"
            className="p-2 rounded-md mt-1 outline-none text-black"
          />
        </div>

        {/* Person 1 */}
        <div className="flex flex-col max-w-sm mb-3">
          <label htmlFor="reciever-input" className="font-semibold">
            Message Received Time
          </label>
          <input
            type="text"
            name="reciever-input"
            id="reciever-input"
            className="p-2 rounded-md mt-1 outline-none text-black"
            placeholder="Ex: 12:40 pm"
            onChange={setMsgReceivedTimeMethod}
          />
        </div>

        {/* Person 1 Message */}
        <div className="flex flex-col max-w-sm mb-3">
          <label htmlFor="reciever-message" className="font-semibold">
            Received Message
          </label>
          <input
            type="text"
            name="reciever-message"
            id="reciever-message"
            className="p-2 rounded-md mt-1 outline-none text-black"
            placeholder="Hello, how are you?"
            onChange={setReceivedMsgMethod}
          />
        </div>

        {/* Sender */}
        <div className="flex flex-col max-w-sm mb-3">
          <label htmlFor="reciever-message" className="font-semibold">
            Sender's Message
          </label>
          <input
            type="text"
            name="sender-message"
            id="sender-message"
            className="p-2 rounded-md mt-1 outline-none text-black"
            placeholder="Type your messsage..."
            onChange={setSentMsgMethod}
          />
        </div>

        {/* Sender time */}
        <div className="flex flex-col max-w-sm mb-3">
          <label htmlFor="reciever-message" className="font-semibold">
            Sender's Time
          </label>
          <input
            type="time"
            name="sender-time"
            id="sender-time"
            className="p-2 rounded-md mt-1 outline-none text-black"
            onChange={setSentMsgTimeMethod}
          />
        </div>

        <button className=" bg-gray-200 px-5 py-2 rounded-md mt-3 text-black hover:font-semibold hover:bg-gray-400">
          Create Chat
        </button>
      </div>
      {/* </form> */}

      {/* Chat UI Div */}
      <div>
        {/* Time */}
        <div className="max-w-sm h-[500px] bg-gray-700 text-white rounded-md">
          <div className="p-3">
            <div className="flex justify-between items-center">
              <span>{time != "" ? time : "10:04 am"}</span>

              <div className="flex items-center gap-1">
                {/* Signal */}
                <div className="text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18.5 4c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5m-12 10c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5S5 19.33 5 18.5v-3c0-.83.67-1.5 1.5-1.5m6-5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5"
                    ></path>
                  </svg>
                </div>

                {/* Operator */}
                <span>{operator != "" ? operator : "4G"}</span>

                {/* Battery Level */}
                <div className="text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M152 96v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8m72-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Part */}
          <div className="flex items-center gap-2 pl-3 pr-3 pb-3">
            {/* Back Icon */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z"
                ></path>
              </svg>
            </div>

            {/* Profile */}
            <div className="w-10 h-10 rounded-full bg-white flex">
              <img
                src={profileClipArt}
                className=" rounded-full"
                alt="Profile Clipart"
              />

              {/* Name & Status */}
              <div className="flex flex-col ml-3">
                <h5>{contactName != "" ? contactName : "Mushkir"}</h5>
                <p className=" text-[12px] text-gray-300">
                  {status != "" ? status : "online"}
                </p>
              </div>
            </div>

            {/* Call Icons */}
            <div className=" flex-1 flex justify-end gap-5 text-3xl">
              {/* Video */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M303.7 128h-221C63.9 128 47 142.1 47 160.7v187.9c0 18.6 16.9 35.4 35.7 35.4h221c18.8 0 33.3-16.8 33.3-35.4V160.7c0-18.6-14.5-32.7-33.3-32.7zM320 348.6c0 9.3-6.9 18.4-16.3 18.4h-221c-9.4 0-18.7-9.1-18.7-18.4V160.7c0-9.3 9-15.5 18.4-15.5l221 .1c9.4 0 16.6 6.1 16.6 15.4v187.9z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M367 213v85.6l98 53.4V160l-98 53zm81-23v132.3l-64-33.5v-65.6l64.1-33.6-.1.4z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              {/* Normal Call */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.61.61 0 0 0 0 .12l21 47l-20.67 24.74a6.13 6.13 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8.44 8.44 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Message Body */}
          <div className=" bg-gray-500 h-full px-3 py-3">
            {/* Date */}
            <div className="flex justify-center items-center">
              <span className=" bg-gray-700 px-2 rounded-2xl mb-5 max-w-[110px]">
                {date != "" ? date : "25 Oct, 2023"}
              </span>
            </div>

            {/* Reciever's Chat */}
            <div className=" bg-gray-700 pl-3 p-2 rounded-t-md rounded-r-md mr-14">
              {receivedMsg != "" ? receivedMsg : "Hello, How are you?"}
              <p className="text-right text-[12px] text-gray-200">
                {" "}
                {msgReceivedTime != "" ? msgReceivedTime : "12:40"}
              </p>
            </div>

            {/* Sender's Chat */}
            <div className=" bg-gray-700 pl-3 p-2 rounded-t-md rounded-l-md mt-5 ml-14">
              {sentMsg != "" ? sentMsg : "Yeah, I am good, What's up?"}
              <div className="flex justify-end items-center gap-1">
                <p className="text-right text-[12px] text-gray-200">
                  {sentMsgTime != "" ? sentMsgTime : "04:20"}
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
