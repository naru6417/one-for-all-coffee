import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Main part */}
      <section id="Home" className="grid lg:grid-cols-2 grid-cols-1 gap-20 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-end">
          <div className="w-[600px]">
            <h1 className="lg:text-4xl text-3xl mb-2">One For All Coffee</h1>
            <h3 className="lg:text-2xl text-xl mb-4">where literary charm meets exceptional brews.</h3>
            <p className="mb-4">Join us for a memorable coffee experience with attentive service and a cozy atmosphere. Come taste the best of Hamilton&#39;s coffee scene!</p>
            <Link href="/" prefetch={false} className="self-start border-2 border-[var(--dark)] px-4 py-2 btn-retro">
              Explore Our Menu
            </Link>
          </div>
        </div>
        <div>
          <div className="border-2 border-[var(--dark)] p-2 rounded-tl-[50px] rounded-br-[50px] w-[620px] h-[520px]">
            <div className="border-2 border-[var(--dark)] p-2 rounded-tl-[50px] rounded-br-[50px] w-[600px] h-[500px]">
              <Image
                src="/images/main_img_1.webp"
                alt="main coffee image"
                width={600}
                height={500}
                className="object-cover w-full h-full rounded-tl-[50px] rounded-br-[50px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="Menu" className="grid lg:grid-cols-2 grid-cols-1 gap-20 max-w-7xl mx-auto">
        <p> menu </p>
      </section>
    </div>
  );
}
