"use client";

import { useEffect, useState } from "react";

import { resumeDrive } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

import { Button } from "./Button";

type DownloadResumeButtonProps = React.ComponentProps<typeof Button>;

export function DownloadResumeButton(props: DownloadResumeButtonProps) {
  const [isChecking, setIsChecking] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let mounted = true;
    const verify = async () => {
      try {
        setIsChecking(true);
        const response = await fetch(resumeDrive.downloadUrl, { method: "HEAD" });
        if (!mounted) return;
        setIsAvailable(response.ok);
        setMessage(response.ok ? "" : "Google Drive blocked the direct download. Use the fallback link.");
      } catch (error) {
        if (!mounted) return;
        setIsAvailable(false);
        setMessage("Google Drive blocked the direct download. Use the fallback link.");
      } finally {
        if (mounted) setIsChecking(false);
      }
    };

    verify();
    return () => {
      mounted = false;
    };
  }, []);

  const handleClick = () => {
    trackEvent("resume_download", { available: isAvailable });
    const url = isAvailable ? resumeDrive.downloadUrl : resumeDrive.viewUrl;
    const newWindow = window.open(url, "_blank", "noopener");
    if (!newWindow) {
      window.location.href = url;
    }
  };

  return (
    <div className="space-y-2">
      <Button
        {...props}
        aria-live="polite"
        aria-busy={isChecking}
        disabled={props.disabled || isChecking}
        onClick={handleClick}
      >
        {isChecking ? "Checking..." : "Download Resume"}
      </Button>
      {!isAvailable && !isChecking && message && (
        <p role="status" className="text-xs text-muted">
          {message}{" "}
          <a
            href={resumeDrive.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Open in new tab
          </a>
        </p>
      )}
    </div>
  );
}

