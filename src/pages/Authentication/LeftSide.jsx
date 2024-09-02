import Image from "../../assets/phone-login.jpg";

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

      <div className="mockup-phone border-primary absolute h-[600px] w-[350px] bottom-[-5%] left-[20%] transform rotate-90">
        <div className="camera"></div>
        <div className="display">
          <div className="absolute bg-white top-[135px] rounded-[40px] right-[-115px] h-[320px] w-[565px] flex flex-col justify-center items-left p-6 transform rotate-[270deg]">
            <h1 className="text-2xl font-bold text-purple-500">Pi Parent's Portal</h1>
            <p className="text-lg mt-4">
              An innovation solution tailored for seamless school management.
              Experience efficiency & precision in administrative tasks.
              Real-time student monitoring and insightful data analytics.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
