import React, { useState } from 'react';
import API from '../api';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f7f7fa',
  },
  form: {
    background: '#fff',
    padding: '2.5rem 2.5rem 2rem 2.5rem',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '350px',
    alignItems: 'center',
    gap: '1rem',
    position: 'relative',
  },
  icon: {
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    padding: '0.85rem',
    margin: '0',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '1.05rem',
    background: '#f9f9fc',
    outline: 'none',
    transition: 'border 0.2s',
  },
  select: {
    width: '100%',
    padding: '1.1rem',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '1.15rem',
    background: '#f9f9fc',
    outline: 'none',
    margin: '0',
    transition: 'border 0.2s',
  },
  button: {
    width: '100%',
    padding: '1.1rem',
    background: 'linear-gradient(90deg,#6c3ef5 60%,#7f53f7 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1.15rem',
    marginTop: '0.5rem',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(108,62,245,0.08)',
    letterSpacing: '0.02em',
  },
  error: {
    color: '#d32f2f',
    marginBottom: '0.5rem',
    fontSize: '0.98rem',
    textAlign: 'center',
  },
  success: {
    color: '#388e3c',
    marginBottom: '0.5rem',
    fontSize: '0.98rem',
    textAlign: 'center',
  },
  loginLink: {
    color: '#6c3ef5',
    textDecoration: 'none',
    fontWeight: 500,
    marginTop: '1.2rem',
    fontSize: '1.05rem',
    display: 'block',
    textAlign: 'center'
  }
};

function Register() {
  const [form, setForm] = useState({ username: '', password: '', role: 'user' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await API.post('/auth/register', form);
      setSuccess('Registration successful! You can now login.');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.icon}>
          <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="register" style={{width:'48px',height:'48px',marginRight:'8px'}} />
        </div>
        <h2 style={{ marginBottom: '0.5rem', color: '#222', fontWeight: 700, fontSize: '1.5rem' }}>Create Account</h2>
        <input
          style={styles.input}
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="role" style={{width:'100%',textAlign:'left',fontWeight:500,marginBottom:'-0.5rem',fontSize:'1.05rem',color:'#222'}}>Role</label>
        <select
          id="role"
          style={styles.select}
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button style={styles.button} type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        <a href="/login" style={styles.loginLink}>
          <span role="img" aria-label="login">🔑</span> Already have an account? Login
        </a>
        {error && <div style={styles.error}>{error}</div>}
        {success && <div style={styles.success}>{success}</div>}
      </form>
    </div>
  );
}

export default Register;