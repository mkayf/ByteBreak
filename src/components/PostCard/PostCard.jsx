import React from "react";
import storageService from "../../appwrite/storage";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featured_img }) {

  const previewImg = storageService.getFilePreview(featured_img);

  return (
    <div className="w-60 h-80 bg-neutral-800 rounded-2xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-neutral-900 hover:shadow-2xl hover:shadow-green-600 transition-shadow">
      <div className="w-52 h-40 rounded-xl border overflow-hidden">
        <img src={previewImg} className="h-[100%] w-100" />
      </div>
      <div className="">
        <p className="poppins-medium">{title}</p>
      </div>
      <Link to={`/post/${$id}`}>
        <button className="bg-green-600 poppins-medium p-2 px-6 rounded-lg hover:bg-green-800 transition-colors cursor-pointer">
          See post
        </button>
      </Link>
    </div>
  );
}

export default PostCard;
