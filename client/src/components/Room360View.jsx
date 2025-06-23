import { useEffect, useRef } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";
import "@photo-sphere-viewer/core/index.css";

export default function Room360View({ room }) {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = new Viewer({
      container: viewerRef.current,
      panorama: room,
      plugins: [
        [
          AutorotatePlugin,
          {
            autostartDelay: 1000,
            autorotateSpeed: "0.5rpm",
          },
        ],
      ],
      navbar: ["zoom", "fullscreen", "autorotate"],
      defaultZoomLvl: 0,
      mousewheel: true,
    });

    return () => {
      viewer.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={viewerRef}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
      }}
    />
  );
}
