import React, { useState } from 'react';
import Article from '../Article/Article'; // Make sure to import the LearnPressTheme component

// Helper function to generate dates for the calendar
const generateDates = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const dates = [];

  // Add empty slots for days before the first day of the month
  for (let i = 0; i < firstDay.getDay(); i++) {
    dates.push(null);
  }

  // Add all days of the month
  for (let i = 1; i <= lastDay.getDate(); i++) {
    dates.push(new Date(year, month, i));
  }

  return dates;
}

// Sample events data
const events = [
  { id: 1, title: 'React Workshop', type: 'workshop', date: new Date(2024, 9, 5), time: '10:00 AM - 2:00 PM', description: 'Learn the basics of React' },
  { id: 2, title: 'AI Seminar', type: 'seminar', date: new Date(2024, 9, 12), time: '3:00 PM - 5:00 PM', description: 'Exploring the future of AI' },
  { id: 3, title: 'UX Design Workshop', type: 'workshop', date: new Date(2024, 9, 18), time: '9:00 AM - 12:00 PM', description: 'Hands-on UX design techniques' },
  { id: 4, title: 'Cybersecurity Seminar', type: 'seminar', date: new Date(2024, 9, 25), time: '2:00 PM - 4:00 PM', description: 'Latest trends in cybersecurity' },
]

export default function CalendarComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const dates = generateDates(currentDate.getFullYear(), currentDate.getMonth());

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  }

  const getEventsForDate = (date) => {
    return events.filter(event =>
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  }

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  }

  const handleCloseDetails = () => {
    setSelectedEvent(null); // Close event details and go back to calendar view
  }

  if (selectedEvent) {
    return (
      <div className="container mx-auto p-4">
        {/* Show event details with LearnPressTheme */}
        <Article />

        <div className="mt-4">
          <button
            onClick={handleCloseDetails}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Back to All Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Events Calendar</h1>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigateMonth(-1)} className="px-2 py-1 border rounded">Prev</button>
          <span className="text-lg font-semibold">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <button onClick={() => navigateMonth(1)} className="px-2 py-1 border rounded">Next</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold p-2">{day}</div>
        ))}
        {dates.map((date, index) => (
          <div key={index} className="border rounded-lg p-2 h-32 overflow-y-auto">
            {date && (
              <>
                <div className="text-right text-sm text-gray-500">{date.getDate()}</div>
                {getEventsForDate(date).map(event => (
                  <div
                    key={event.id}
                    className={`w-full text-left mb-1 p-1 text-xs cursor-pointer ${event.type === 'workshop' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}
                    onClick={() => handleEventClick(event)}
                  >
                    <strong>{event.title}</strong>
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex space-x-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-100 mr-2"></div>
          <span>Workshop</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-100 mr-2"></div>
          <span>Seminar</span>
        </div>
      </div>
    </div>
  );
}