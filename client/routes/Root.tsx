import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Root() {
  const hasAnimatedRef = useRef(false);
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    if (!hasAnimatedRef.current) {
      setAnimateLogo(true);
      const id = window.setTimeout(() => setAnimateLogo(false), 2000);
      hasAnimatedRef.current = true;
      return () => window.clearTimeout(id);
    }
  }, []);

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundColor: "#000",
      }}
    >
      <div
        className="flex min-h-screen items-center justify-center"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
        }}
      >
        <main className="flex flex-col items-center text-center">
          <Logo animate={animateLogo} />

          <div className="mt-3">
            {/* subtle decorative separator between logo and content */}
            <span className="inline-block w-14 h-[1px] bg-white/10 mx-auto" aria-hidden="true" />
          </div>

          <Outlet />
        </main>
      </div>
    </div>
  );
}

function Logo({ animate }: { animate: boolean }) {
  // using the attached asset URL (provided by user)
  const src = "https://cdn.builder.io/api/v1/image/assets%2Fadca80ee8fc74b4799929f9b24a54891%2F74162de4fcb844988e24c71625b12b2b?format=webp&width=1600";

  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="w-full px-6">
      {imgOk ? (
        <img
          src={src}
          alt="NEGRO logo"
          width={1600}
          height={600}
          loading="eager"
          decoding="async"
          onError={() => setImgOk(false)}
          className={
            "mx-auto block h-auto select-none object-contain" +
            " " +
            "max-w-[82vw] sm:max-w-[64vw] md:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px]" +
            " " +
            (animate ? "animate-slow-fade" : "opacity-100")
          }
          style={{
            imageRendering: "-webkit-optimize-contrast" as any,
            WebkitFontSmoothing: "antialiased",
          }}
        />
      ) : (
        <h1 className={(animate ? "animate-slow-fade " : "") + "text-white text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"}>
          NEGRO
        </h1>
      )}
    </div>
  );
}
