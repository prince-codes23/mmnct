const MatchCard = ({ type }) => {
  const teamStyle = "flex items-center justify-center";
  const teamName = "font-extrabold text-lg";

  const shortformstyle = "h-[48px]";

  if (type === "short") {
    return (
      <div className="flex flex-col justify-center items-center my-2 bg-white w-[160px] h-[79px] rounded-[8px] mx-auto px-2 shadow-lg">
        <img
          alt="team-logo"
          className={shortformstyle}
          src="https://mir-s3-cdn-cf.behance.net/projects/404/168243107813919.Y3JvcCwzMDAwLDIzNDYsMCw0MjM.jpg"
        />
        <p className="text-[15px] font-[600]">Team's Name</p>
      </div>
    );
  } else {
    return (
      <div className="flex bg-white md:justify-evenly md:w-4/5 md:mx-auto my-4 text-sm items-center justify-center shadow-lg py-4 mx-4 rounded-lg">
        {/* team 1 */}
        <div className={teamStyle}>
          <p className={teamName}>Team 1</p>
          <img
            alt="team-logo"
            className="team-logo"
            src="https://mir-s3-cdn-cf.behance.net/projects/404/168243107813919.Y3JvcCwzMDAwLDIzNDYsMCw0MjM.jpg"
          />
        </div>

        {/* timing and date */}
        <div>
          <p className="text-orange-500 font-bold">6:30 pm</p>
          <p className="text-gray-400">
            27<sup>th</sup> JAN
          </p>
        </div>

        {/* Team 2 */}
        <div className={teamStyle}>
          <img
            alt="team-logo"
            className="team-logo"
            src="https://mir-s3-cdn-cf.behance.net/projects/404/168243107813919.Y3JvcCwzMDAwLDIzNDYsMCw0MjM.jpg"
          />
          <p className={teamName}>Team 2</p>
        </div>
      </div>
    );
  }
};

export default MatchCard;