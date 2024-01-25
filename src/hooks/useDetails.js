import { useContext } from "react";
import DetailContext from "../Context/DetailProvider";

const useDetails = () => {
    return useContext(DetailContext);
}

export default useDetails ;