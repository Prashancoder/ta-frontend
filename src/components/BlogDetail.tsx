import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Blog Detail Page {id}</h1>
      <p className="text-gray-700">
        This is the detail page for blog with ID {id}. You can fetch blog data
        from API or static file here.
      </p>
    </div>
  );
};

export default BlogDetail ;
