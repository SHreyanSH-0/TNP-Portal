import Navbar from '../components/Navbar';
import DemographicsContent from '../components/DemographicsContent';

export default function Demographics() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-16">
      <Navbar />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Batch Strength Demographics</h1>
          <p className="text-gray-700 mt-2 font-semibold text-base sm:text-lg">Comprehensive overview of student distribution and diversity.</p>
        </div>
        <DemographicsContent />
      </div>
    </div>
  );
}