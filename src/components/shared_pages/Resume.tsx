const Resume = () => {
  //resume download
  const resumeLink = `https://drive.google.com/file/d/1c-B8cVtNF9Mrud8xiGaWfJez5wODfXVj/view?usp=sharing`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "frontendDeveloper.pdf";
    link.click();
  };

  return (
    <div className="mt-24">
      <h2 className="text-5xl mb-12 font-semibold" id="resume">
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
    </div>
  );
};

export default Resume;
