// app/api/facebook/route.js
export async function GET() {
    const pageId = process.env.FB_PAGE_ID;
    const accessToken = process.env.FB_PAGE_ACCESS_TOKEN;
    
    try {
      
      const res = await fetch(
        `https://graph.facebook.com/v19.0/${pageId}/feed?fields=message,full_picture,created_time&access_token=${accessToken}`
      );
      
      if (!res.ok) {
        const errorData = await res.json();
        console.error("Facebook API Error:", errorData);
        return Response.json({ 
          error: true, 
          message: `Failed to fetch posts: ${res.status}`,
          details: errorData 
        }, { status: 500 });
      }
      
      const data = await res.json();
      return Response.json({ posts: data.data || [] });
    } catch (error) {
      console.error("Error fetching Facebook posts:", error);
      return Response.json({ 
        error: true, 
        message: error.message 
      }, { status: 500 });
    }
  }