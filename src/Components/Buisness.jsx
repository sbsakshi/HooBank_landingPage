import { features } from "../Constants";
import {star,shield,send} from "../assets"
import Button from "./Button";

const Buisness = () => {
  return (
    <section id="product">
      <div className="flex lg:mx-16 mx-4 py-8 mt-16">
        <div>
          <div>
            <div className="text-[64px]">
              <p>You do the business, </p>
              <p>we'll handle the money.</p>
            </div>
            <p className="text-[24px] text-slate-400 w-2/3">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market..
            </p>
          </div>
          <div className="mt-8">
          <Button/>
          </div>
        </div>
        <div className="">
        {features.map((feature) => {
          return (
            <div className="block m-4 mb-8 hover:bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl">
                <div className="flex">
            <img src={feature.icon} alt={feature.title} 
            className="w-20 h-15 m-6" />
            <div>
              <p className="font-semibold text-[32px] ">{feature.title} </p>
              <p className="text-[28px] text-slate-400">{feature.content}</p>
              </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Buisness;
