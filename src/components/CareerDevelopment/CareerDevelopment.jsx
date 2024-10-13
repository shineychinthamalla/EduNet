import React from 'react';

const careerDevelopmentData = [
  {
    id: 1,
    title: "Best LearnPress WordPress Theme Collection For 2023",
    description: "Looking for an amazing & well-functional LearnPress WordPress theme? Check out these top picks for 2023.",
    date: "Jan 24, 2023",
    imageUrl: "path/to/your/image", // Replace with actual image path
  },
  {
    id: 2,
    title: "How to Build a Professional Portfolio",
    description: "Learn the essential tips for creating a professional portfolio that stands out.",
    date: "Feb 15, 2023",
    imageUrl: "path/to/your/image", // Replace with actual image path
  },
  {
    id: 3,
    title: "Mastering Job Interviews: Tips for Success",
    description: "Prepare yourself for the most challenging job interviews with these expert tips.",
    date: "March 3, 2023",
    imageUrl: "path/to/your/image", // Replace with actual image path
  },
    {
      id: 4,
      title: "How to learn HTML",
      description: "Prepare yourself for the most exciting tips on starting with basics of HTML",
      date: "Dec 30, 2023",
      imageUrl: "path/to/your/image", // Replace with actual image path
    },
];

const CareerDevelopment = () => {
  const placeholderImage = "path/to/placeholder/image"; // Replace with actual placeholder image

  return (
    <div className="h-screen w-full p-6 bg-white">
      <div className="flex flex-col space-y-4">
        {careerDevelopmentData.map((resource) => (
          <div key={resource.id} className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <img
              src={resource.imageUrl || placeholderImage}
              className="w-24 h-24 object-cover rounded-lg"
              onError={(e) => (e.target.src = placeholderImage)}
            />
            <div className="flex-grow">
              <h3 className="text-lg font-bold">{resource.title}</h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
              <p className="text-sm text-gray-500">{resource.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerDevelopment;
