'use client'
const Resume = () => {
  //resume download
  const resumeLink = `https://drive.google.com/file/d/15dB2C1Qmcq7Xt9zZr3dA-qfFhyos8XrP/view?usp=drive_link`;

  const cvLink = `https://drive.google.com/file/d/17z9PQy3PL_Nc3enKSSLk4MTrnajhhlOO/view?usp=drive_link`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Zehad_Sarkar_Resume.pdf";
    link.click();
  };

  // cv download link event handler
  const handleCvDownload = () => {
    const link = document.createElement("a");
    link.href = cvLink;
    link.download = "Zehad_Sarkar_CV.pdf";
    link.click();
  };

  return (
    <div className="mt-24">
      <h2 className="text-5xl mb-8 font-semibold" id="resume">
        My Resume
      </h2>
      <div className="flex justify-start items-center">
        <p className="text-xl"> See the resume click on </p>
        <span
          className="btn btn-active btn-link text-xl"
          onClick={handleDownload}
        >
          Download
        </span>
      </div>
      <div className="flex justify-start items-center">
        <p className="text-xl"> See the CV click on </p>
        <span
          className="btn btn-active btn-link text-xl"
          onClick={handleCvDownload}
        >
          Download
        </span>
      </div>
    </div>
  );
};

export default Resume;
