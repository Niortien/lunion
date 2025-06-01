import React from "react";
import { service } from "@/data/service";
import Content from "./Content";

interface IProps {
  params: { detail: string };
}

const Page = async ({ params }: IProps) => {
  const final = service.find((item) => item.id === Number(params.detail));

  if (!final) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        Service introuvable
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Content
        key={final.id}
        id={final.id}
        description={final.description}
        imageLink={final.imageLink}
        service={final.service}
      />
    </div>
  );
};

export default Page;
