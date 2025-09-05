'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const MyProfile = () => {
  const [user, setUser] = useState<any>(null); // Store user profile
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>(''); // Error message
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = Cookies.get('token'); // Get JWT token from cookies
      if (!token) {
        setError('No token found. Please log in.');
        return;
      }

      setLoading(true);
      try {
        const response = await fetch('http://localhost:3001/user/my-profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Send token in Authorization header
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include credentials for cookies
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data); // Set the user data to state
        } else {
          throw new Error('Failed to fetch profile');
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || 'An error occurred while fetching the profile');
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle the edit functionality (set form values to user profile)
  const handleEdit = () => {
    router.push('/my-profile/edit');  // Navigate to edit page
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      {user && (
        <div>
          <div className="space-y-4">
            <div>
              <label className="font-semibold">Name:</label>
              <p>{user.name}</p>
            </div>
            <div>
              <label className="font-semibold">Email:</label>
              <p>{user.email}</p>
            </div>
            <div>
              <label className="font-semibold">Password:</label>
              <p>******</p> {/* Don't show actual password */}
            </div>
          </div>

          <button
            onClick={handleEdit}
            className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
