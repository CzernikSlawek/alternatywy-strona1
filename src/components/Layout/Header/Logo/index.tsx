import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-3 md:gap-6 flex-wrap">

      <Image
        src="/images/logo/logo.jpg"
        alt="Alternatywy"
        width={300}
        height={100}
        className="h-10 sm:h-12 md:h-20 w-auto"
      />

      <Image
        src="/images/logo/przedsiebiorstwo-spoleczne.jpg"
        alt="Przedsiębiorstwo Społeczne"
        width={300}
        height={100}
        className="h-8 sm:h-10 md:h-16 w-auto"
      />

    </Link>
  );
};

export default Logo;