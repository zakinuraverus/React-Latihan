import PropTypes from "prop-types";

const Settings = ({ activeKey }) => {
  return (
    <>
      <div className="bg-GrayDrum border border-BlueBG_Drum rounded-md h-20 flex flex-row justify-center items-center p-2">
        <p>{activeKey}</p>
      </div>
      <p className=" text-right">zakinuraverus</p>
    </>
  );
};

Settings.propTypes = {
  activeKey: PropTypes.string,
};

export default Settings;
