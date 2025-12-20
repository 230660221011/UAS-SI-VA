import { useState } from 'react';
import { login } from '../api/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await login(email, password);
      console.log('Login response:', res); // Debug
      
      // Simpan token
      if (res.token) {
        localStorage.setItem('token', res.token);
        
        // Redirect ke dashboard
        window.location.href = '/dashboard';
      } else {
        alert('Login berhasil tapi token tidak ditemukan');
      }
      
    } catch (error) {
      console.error('Login error:', error);
      alert(error.response?.data?.message || 'Login gagal, periksa email dan password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login Sistem Peminjaman
        </h2>

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full border p-3 rounded mb-6"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button 
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
}