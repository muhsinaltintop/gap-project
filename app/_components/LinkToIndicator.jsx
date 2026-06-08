import Image from "next/image";
import Link from "next/link";
import Button from "./_atoms/Button";

const LinkToIndicator = () => {
  return (
    <div className="w-full h-full">
      <div>
        <Link href={"https://zenodo.org/records/18720917"} target="_blank">
          <Image
            alt={"gaps project cover"}
            width={800}
            height={600}
            src={"/indicator-image.webp"}
          />
        </Link>
      </div>
      <div className="mt-1 align-end text-center">
        <Link href={"https://zenodo.org/records/18720917"} target={"_blank"}>
          <Button
            label={"Read Full Report"}
            icon={false}
            font={"font-normal"}
          />
        </Link>
      </div>
    </div>
  );
};

export default LinkToIndicator;
