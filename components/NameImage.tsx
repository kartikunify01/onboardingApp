import Image from "next/image"

const NameImage = () => {
  return (
    // <div className="relative w-36">
      <Image
        src="/images/unifyName.svg"
        // fill
        width={80}
        height={20}
        alt="UnifyApps"
      />
    // </div>
  )
}

export default NameImage;
