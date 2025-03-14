


"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRightIcon, Loader2, ImageIcon } from "lucide-react";

export default function ProjectsCard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Fallback data to maintain layout if there are fewer than 3 posts
  const fallbackData = [
    {
      id: "fallback1",
      message: "Project name here",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nulla dolor amet.",
      tags: ["Tag one", "Tag two", "Tag three"]
    },
    {
      id: "fallback2",
      message: "Project name here",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nulla dolor amet.",
      tags: ["Tag one", "Tag two", "Tag three"]
    },
    {
      id: "fallback3",
      message: "Project name here",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nulla dolor amet.",
      tags: ["Tag one", "Tag two", "Tag three"]
    }
  ];

  if (loading) {
    return (
      <div className="w-full max-w-7xl container mx-auto flex items-center justify-center h-40">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-2">Loading posts...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl container mx-auto text-center py-10 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  // Combine real posts with fallback data if needed
  const displayPosts = posts.length >= 3 ? posts.slice(0, 3) : [
    ...posts,
    ...fallbackData.slice(posts.length, 3)
  ];

  // Function to get the correct Facebook post URL
  const getFacebookPostUrl = (post) => {
    // If it's a fallback post, just return a default URL
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

  // Function to extract tags from post content or use fallback tags
  const extractTags = (post) => {
    if (post.id && post.id.startsWith("fallback")) {
      return post.tags || ["Facebook", "Social Media", "Update"];
    }
    
    // Try to extract hashtags from the message if available
    if (post.message) {
      const hashtags = post.message.match(/#[a-zA-Z0-9_]+/g);
      if (hashtags && hashtags.length > 0) {
        return hashtags.slice(0, 3).map(tag => tag.substring(1));
      }
    }
    
    // Default tags if none found
    return ["Facebook", "Social Media", "Update"];
  };

  // Function to get the image source for a post
  const getImageSource = (post) => {
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
    // Default to fallback image
    else if (post.id && post.id.startsWith("fallback")) {
      return `/assets/p${post.id.charAt(post.id.length - 1)}.jpg`;
    }
    
    // Final fallback
    return "/assets/placeholder.jpg";
  };

  return (
    <div className="w-full max-w-7xl px-8 md:px-8 lg:px-0  min-h-screen h-auto flex flex-col container mx-auto">
      <div className="flex flex-col gap-6 max-w-7xl container mx-auto">
                <div className="mb-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center sm:text-start">Our Featured Projects</h1>
                <p className="text-gray-600 mt-2 text-center sm:text-start">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        {displayPosts.map((post, index) => (
          <div key={post.id || index} className="border-b-2 border-gray-300 flex flex-col md:flex-row flex-1 gap-4 pb-6">
            <div className="w-full md:w-1/2 transition-all hover:shadow-lg hover:-translate-y-1 hover:cursor-pointer">
              {getImageSource(post).startsWith('/') ? (
                <Image
                  src={getImageSource(post)}
                  alt={post.message ? post.message.substring(0, 60) : "Facebook post"}
                  width={300}
                  height={200}
                  className="w-full h-[250px] object-cover rounded-md border-2 border-gray-200"
                />
              ) : (
                <div className="w-full h-[250px] relative rounded-md border-2 border-gray-200 overflow-hidden">
                  <img 
                    src={getImageSource(post)} 
                    alt={post.message ? post.message.substring(0, 60) : "Facebook post"}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 ml-0 sm:ml-6">
              <h3 className="text-xl font-semibold text-primary">
                {post.message 
                  ? post.message.split("\n")[0].substring(0, 60) + (post.message.length > 60 ? "..." : "") 
                  : "Facebook Update"}
              </h3>
              <p className="text-gray-600 text-sm">
                {post.message 
                  ? post.message.substring(0, 120) + (post.message.length > 120 ? "..." : "") 
                  : post.description || "Check out our latest update on Facebook."}
              </p>
              <div className="flex flex-wrap gap-2">
                {extractTags(post).map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 text-xs bg-green-300/25 text-primary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={getFacebookPostUrl(post)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:font-bold flex items-center text-sm gap-2"
              >
                View on Facebook <ChevronRightIcon className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
