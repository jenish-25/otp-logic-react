import { useNavigate } from "react-router-dom";

const SecondPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-green-600 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to the Dashboard 🎉</h1>
        <p className="text-lg mt-4">You have successfully verified your age.</p>
        
        <button
          onClick={() => navigate("/email")}
          className="mt-6 px-6 py-3 bg-white text-green-600 font-semibold rounded-md hover:bg-gray-300 transition-all"
        >
          Go next
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
