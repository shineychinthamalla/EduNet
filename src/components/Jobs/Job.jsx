import React, { useState } from "react";
import JobCard from "./JobCard";
import Navigation from "./JobsNavigation";

const Jobs = () => {
  const [activeTab, setActiveTab] = useState("fullTime");

  const jobListings = [
    {
      company: "Google Inc.",
      title: "Fresher UI/UX Designer (3 Year Exp )",
      location: "Dallas, Texas",
      type: "Full Time",
      salary: "$120,000 - $125,000",
    },
    {
      company: "Facebook Inc.",
      title: "Fresher UI/UX Designer (3 Year Exp )",
      location: "Dallas, Texas",
      type: "Full Time",
      salary: "$120,000 - $125,000",
    },
    {
      company: "LinkedIn Inc.",
      title: "Fresher UI/UX Designer (3 Year Exp )",
      location: "Dallas, Texas",
      type: "Full Time",
      salary: "$120,000 - $125,000",
    },
    // Add more job listings here...
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">
          Add Job
        </button>
      </div>

      <div className="space-y-4 mt-8">
        {jobListings.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
