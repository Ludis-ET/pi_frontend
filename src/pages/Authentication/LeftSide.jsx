import Image from "../../assets/phone-login.jpg"

export const LeftSide = () => {
  return (
    <div className="w-1/2">
      <div className="mockup-phone w-[400px] h-[650px] absolute top-[10%] left-[10%]">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>

      <div className="hidden mockup-phone border-primary absolute bottom-[5%] left-[20%] transform rotate-90">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
      </div>
    </div>
  );
};
