// app/components/FeaturedProfile.js
export default function FeaturedProfile() {
  return (
    <div className="w-64 bg-white p-5 shadow-md h-full">
      <h4 className="text-lg font-semibold">Featured Profiles</h4>
      <div className="space-y-4 mt-4">
        <div>
          <h5 className="font-bold">Florencio Dorrance</h5>
          <p className="text-gray-500">Market Development Manager</p>
        </div>
        <div>
          <h5 className="font-bold">Benny Spanbauer</h5>
          <p className="text-gray-500">Area Sales Manager</p>
        </div>
      </div>
    </div>
  );
}
