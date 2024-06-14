import Image from "next/image";
import Link from "next/link";
import Button from "./_atoms/Button";

const LinkToGap = () => {
  return (
    <div>
      <div>
        <Link href={"#"}>
          <Image
            alt={"gaps project cover"}
            width={600}
            height={400}
            src={"/gaps_project_cover.png"}
          />
        </Link>
      </div>
      <div className="mt-1 align-end text-center">
        <Link href={"https://zenodo.org/records/10790795"} target={"_blank"}>
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

export default LinkToGap;