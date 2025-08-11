"use client";

import React, { useEffect, useState } from "react";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
};

const demoEvents: Event[] = [
  {
    id: "1",
    title: "React Conference 2025",
    date: "2025-09-15",
    location: "New York, NY",
    description: "A conference focusing on React and its ecosystem.",
  },
  {
    id: "2",
    title: "JavaScript Meetup",
    date: "2025-09-20",
    location: "San Francisco, CA",
    description: "Monthly meetup for JavaScript developers.",
  },
  {
    id: "3",
    title: "Next.js Workshop",
    date: "2025-10-05",
    location: "Austin, TX",
    description: "Hands-on workshop on Next.js 14 features.",
  },
  {
    id: "4",
    title: "Frontend Masters Webinar",
    date: "2025-10-10",
    location: "Online",
    description: "Webinar covering advanced frontend techniques.",
  },
  {
    id: "5",
    title: "CSS Grid and Flexbox Bootcamp",
    date: "2025-10-22",
    location: "Seattle, WA",
    description: "Learn modern layout techniques for web apps.",
  },
  {
    id: "6",
    title: "TypeScript Deep Dive",
    date: "2025-11-01",
    location: "Boston, MA",
    description: "In-depth session on TypeScript best practices.",
  },
  {
    id: "7",
    title: "Node.js Backend Conference",
    date: "2025-11-12",
    location: "Chicago, IL",
    description: "Backend development with Node.js and Express.",
  },
  {
    id: "8",
    title: "GraphQL Summit",
    date: "2025-11-20",
    location: "Denver, CO",
    description: "Explore GraphQL and API design patterns.",
  },
  {
    id: "9",
    title: "Web Accessibility Bootcamp",
    date: "2025-12-02",
    location: "Portland, OR",
    description: "Improving accessibility in modern web apps.",
  },
  {
    id: "10",
    title: "Jamstack Conf",
    date: "2025-12-15",
    location: "Los Angeles, CA",
    description: "Static sites and modern web architecture.",
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(demoEvents);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        setError(null);

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
