"use client";

import Image from "next/image";
import {useState} from "react";
import {SITE} from "@/lib/constants";

const ProfileImage = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="border-4 border-white rounded-full bg-muted overflow-hidden">
      <Image
        src="/portfolio/images/profil.webp"
        alt={`Portrait of ${SITE.name}`}
        width={145}
        height={145}
        className={`rounded-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ProfileImage;
