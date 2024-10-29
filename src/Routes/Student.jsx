import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Student() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:3001/student');
    setStudents(response.data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/student/${id}`);
    fetchStudents(); // Refresh the list
  };

  const filteredStudents = filter === 'All' ? students : students.filter(student => student.faculty === filter);

  return (
    <div>
      <select data-testid="filter" onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
        <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
        <option value="Fakultas Teknik">Fakultas Teknik</option>
        <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
      </select>

      {loading ? (
        <p>Loading ...</p>
      ) : (
        <table id="table-student">
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Faculty</th>
              <th>Program Study</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student.id} className="student-data-row">
                <td>{index + 1}</td>
                <td onClick={() => history.push(`/student/${student.id}`)}>{student.fullname}</td>
                <td>{student.faculty}</td>
                <td>{student.programStudy}</td>
                <td>
                  <button 
                    data-testid={`delete-${student.id}`} 
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Student;
