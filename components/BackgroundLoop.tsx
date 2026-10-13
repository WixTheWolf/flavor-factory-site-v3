import { AppImage } from "@/components/ui/AppImage";
import { LoopVideo } from "@/components/LoopVideo";

type Props = {
  /** Clip prefix, e.g. /video/request-header (see lib/media-prefs videoSources). */
  video: string;
  poster: string;
  className?: string;
  videoClassName?: string;
  playingClassName?: string;
  /** Only play when this media query matches, e.g. "(min-width: 700px)" to keep phones on the poster. */
  media?: string;
};

/**
 * Decorative looping background. Shows the poster first and swaps in the clip
 * after mount, unless the visitor prefers reduced motion, has Data Saver on, is on a slow
 * connection, or the optional media query does not match.
 */
export function BackgroundLoop({ video, poster, className, videoClassName, playingClassName, media }: Props) {
  return (
    <div className={className} aria-hidden="true">
      <AppImage src={poster} alt="" sizes="100vw" priority />
      <LoopVideo video={video} className={videoClassName} playingClassName={playingClassName} media={media} />
    </div>
  );
}
