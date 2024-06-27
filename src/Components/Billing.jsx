import { apple, bill, google,card } from "../assets";
import Button from "./Button";

const Billing = () => {
  return (
    <div>
      <div className="flex lg:mx-16 mx-4 py-8 mt-16 justify-between items-center">
        <img src={bill} className="mr-16" />
        <div className="ml-16">
          <div className="text-[64px]">
            <p>Easily control your </p>
            <p>billing & invoicing. </p>
          </div>
          <p
            className="text-[24px] text-slate-400 
            w-2/3 my-8"
          >
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat..
          </p>
          <Button/>
        </div>
      </div>
      <div className="flex lg:mx-16 mx-4 py-8 mt-16 justify-between items-center">
      <div className="ml-16">
          <div className="text-[64px]">
            <p>Find a better card deal </p>
            <p>in few easy steps. </p>
          </div>
          <p
            className="text-[24px] text-slate-400 
            w-2/3 my-8"
          >
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat..
          </p>
          <div className="flex">
            <img src={apple} className="mr-4" />
            <img src={google} />
          </div>
          </div>
          <img src={card} className="mr-16" />
          </div>
    </div>
  );
};

export default Billing;
