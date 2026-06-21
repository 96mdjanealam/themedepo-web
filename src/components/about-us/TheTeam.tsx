import {
  teamCeoImg,
  teamCtoImg,
  teamEmployee1,
  teamEmployee2,
  teamEmployee3,
  teamEmployee4,
} from "@/constants/images";
import Image, { StaticImageData } from "next/image";

// ---------------------------------------------------------------------------
// Types & data
// ---------------------------------------------------------------------------

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: StaticImageData;
}

const TEAM: TeamMember[] = [
  {
    name: "Abir Siddique Nayeem",
    role: "Chief Executive Officer (CEO)",
    bio: "Visionary leader driving company strategy, innovation, and growth. Focused on building long-term value for clients while fostering a culture of excellence and collaboration.",
    image: teamCeoImg,
  },
  {
    name: "Tahmid Rahman",
    role: "Chief Technology Officer (CTO)",
    bio: "Technology strategist with extensive experience in software architecture, cloud infrastructure, and scalable systems. Leads the engineering vision and technical direction of the company.",
    image: teamCtoImg,
  },
  {
    name: "Ashiq Bhai",
    role: "Lead Frontend Engineer",
    bio: "Expert in modern frontend technologies, crafting high-performance, responsive, and accessible user interfaces. Passionate about delivering exceptional user experiences.",
    image: teamEmployee1,
  },
  {
    name: "Mahmudul Hasan",
    role: "Lead Backend Engineer",
    bio: "Specializes in designing secure, scalable, and efficient backend systems. Experienced in API development, database optimization, and distributed application architecture.",
    image: teamEmployee2,
  },
  {
    name: "Zakir Hossain",
    role: "Lead UI/UX Designer",
    bio: "Creative designer focused on user-centered experiences, intuitive interfaces, and impactful visual design. Transforms complex ideas into elegant and engaging digital products.",
    image: teamEmployee3,
  },
  {
    name: "Jane Alam",
    role: "Frontend Engineer",
    bio: "Dedicated frontend developer skilled in React, Next.js, and modern web technologies. Passionate about building clean, maintainable, and user-friendly web applications.",
    image: teamEmployee4,
  },
];

// ---------------------------------------------------------------------------
// Member card
// ---------------------------------------------------------------------------

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="flex flex-col">
    <div className="relative w-full aspect-square overflow-hidden mb-5">
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top"
      />
    </div>
    <h3 className="font-syne font-semibold text-lg text-foreground mb-1">
      {member.name}
    </h3>
    <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-primary mb-3">
      {member.role}
    </p>
    <p className="text-sm text-medium-gray leading-relaxed max-w-sm">
      {member.bio}
    </p>
  </div>
);

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const TheTeam = () => (
  <section className="py-20 lg:py-32 px-4 bg-light-gray/5">
    <div className="container mx-auto">
      {/* Header */}
      <div className="max-w-xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 mb-6">
          <span className="w-2 h-2 shrink-0 bg-primary" aria-hidden="true" />
          <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-dark-gray">
            The People
          </span>
        </div>
        <h2 className="font-syne font-bold text-4xl sm:text-5xl text-foreground mb-4">
          Meet the team<span className="text-primary">.</span>
        </h2>
        <p className="text-sm sm:text-base text-dark-gray leading-relaxed">
          We&apos;re a small, distributed team of designers and engineers
          passionate about building tools that help others ship faster.
        </p>
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
        {TEAM.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  </section>
);

export default TheTeam;
