const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <div className="p-6 bg-white rounded-lg shadow-md border">
          <div className="flex items-center space-x-3">
            <span className="bg-blue-100 p-3 rounded-full">🏠</span>
            <span className="text-lg font-semibold">All Properties</span>
          </div>
          <p className="text-2xl font-bold mt-4">1</p>
          <a href="/my-properties" className="text-blue-500 mt-2 inline-block">
            Go to list →
          </a>
        </div>

        
        <div className="p-6 bg-white rounded-lg shadow-md border">
          <div className="flex items-center space-x-3">
            <span className="bg-yellow-100 p-3 rounded-full">⏳</span>
            <span className="text-lg font-semibold">Pending Properties</span>
          </div>
          <p className="text-2xl font-bold mt-4">1</p> 
          <a href="/pending-properties" className="text-blue-500 mt-2 inline-block">
            Go to list →
          </a>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md border">
          <div className="flex items-center space-x-3">
            <span className="bg-blue-100 p-3 rounded-full">📩</span>
            <span className="text-lg font-semibold">Total Enquiries</span>
          </div>
          <p className="text-2xl font-bold mt-4">0</p>
          <a href="/enquiries" className="text-blue-500 mt-2 inline-block">
            Go to list →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
