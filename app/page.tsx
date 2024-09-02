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
          "History",
          "The Team",
          "About our values",
          "Logos & Assets",
          "Company roadmap",
          "FAQ's"
        ]} />
        <LinkSection title="{How we work}" links={[
          "Distributed native",
          "How we communicate",
          "Hack in public"
        ]} />
        <LinkSection title="</Employment>" links={[
          "Benefits & Compensation",
          "Company equipment",
          "Travel Policy",
          "Reimbursements"
        ]} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <LinkSection title="Join the party" links={[
          "Careers page",
          "Recruitment process",
          "Join us on Discord"
        ]} />
        <LinkSection title="<FindUs>" links={[
          "learn.startup.security",
          "startupventures.io"
        ]} />
      </div>
    </>
  );
}
