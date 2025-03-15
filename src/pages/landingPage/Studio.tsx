import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import logoM from "/tingo_ai_logo2.png";
import { MdLibraryMusic } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import MainStudio from "../../components/landing/studio/MainStudio";
import LeftSideBar from "../../components/landing/studio/LeftSideBar";
import { Link } from "react-router-dom";
import AudioControlC from "../../components/landing/studio/rightside/AudioControl";
import StudioHeader from "../../components/landing/studio/header/StudioHeader";

const API_URL =import.meta.env.VITE_REACT_APP_HF_API_URL;
const HF_TOKEN = import.meta.env.VITE_REACT_APP_HF_TOKEN;
export default function Studio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [trackLength, setTrackLength] = useState(15);

  const suggestions = [
    "Create a lo-fi hip-hop beat, chilled and dreamy, incorporating vinyl crackles and soft piano chords",
    "Create a high-energy hip-hop rap instrumental with a powerful bassline and hard-hitting 808s. The beat should feature a punchy kick drum, crisp snare hits, and fast-paced hi-hats with dynamic rolls for a modern trap feel. Layer the track with aggressive synth leads, dark atmospheric pads, and occasional vocal chops for added intensity. Include a catchy, loopable melody to maintain energy throughout, with dramatic transitions and drops to amplify impact. Keep the tempo around 90 BPM to ensure a hype, head-nodding vibe perfect for rap verses.",
    "Create an upbeat Nigerian Afrobeat instrumental (110–120 BPM) blending traditional and modern elements with joyful rhythms and an infectious party groove.",
    // "Compose a high-energy jazz piece in C major, centered on the II-V-I chord progression, with dynamic improvisations and vibrant rhythms.",
  ];

  const generateMusic = async () => {
    if (!prompt) {
      alert("Please provide a prompt!");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(
        API_URL,
        { inputs: `${prompt}, duration=${trackLength}` },
        {
          headers: {
            Authorization: `Bearer ${HF_TOKEN}`,
            "Content-Type": "application/json",
          },
          responseType: "arraybuffer",
        }
      );
      // Create an audio URL from the response
      const blob = new Blob([response.data], { type: "audio/mpeg" });
      setAudioUrl(URL.createObjectURL(blob));
      setIsRightMenuOpen(true);
    } catch (error) {
      console.error("Error generating music:", error);
      alert("Failed to generate music. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#f3f3f3]">
      <div className=" flex h-auto min-h-[900px] md:min-h-screen bg-[#f0efea] pt-20 relative">
        <StudioHeader />
        {/* Left Content */}
        <LeftSideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* Main content */}
        <MainStudio
          generateMusic={generateMusic}
          prompt={prompt}
          suggestions={suggestions}
          trackLength={trackLength}
          setPrompt={setPrompt}
          setTrackLength={setTrackLength}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          audioUrl={audioUrl}
        />

        {/* Right Sidebar */}
        <AudioControlC
          audioUrl={audioUrl}
          filename={prompt}
          isRightMenuOpen={isRightMenuOpen}
          setIsRightMenuOpen={setIsRightMenuOpen}
        />

        {/* Mobile Menu Header */}
        <div className="lg:hidden fixed z-30 top-0 w-full bg-fade-white flex justify-between px-[5%] items-center h-[80px]">
          {/* Logo */}
          <Link to="/staging">
            <img src={logoM} className="" alt="logoM" />
          </Link>

          <div className="flex gap-5">
            <MdAccountCircle className="h-10 w-10" />
            {isMenuOpen ? (
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-10 w-10 z-50" />
              </button>
            ) : (
              <button onClick={() => setIsMenuOpen(true)}>
                <MdLibraryMusic className="h-10 w-10" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
