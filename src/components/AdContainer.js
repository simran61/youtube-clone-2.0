import React from "react";

const AdContainer = () => {
  return (
    <div className="border rounded-xl w-[402px] h-[139px]">
      <img
        className="rounded-t-xl"
        src="https://yt3.ggpht.com/8GMdBOhDKTRWycnl1PKXWPq1BO9lQG-FMv8w2TIqEmAA9smpad9VbISrldyUWO08X3b0J-wr9w=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
        alt="adImg"
      />
      <div className="flex justify-between items-center ml-4 my-3">
        <div className="flex items-center">
          <img
            className="w-9 h-9"
            src="https://yt3.ggpht.com/mNNzuyntxCDSt_sd6j4bGAwfNbrH-neUe4HlSw4fsK7pGWMr7r0R8_HjEPR17Cufi6AaPggr=s88-c-k-c0x00ffffff-no-rj"
            alt="adChannel"
          />
          <div className="mx-4">
            <h3>NIVEA India</h3>
            <div className="text-xs">
              <span className="font-bold">Sponsered</span>
              <span className="text-[#606060]"> • www.nive.in</span>
            </div>
          </div>
        </div>
        <button className="bg-blue-600 px-4 py-2 rounded-3xl font-semibold text-white">
          Know more
        </button>
        <div className="flex items-center justify-between h-9 w-9 mr-1">
          <img
            className="h-5"
            src="https://www.svgrepo.com/show/345223/three-dots-vertical.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AdContainer;
