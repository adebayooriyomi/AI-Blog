
type RequestType = {
    "user_input": string
  }
  
  export const generateBlogPost = async (request: RequestType) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate-blog-post`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request)
    })
    const data = await response.json();
    const generatedContent = data.generated_content
  
    return generatedContent 
  };
  