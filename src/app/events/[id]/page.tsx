
import React from "react";

interface EventDetailsPageProps {
  params: {
    id: string;
  };
}

export default function EventDetailsPage({ params }: EventDetailsPageProps) {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">Event Details Page</h1>
      <p className="text-gray-700">Id: {id}</p>
    </div>
  );
}
