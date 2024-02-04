type ProfileProps = {
  name: string;
  profileUrl: string;
  role: string;
  alt: string;
  phoneUrl: string;
  phoneNumber: string;
};

const TeamInfo: React.FC<ProfileProps> = (props) => {
  return (
    <div className="w-auto h-auto shadow-2xl p-10">
      <img
        src={props.profileUrl}
        alt={props.alt}
        className="object-cover h-44 w-44 flex justify-center pb-5 rounded-lg"
      />
      <div className="space-y-5">
        <p className="font-bold">{props.name}</p>
        <p>{props.role}</p>
        <div className="flex items-center gap-3">
          <img
            src={props.phoneUrl}
            alt="phone number"
            className="object-cover w-12 h-12"
          />
          <p>{props.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
