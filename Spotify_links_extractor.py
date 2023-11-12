import re

def add_comma_and_space_after_every_sentence(playlist):
    """Adds a comma and an empty space after every sentence in a playlist.

    Args:
      playlist: A string containing a list of album URLs.

    Returns:
      A string containing a list of album URLs, with a comma and an empty space
      after every sentence.
    """

    album_urls = playlist.split("\n")
    comma_and_space_separated_playlist = []
    for album_url in album_urls:
        words = album_url.strip().split(" ")
        comma_and_space_separated_album_url = ", ".join(words[:-1]) + " " + words[-1]
        comma_and_space_separated_playlist.append(comma_and_space_separated_album_url)

    return "\n".join(comma_and_space_separated_playlist)

# Example usage:

playlist = """PASTE SPOTIFY LINKS HERE"""

comma_and_space_separated_playlist = add_comma_and_space_after_every_sentence(playlist)

# Find all the matches for the albums
matches = re.findall(r"https://open.spotify.com/album/.{22}", comma_and_space_separated_playlist)

print(matches)
