import json
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
            maxResults=max_results
        )
        
        # Execute the request
        response = request.execute()
        
        video_ids = [item['id']['videoId'] for item in response['items']]
        
        # Get video details
        video_details = self.get_video_details(video_ids)
        
        return video_details
    
    def get_video_details(self, video_ids):
        # Create a details request
        request = self.youtube.videos().list(
            part='snippet,contentDetails,statistics',
            id=','.join(video_ids)
        )
        
        # Execute the request
        response = request.execute()
        
        # Extract required details
        results = []
        for item in response['items']:
            title = item['snippet']['title']
            video_id = item['id']
            video_link = f"https://www.youtube.com/watch?v={video_id}"
            duration = self.parse_duration(item['contentDetails']['duration'])
            likes = int(item['statistics'].get('likeCount', 0))
            results.append({
                'title': title,
                'link': video_link,
                'length': duration,
                'likes': likes
            })
        
        return results
    
    def parse_duration(self, duration):
        # This method converts ISO 8601 duration format to "minutes:seconds"
        import isodate
        parsed_duration = isodate.parse_duration(duration)
        total_seconds = int(parsed_duration.total_seconds())
        minutes, seconds = divmod(total_seconds, 60)
        return f"{minutes}:{seconds:02}"