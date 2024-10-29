import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function EditStudent() {
  const { id } = useParams();
  const history = useHistory();
  const [student, setStudent] = useState(null);
  const [formData, setFormData] = useState({
    fullname: '',
    address: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    programStudy: ''
  });

  useEffect(() => {
    const fetchStudent = async () => {
      const response = await axios.get(`http://localhost:3001/student/${id}`);
      setStudent(response.data);
      setFormData(response.data);
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const facultyMap = {
      'Ekonomi': 'Fakultas Ekonomi',
      'Manajemen': 'Fakultas Ekonomi',
      'Akuntansi': 'Fakultas Ekonomi',
      'Administrasi Publik': 'Fakultas Ilmu Sosial dan Politik',
      'Administrasi Bisnis': 'Fakultas Ilmu Sosial dan Politik',
      'Hubungan Internasional': 'Fakultas Ilmu Sosial dan Politik',
      'Teknik Sipil': 'Fakultas Teknik',
      'Arsitektur': 'Fakultas Teknik',
      'Matematika': 'Fakultas Teknologi Informasi dan Sains',
      'Fisika': 'Fakultas Teknologi Informasi dan Sains',
      'Informatika': 'Fakultas Teknologi Informasi dan Sains',
    };
    
    const faculty = facultyMap[formData.programStudy] || '';

    await axios.put(`http://localhost:3001/student/${id}`, {
      ...formData,
      faculty,
    });
    history.push('/student'); // Kembali ke halaman student setelah edit
  };

  if (!student) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Fullname:
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              data-testid="name"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              data-testid="address"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              data-testid="phoneNumber"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Birth Date:
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              data-testid="date"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              data-testid="gender"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Program Study:
            <select
              name="programStudy"
              value={formData.programStudy}
              onChange={handleChange}
              data-testid="prody"
              required
            >
              <option value="">Select Program Study</option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="Manajemen">Manajemen</option>
              <option value="Akuntansi">Akuntansi</option>
              <option value="Administrasi Publik">Administrasi Publik</option>
              <option value="Administrasi Bisnis">Administrasi Bisnis</option>
              <option value="Hubungan Internasional">Hubungan Internasional</option>
              <option value="Teknik Sipil">Teknik Sipil</option>
              <option value="Arsitektur">Arsitektur</option>
              <option value="Matematika">Matematika</option>
              <option value="Fisika">Fisika</option>
              <option value="Informatika">Informatika</option>
            </select>
          </label>
        </div>
        <button type="submit" data-testid="edit-btn">Edit Student</button>
      </form>
    </div>
  );
}

export default EditStudent;
