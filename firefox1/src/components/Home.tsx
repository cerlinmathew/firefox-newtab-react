import Searchbar from "./Searchbar";
import google from "../assets/google.jpg";
import firefox from "../assets/firefox.jpg";

export default function Home() {
  return (

    

    
        <div>
            <div className="flex content-center items-center gap-1 mt-6 ml-6">
            <img src={firefox} alt="Firefox" className="h-14"/>
            <h1 className="font-bold font-serif">Firefox</h1>
</div>
        
        <div className="flex justify-center mt-2 " >
      <Searchbar name="Google" iconUrl={google} onChangeText={(val) => console.log(val)} />
    </div></div>
  );
}
