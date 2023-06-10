import { BsFillTagsFill } from "react-icons/bs";
const ArticleCard = () => {
  return (
    <div className=" bg-slate-50 dark:bg-slate-800 dark:border-slate-500 w-full h-[350px] md:h-[220px] rounded-md shadow-lg  border  cursor-pointer hover:scale-105 transition duration-100">
      <div className=" py-10 px-10 space-y-4 ">
        <h2 className=" text-2xl font-semibold">
          Top 7 ChatGPT R Programming Tools in 2023
        </h2>
        <p className=" text-slate-400 mb-5 ">
          ChatGPT is an Artificial Intelligence Chatbot. GPT here stands for
          Generative Pre-Trained Transformer that uses transformer neural
          network architecture. It is trained with...
        </p>
        <div className=" flex items-center gap-x-4 text-[14px] text-[#2f8d46] ">
          <BsFillTagsFill />
          <p>GBlog</p>
          <p>Picked</p>
          <p>R Language</p>
          <p>ChatGPT</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
