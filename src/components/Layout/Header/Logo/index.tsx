import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-6">
      
      <Image
        src="/images/logo/logo.jpg"
        alt="Alternatywy"
        width={300}
        height={100}
        className="h-20 w-auto rounded-full"
      />

      <Image
        src="/images/logo/przedsiebiorstwo-spoleczne.jpg"
        alt="Przedsiębiorstwo Społeczne"
        width={300}
        height={100}
        className="h-16 w-auto"
      />

    </Link>
  );
};

export default Logo;