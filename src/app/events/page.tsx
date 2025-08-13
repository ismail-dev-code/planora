"use client";

import React, { useEffect, useState } from "react";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching data from API
    async function fetchEvents() {
      try {
        setLoading(true);
        setError(null);

        // Replace with your API endpoint or server call
        const res = await fetch("/api/events");
        if (!res.ok) {
          throw new Error("Failed to fetch events");
        }

        const data: Event[] = await res.json();
        setEvents(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>

      {loading && <p>Loading events...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && events.length === 0 && <p>No events found.</p>}

      <ul className="space-y-6">
        {events.map(({ id, title, date, location, description }) => (
          <li
            key={id}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">
              {new Date(date).toLocaleDateString()} — {location}
            </p>
            <p className="mt-2 text-gray-700">{description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
