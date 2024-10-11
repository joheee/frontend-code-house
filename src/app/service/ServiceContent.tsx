import ServiceCard from "./ServiceCard";

export default function ServiceContent() {
  return (
    <>
      <ServiceCard
        title="Web App Development"
        description="
        Develop web products, portals, or web based software for business workflow automation.
        "
      />
      <ServiceCard
        title="Rapid Prototyping"
        description="
        Build Minimum Viable Products to test the market; Software prototypes to gather feedback and gauge applicability.
        "
      />
      <ServiceCard
        title="Software Connectors"
        description="
        Streamline processes by connecting different applications.
        "
      />
      <ServiceCard
        title="API Development and Management"
        description="
        Connect internal applications to improve efficiency or explore new monetizable opportunities by.
        "
      />
    </>
  );
}
