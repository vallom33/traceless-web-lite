import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the static TraceLess Web site
    window.location.href = "/traceless/index.html";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a1a0a]">
      <div className="text-center">
        <p className="text-[#e8e4d9]">Redirection vers TraceLess Web...</p>
        <p className="mt-2">
          <a href="/traceless/index.html" className="text-[#4ade80] underline">
            Cliquer ici si la redirection ne fonctionne pas
          </a>
        </p>
      </div>
    </div>
  );
};

export default Index;
