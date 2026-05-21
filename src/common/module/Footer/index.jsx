import React from "react";
import { FaMedium } from "react-icons/fa6";
import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Link } from "@/navigation";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import TextAnimated from "../Faq/component/TextAnimated";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  const footerItems = [
    {
      title: t("explore.title"),
      child_1: { title: t("explore.about"), href: "/about" },
      child_2: { title: t("explore.solutions"), href: "/solution" },
      child_3: { title: t("explore.blog"), href: "/blog" },
    },
    {
      title: t("expertise.title"),
      child_1: { title: t("expertise.cloud"), href: "/services" },
      child_2: { title: t("expertise.web"), href: "/services" },
      child_3: { title: t("expertise.data"), href: "/services" },
    },
    {
      title: t("services.title"),
      child_1: { title: t("services.cyber"), href: "/services" },
      child_2: { title: t("services.ai"), href: "/services" },
      child_3: { title: t("services.ux"), href: "/services" },
    },
    {
      title: t("info.title"),
      child_1: { title: t("info.faq"), href: "/faq" },
      child_2: { title: t("info.docs"), href: "/faq" },
      child_3: { title: t("info.contact"), href: "/contact" },
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-4 py-10 px-8 h-auto w-full max-w-[1500px] place-content-center md:px-5 place-items-start md:place-items-center">
        {footerItems?.map((item, index) => (
          <ComponentTransition
            delay={index * 0.1}
            className="flex flex-col"
            key={index}
          >
            <h1 className="text-2xl font-bold py-3 px-2 md:px-2">
              {item.title}
            </h1>
            <div className="md:px-2 md:py-2 px-2 py-[4px] flex">
              <Link href={item.child_1.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={index * 0.2}
                >
                  {item.child_1.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2 md:py-2 px-2 py-[4px] flex">
              <Link href={item.child_2.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_2.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2 md:py-2 px-2 py-[4px] flex">
              <Link href={item.child_3.href} className="">
                <TextAnimated
                  delay={1}
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                >
                  {item.child_3.title}
                </TextAnimated>
              </Link>
            </div>
          </ComponentTransition>
        ))}
      </div>
      <div className="flex justify-center py-20 items-center flex-col ">
        <div className="gap-5 flex py-5 justify-center items-center w-full">
          <FaMedium size={30} />
          <FaTwitter size={30} />
          <FaLinkedin size={30} />
          <FaDiscord size={30} />
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-sm">{t("rights", { name: "Fahlevi" })}</h1>
          <h1 className="text-sm">
            {t.rich("designedBy", {
              name: "Fahlevi",
              tech: "Next Js",
              bold: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
