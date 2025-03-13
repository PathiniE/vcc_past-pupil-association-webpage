


"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import Link from "next/link";
import { ChevronRightIcon, Loader2, ImageIcon } from "lucide-react";

export default function CardComp() {
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

  // Fallback data to maintain layout if there are fewer than 5 posts
  const fallbackData = [
    {
      id: "fallback1",
      message: "New Student Orientation Scheduled for August",
      description: "Join us for an exciting orientation to kick off the semester!"
    },
    {
      id: "fallback2",
      message: "Volunteer Opportunities Available This Spring",
      description: "Make a difference by volunteering in our community events this spring!"
    },
    {
      id: "fallback3",
      message: "Volunteer Opportunities Available This Spring",
      description: "Make a difference by volunteering in our community events this spring!"
    },
    {
      id: "fallback4",
      message: "New Student Orientation Scheduled for August",
      description: "Join us for an exciting orientation to kick off the semester!"
    },
    {
      id: "fallback5",
      message: "Volunteer Opportunities Available This Spring",
      description: "Make a difference by volunteering in our community events this spring!"
    }
  ];

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

  // Combine real posts with fallback data if needed
  const displayPosts = posts.length >= 5 ? posts.slice(0, 5) : [
    ...posts,
    ...fallbackData.slice(posts.length, 5)
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

  // Function to render the image or placeholder for each post
  const renderPostImage = (post, index) => {
    // Check if post has attachments with image
    if (post.attachments?.data?.[0]?.media?.image?.src) {
      return (
        <img 
          src={post.attachments.data[0].media.image.src} 
          alt={`Post ${index + 1} image`} 
          className="h-60 w-full object-cover"
        />
      );
    } 
    // Check if post has full_picture field
    else if (post.full_picture) {
      return (
        <img 
          src={post.full_picture} 
          alt={`Post ${index + 1} image`} 
          className="h-60 w-full object-cover"
        />
      );
    }
    // Check if post has picture field
    else if (post.picture) {
      return (
        <img 
          src={post.picture} 
          alt={`Post ${index + 1} image`} 
          className="h-60 w-full object-cover"
        />
      );
    }
    // Default placeholder with icon
    else {
      return (
        <div className="bg-gray-300 h-60 w-full flex items-center justify-center">
          <ImageIcon className="w-12 h-12 text-gray-500" />
        </div>
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto container grid grid-cols-1 sm:grid-cols-12 gap-10 pl-8 pr-8 md:pl-0 md:pr-0">
      {/* First Card */}
      <div className="col-span-1 sm:col-span-6">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            {renderPostImage(displayPosts[0], 0)}
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">
              {displayPosts[0].message 
                ? displayPosts[0].message.split("\n")[0].substring(0, 60) + (displayPosts[0].message.length > 60 ? "..." : "") 
                : displayPosts[0].message}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {displayPosts[0].message 
                ? displayPosts[0].message.substring(0, 100) + (displayPosts[0].message.length > 100 ? "..." : "") 
                : displayPosts[0].description}
              <Link
                href={getFacebookPostUrl(displayPosts[0])}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:font-bold flex items-center text-sm gap-2 mt-2"
              >
                View on Facebook <ChevronRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Second Card */}
      <div className="col-span-1 sm:col-span-6 mt-6 sm:mt-0">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            {renderPostImage(displayPosts[1], 1)}
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">
              {displayPosts[1].message 
                ? displayPosts[1].message.split("\n")[0].substring(0, 60) + (displayPosts[1].message.length > 60 ? "..." : "") 
                : displayPosts[1].message}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {displayPosts[1].message 
                ? displayPosts[1].message.substring(0, 100) + (displayPosts[1].message.length > 100 ? "..." : "") 
                : displayPosts[1].description}
              <Link
                href={getFacebookPostUrl(displayPosts[1])}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:font-bold flex items-center text-sm gap-2 mt-2"
              >
                View on Facebook <ChevronRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Third Card (Full Width) */}
      <div className="col-span-1 sm:col-span-12 sm:mt-8 mt-6">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            {renderPostImage(displayPosts[2], 2)}
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">
              {displayPosts[2].message 
                ? displayPosts[2].message.split("\n")[0].substring(0, 60) + (displayPosts[2].message.length > 60 ? "..." : "") 
                : displayPosts[2].message}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {displayPosts[2].message 
                ? displayPosts[2].message.substring(0, 100) + (displayPosts[2].message.length > 100 ? "..." : "") 
                : displayPosts[2].description}
              <Link
                href={getFacebookPostUrl(displayPosts[2])}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:font-bold flex items-center text-sm gap-2 mt-2"
              >
                View on Facebook <ChevronRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Fourth Card */}
      <div className="col-span-1 sm:col-span-6 sm:mt-8 mt-6">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            {renderPostImage(displayPosts[3], 3)}
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">
              {displayPosts[3].message 
                ? displayPosts[3].message.split("\n")[0].substring(0, 60) + (displayPosts[3].message.length > 60 ? "..." : "") 
                : displayPosts[3].message}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {displayPosts[3].message 
                ? displayPosts[3].message.substring(0, 100) + (displayPosts[3].message.length > 100 ? "..." : "") 
                : displayPosts[3].description}
              <Link
                href={getFacebookPostUrl(displayPosts[3])}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:font-bold flex items-center text-sm gap-2 mt-2"
              >
                View on Facebook <ChevronRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Fifth Card */}
      <div className="col-span-1 sm:col-span-6 sm:mt-8 mt-6">
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-grow">
            {renderPostImage(displayPosts[4], 4)}
          </CardContent>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">
              {displayPosts[4].message 
                ? displayPosts[4].message.split("\n")[0].substring(0, 60) + (displayPosts[4].message.length > 60 ? "..." : "") 
                : displayPosts[4].message}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {displayPosts[4].message 
                ? displayPosts[4].message.substring(0, 100) + (displayPosts[4].message.length > 100 ? "..." : "") 
                : displayPosts[4].description}
              <Link
                href={getFacebookPostUrl(displayPosts[4])}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:font-bold flex items-center text-sm gap-2 mt-2"
              >
                View on Facebook <ChevronRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}