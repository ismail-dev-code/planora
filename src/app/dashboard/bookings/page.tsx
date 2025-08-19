

import { FC } from "react";

const BookingPage: FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Booking Page
        </h1>

        {/* Booking Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block font-medium text-gray-700">
              Booking Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="time" className="block font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="time"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="guests" className="block font-medium text-gray-700">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              min={1}
              max={20}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="e.g., 2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </main>
  );
};

export default BookingPage;
