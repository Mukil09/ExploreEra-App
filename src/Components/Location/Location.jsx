import React from "react";

function Location() {
  return (
    <div>
      <div>
        <div className="container pb-10">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>
          <div className="rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.23106585274!2d79.87933474107955!3d13.047985943115949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712213287949!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
