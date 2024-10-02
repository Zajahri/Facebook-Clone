import Luffy from "../images/luffy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Story = (props) => {
  const CustomImg = {
    height: "100%",
    borderRadius: "10px",
  };

  const customText = {
    color: 'white',
    position: 'absolute',
    bottom: '9px',
    left: '10px',
  }

  const isTrue = props.isTrue;

  return (
    <div className="h-full w-screen mx-auto md:w-36 rounded-lg relative shadow-md overflow-hidden hover:cursor-pointer">
      <img
        style={isTrue && CustomImg}
        src={props.img}
        alt=""
        className="rounded-tl-lg rounded-tr-lg h-4/5     object-cover transform transition-transform hover:scale-105"
      />
      {!isTrue? <div className=" absolute bottom-7 left-14   border-4 border-white flex items-center justify-center h-8 w-8 rounded-full mx-auto  text-white bg-fbColor ">
        <FontAwesomeIcon icon={faPlus} />
      </div>: null}
      <p style={isTrue && customText} className="text-center text-xs pt-5 font-semibold">{props.text}</p>
    </div>
  );
};
export default Story;
