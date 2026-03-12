export default function LoadingFullScreen() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      {/* Spinner */}
      <div className="mb-8">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-900 rounded-full animate-spin"></div>
      </div>

      {/* Loading Text */}
      <p className="text-gray-600 text-lg">Loading, please wait...</p>
    </div>
  );
}
