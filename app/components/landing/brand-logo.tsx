import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/main_logo.svg"
      alt="Клиника Nare"
      width={232}
      height={88}
      className={[className, "brightness-0"].filter(Boolean).join(" ")}
      priority={priority}
    />
  );
}
