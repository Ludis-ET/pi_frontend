import Image from "../../assets/phone-login.jpg"

export const LeftSide = () => {
  return (
    <div className="w-1/2">
      <div className="mockup-phone absolute top-[10%] left-[10%]">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>

      <div className="mockup-phone border-primary absolute top-[20%] left-[20%]">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
      </div>
    </div>
  );
};
