import "./css/ButtonComp.css";

export const ButtonComp = ({ text }) => {
  return (
    <button className="buttoncomp" type="submit">
      {text}
    </button>
  );
};
