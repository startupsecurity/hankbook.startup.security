import LinkSection from "@/components/ui/LinkSection";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Section
          title="Mission & Vision"
          content={[
            "Mission: Secure the tools, technologies, and companies that are building the future we want",
          ]}
        />
        <Section title="Values" content={[
          "1. We are a business",
          "2. Stronger together",
          "3. Action beats reaction",
          "4. Ship fast or die young",
          "5. All we can do is better"
        ]} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <LinkSection title="Company" links={[
          { text: "History", url: "/history" },
          { text: "The Team", url: "/team" },
          { text: "About our values", url: "/values" },
          { text: "Logos & Assets", url: "/assets" },
          { text: "Company roadmap", url: "/roadmap" },
          { text: "FAQ's", url: "/faqs" }
        ]} />
        <LinkSection title="{How we work}" links={[
          { text: "Distributed native", url: "/distributed-native" },
          { text: "How we communicate", url: "/communication" },
          { text: "Things every employee should know", url: "/things-every-employee-should-know" },
          { text: "Hack in public", url: "/hack-in-public" },
          { text: "Reading list", url: "/reading-list" }
        ]} />
        <LinkSection title="</Employment>" links={[
          { text: "Benefits & Compensation", url: "/benefits" },
          { text: "Company equipment", url: "/equipment" },
          { text: "Travel Policy", url: "/travel-policy" },
          { text: "Reimbursements", url: "/reimbursements" }
        ]} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <LinkSection title="Join the party" links={[
          { text: "Careers page", url: "/careers" },
          { text: "Recruitment process", url: "/recruitment" },
          { text: "Join us on Discord", url: "https://discord.gg/6BtTGGwT", isExternal: true }
        ]} />
        <LinkSection title="<FindUs>" links={[
          { text: "learn.startup.security", url: "https://learn.startup.security", isExternal: true },
          { text: "startupventures.io", url: "https://startupventures.io", isExternal: true }
        ]} />
      </div>
    </>
  );
}
