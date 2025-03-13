"use client";
import { useEffect, useState } from "react";
import { Loader2, ImageIcon } from "lucide-react";
import {Link} from 'next-view-transitions';

export default function FacebookGallery() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/facebook");
        
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Handle window resize to show 8 or 9 posts based on screen size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set up event listener
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      // Initial check
      handleResize();
    }
    
    // Clean up
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // Fallback data to maintain layout if there are fewer posts
  const fallbackData = Array.from({ length: 9 }, (_, i) => ({
    id: `fallback${i + 1}`,
    message: `Fallback post ${i + 1}`
  }));

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto container flex items-center justify-center h-40">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-2">Loading posts...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto container text-center py-10 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  // Determine how many posts to display based on screen width
  const largeScreenBreakpoint = 1024; // lg breakpoint
  const displayCount = windowWidth >= largeScreenBreakpoint ? 9 : 8;
  
  // Combine real posts with fallback data if needed
  const displayPosts = posts.length >= displayCount 
    ? posts.slice(0, displayCount) 
    : [...posts, ...fallbackData.slice(posts.length, displayCount)];

  // Function to get the correct Facebook post URL
  const getFacebookPostUrl = (post) => {
    // If it's a fallback post, return a default URL
    if (post.id && post.id.startsWith("fallback")) {
      return '/projects';
    }
    
    // If post ID contains an underscore, it's in the format "pageId_postId"
    if (post.id && post.id.includes('_')) {
      const [pageId, postId] = post.id.split('_');
      return `https://facebook.com/${pageId}/posts/${postId}`;
    }
    
    // If we have a permalink_url, use that directly
    if (post.permalink_url) {
      return post.permalink_url;
    }
    
    // Fallback to standard post URL format
    return post.id ? `https://facebook.com/${post.id}` : '/projects';
  };

  // Function to get image source from post
  const getPostImageSrc = (post) => {
    // Check if post has attachments with image
    if (post.attachments?.data?.[0]?.media?.image?.src) {
      return post.attachments.data[0].media.image.src;
    } 
    // Check if post has full_picture field
    else if (post.full_picture) {
      return post.full_picture;
    }
    // Check if post has picture field
    else if (post.picture) {
      return post.picture;
    }
    // Return null if no image found
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center text-center px-8 md:px-8 lg:px-0  max-w-7xl mx-auto container">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-2 md:gap-4 w-full">
        {displayPosts.map((post, index) => {
          const imageSrc = getPostImageSrc(post);
          const postUrl = getFacebookPostUrl(post);
          
          return (
            <Link 
              key={post.id || index}
              href={postUrl}
              target="_blank"
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative hover:opacity-90 transition-opacity"
            >
              {imageSrc ? (
                // Using standard img tag instead of Next/Image to avoid domain restrictions
                <img
                  src={imageSrc}
                  alt={`Facebook post ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-gray-500" />
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}