import Table from "react-bootstrap/Table";

function Employees() {
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
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Akshay</td>
            <td>Ahuja</td>
            <td>Akshay01@gmail.com</td>
            <td>8-May-2023</td>
            <td>Super Admin</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>2</td>
            <td>sahil</td>
            <td>sharma</td>
            <td>Sahil@gmail.com</td>
            <td>8-May-2023</td>
            <td>Super Admin</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sumit</td>
            <td>Parashar</td>
            <td>Sumitt@gmail.com</td>
            <td>7-May-2023</td>
            <td>Super Admin</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Employees;
