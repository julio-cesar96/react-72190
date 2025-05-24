import { useContext } from "react";
import { TitleContext } from "../../context/TitleContext";

export const Heading = () => {
    const { title } = useContext(TitleContext);
  return (
    <div>
      <h1> {title} </h1>
    </div>
  )
}

export default Heading;