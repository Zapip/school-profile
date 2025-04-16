'use client';
import React from 'react';

type VideoBrowserFrameProps = {
  videoUrl: string;
  title?: string;
};

const VideoBrowserFrame: React.FC<VideoBrowserFrameProps> = ({
  videoUrl,
  title = 'uteach.com',
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto rounded-xl overflow-hidden ">
      {/* Browser-like Header */}
      <div className="bg-white px-4 py-2 flex items-center justify-between border-b border-gray-200">
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-sm text-gray-600">{title}</span>
        <div className="w-16" /> {/* Spacer */}
      </div>

      {/* Video Iframe */}
      <div className="aspect-video w-full bg-black ">
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
