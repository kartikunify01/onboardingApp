import Image from "next/image"

const LogoImage = () => {
  return (
    // <div className="relative w-14">
      <Image
        src="/images/unifyLogo.svg"
        // fill
        height={36}
        width={34}
        alt="UnifyApps"
      />
    // </div>
  )
}

export default LogoImage