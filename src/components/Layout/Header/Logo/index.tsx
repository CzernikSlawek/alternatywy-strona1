import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.jpg"
        alt="Alternatywy"
        width={300}
        height={100}
        className="h-20 w-auto rounded-full"
      />
    </Link>
  );
};

export default Logo;
