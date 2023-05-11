import Table from "react-bootstrap/Table";

function Interns() {
  return (
    <div className="container mx-2">
      <Table striped style={{ margin: "25px", width: "190vh" }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Created On</th>
            <th>Project</th>
            <th>Lead</th>
            <th>University</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Suhan</td>
            <td>Ahuja</td>
            <td>suhan@gmail.com</td>
            <td>8-May-2023</td>
            <td>Athena</td>
            <td>Harry john</td>
            <td>Chitkara university</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>2</td>
            <td>vivek</td>
            <td>roy</td>
            <td>roy@gmail.com</td>
            <td>8-May-2023</td>
            <td>Gemini website</td>
            <td>Sudhir shrivastava</td>
            <td>GLA university</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>3</td>
            <td>rahul</td>
            <td>Parashar</td>
            <td>Sumitt@gmail.com</td>
            <td>7-May-2023</td>
            <td>Gembook</td>
            <td>Raghav goyal</td>
            <td>Chitkara university</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Interns;
