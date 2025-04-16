'use client';
import React from 'react';

type VideoBrowserFrameProps = {
  videoUrl: string;
  title?: string;
};

const VideoBrowserFrame: React.FC<VideoBrowserFrameProps> = ({ videoUrl, title = 'uteach.com' }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-4">
      {/* Frame header seperti browser tab */}
      <div className="bg-white rounded-t-xl px-4 py-2 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-sm text-gray-600">{title}</span>
        <div className="w-16" /> {/* Spacer */}
      </div>

      {/* Iframe Container */}
      <div className="aspect-video w-full bg-black rounded-b-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBrowserFrame;
