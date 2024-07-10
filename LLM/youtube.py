from googleapiclient.discovery import build
import os
class YouTubeSearcher:
    def __init__(self):
        self.api_key = os.getenv('YOUTUBE_API_KEY')
        self.youtube = build('youtube', 'v3', developerKey=self.api_key)
    
    def search_videos(self, search_keyword, max_results=5):
        # Create a search request
        request = self.youtube.search().list(
            q=search_keyword,
            part='snippet',
            type='video',
            maxResults=max_results  # You can adjust this to get more results
        )
        
        # Execute the request
        response = request.execute()
        
        # Extract titles and video links
        results = []
        for item in response['items']:
            title = item['snippet']['title']
            video_id = item['id']['videoId']
            video_link = f"https://www.youtube.com/watch?v={video_id}"
            results.append((title, video_link))
        
        return results
