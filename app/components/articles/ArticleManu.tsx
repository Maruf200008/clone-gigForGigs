import Link from "next/link";

const ArticleManu = ({ menu }) => {
  return (
    <div>
      <Link
        href=""
        className=" carusol scrollbar-hide border rounded-md px-3 text-[14px] py-2 bg-slate-200 hover:bg-slate-900 hover:text-white transition"
      >
        {menu}
      </Link>
    </div>
  );
};

export default ArticleManu;
