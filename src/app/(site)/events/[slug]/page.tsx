import Volunteer from "@/components/SharedComponent/Volunteer";
import EventDetails from "@/components/Events/EventDetail";
import { Eventdata } from "@/app/api/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Events({ params }: Props) {
  const { slug } = await params;

  const item = Eventdata.find((e) => e.slug === slug);

  if (!item) {
    return (
      <section className="pt-28 pb-16 dark:bg-dark">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
          <h2 className="text-2xl font-semibold">Nie znaleziono aktualności</h2>
        </div>
      </section>
    );
  }

  return (
    <>
      <EventDetails
        title={item.title}
        detail={item.detail}
        eventdate={item.date}
        image={item.image}
        youtubeId={item.youtubeId}
      />
      <Volunteer />
    </>
  );
}