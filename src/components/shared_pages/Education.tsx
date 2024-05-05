const Education = () => {
  return (
    <div className="w-full mt-24">
      <h2 className="text-5xl mb-6 font-semibold" id="education">
        Education
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Subject</th>
              <th className="text-lg">Institute</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Diploma In Engineering</td>
              <td>Mechanical Engineering</td>
              <td>Shamoli Ideal Polytechnic Institute</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Secondary School Certificate</td>
              <td>General Mechanics</td>
              <td>Rajibpur Pilot Model High School (VOC)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;
