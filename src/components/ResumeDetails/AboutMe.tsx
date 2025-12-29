const AboutMe = () => {
  type PersonalInfoItem = {
    label: string;
    value: string;
  };

  const PERSONAL_INFO: PersonalInfoItem[] = [
    { label: "Name", value: "Sakif Fataliyev" },
    { label: "Experience", value: "3+ Years" },
    { label: "Nationality", value: "Azerbaijanian" },
    { label: "Phone", value: "+994 (50) 585-32-67" },
    { label: "Email", value: "ftliyevsakif@gmail.com" },
    { label: "Languages", value: "English, Russian, Azerbaijani" },
  ];

  return (
    <div className="flex flex-col items-start justify-start gap-15">
      {/* Section Heading */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">About me</h1>
        <p className="text-muted-foreground max-w-md">
          Personal details and contact information relevant for professional
          purposes.
        </p>
      </div>
      {/* Section Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-5 w-full md:w-auto">
        {PERSONAL_INFO.map((item) => (
          <div
            className="flex items-center justify-center md:justify-start gap-2 text-lg lg:text-xl"
            key={item.label}
          >
            <p className="text-muted-foreground">{item.label}:</p>
            <p className="">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
