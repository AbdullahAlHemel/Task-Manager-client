import { useContext } from "react";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import { AuthContext } from "../Auth/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
             {user? 
         <>
            <Banner></Banner>
            </>
            :
            <>
            <Banner2></Banner2></>}
        </div>
    );
};

export default Home;