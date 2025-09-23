import Slider from "@/components/slider";
import Image from "next/image";
import Link from "next/link";

const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1017/800/400",
    "https://picsum.photos/id/1011/800/400",
    "https://picsum.photos/id/1012/800/400",
  ];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Main part */}
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-20 max-w-7xl mx-auto mb-28">
        <div className="flex flex-col justify-center items-end">
          <div className="w-[600px]">
            <h1 className="lg:text-4xl text-3xl mb-2">One For All Coffee</h1>
            <h3 className="lg:text-2xl text-xl mb-4">where literary charm meets exceptional brews.</h3>
            <p className="mb-4">Join us for a memorable coffee experience with attentive service and a cozy atmosphere. Come taste the best of Hamilton&apos;s coffee scene!</p>
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

      {/* About Us */}
      <section id="abt-us" className="relative bg-[var(--dark)] text-white">
        <div className="max-w-7xl mx-auto py-[90px] flex flex-col gap-8">
          <div className="text-center pt-10">
            <h3 className="text-3xl">ABOUT US</h3>
            <p>REVIEWS & RATINGS</p>
          </div>
          <div className="text-center max-w-5xl mx-auto text-lg mb-6">
            One For All Coffee is more than just a stop for a caffeine fix; it is an elevated coffee experience where inviting 
            ambiance, delectable beverages, and dedicated service converge. So, whether you&apos;re a local or just passing through 
            Hamilton, be sure to pay a visit to this little gem. You won&apos;t just leave with a cup of coffee—but likely with a 
            smile and a new literary appreciation.
          </div>
          <div>
            <Slider slides={images} slidesPerView={3}></Slider>
          </div>
        </div>
        

        {/* Shape Divider */}
        <div className="custom-shape-divider-top-1758642487">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
        </div>
      </section>

      <section className="relative h-min-[10vh]">

        <div className="custom-shape-divider-top-1758651343">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>
    </div>
  );
}