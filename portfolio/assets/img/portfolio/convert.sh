ffmpeg -i aoc-vis.gif -movflags faststart -pix_fmt yuv420p -vcodec av1 -vf scale=trunc(iw/2)*2:trunc(ih/2)*2 aoc-vis.mp4
ffmpeg -i game-of-life.gif -movflags faststart -pix_fmt yuv420p -vcodec av1 -vf scale=trunc(iw/2)*2:trunc(ih/2)*2 game-of-life.mp4
ffmpeg -i hangman.gif -movflags faststart -pix_fmt yuv420p -vcodec av1 -vf scale=trunc(iw/2)*2:trunc(ih/2)*2 hangman.mp4
ffmpeg -i pong.gif -movflags faststart -pix_fmt yuv420p -vcodec av1 -vf scale=trunc(iw/2)*2:trunc(ih/2)*2 pong.mp4
ffmpeg -i simple-ecs.gif -movflags faststart -pix_fmt yuv420p -vcodec av1 -vf scale=trunc(iw/2)*2:trunc(ih/2)*2 simple-ecs.mp4
