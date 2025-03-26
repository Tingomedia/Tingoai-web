import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import bg from "../../../assets/radio/Tingo 102.5 FM3.svg"
import SpinnerMini from "../../../utils/libs/SpinnerMini";


const RadioSongsUpload: React.FC = () => {
    const [query, setQuery] = useState("");
    const [songs, setSongs] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const YT_SEARCH_URL = import.meta.env.VITE_REACT_APP_YT_SEARCH_URL;
    const YT_DOWNLOAD_URL = import.meta.env.VITE_REACT_APP_YT_DOWNLOAD_URL;
    const YT_API_TOKEN = import.meta.env.VITE_REACT_APP_YT_API_TOKEN;
    // console.log(YT_API_TOKEN);
    

    const searchSongs = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${YT_SEARCH_URL}?q=${query}`,
                {
                    headers: {
                        Authorization: `Bearer ${YT_API_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log(response.data);
            setSongs(response.data.results);
            setLoading(false);
            toast.success("Songs fetched successfully!");
        } catch (error: any) {
            console.error("Error fetching songs:", error);
            const msg = error.message;
            toast.error(msg || "Error downloading song");
        } finally {
            setLoading(false);
        }
    };

    const downloadSong = async (url: string) => {
        try {
            const response = await axios.post(YT_DOWNLOAD_URL, {
                source: "youtube",
                url,
            });
            // console.log(response.data);
            const msg = response?.data?.message;
            toast.success(msg ? msg : "Error downloading");
        } catch (error: any) {
            console.error("Error downloading song:", error);
            const msg = error.message;
            toast.error(msg || "Error downloading song");
        }
    };

    return (
        <div className="w-full h-screen">
            <div className="w-full p-6 lg:w-3/5 mx-auto">
                <h1 className="text-2xl md:text-[3rem] font-bold text-dark-blue mb-4 text-center">Radio Songs Upload</h1>
                <div className="flex gap-3 mb-6">
                    <input
                        type="text"
                        className="w-full p-3 rounded-md bg-gray-800 text-white"
                        placeholder="Search for a song..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        className="bg-gray-800 border hover:bg-gray-700 px-4 py-2 rounded-md text-white"
                        onClick={searchSongs}
                        disabled={loading}
                    >
                        {loading ? <SpinnerMini /> : "Search"}
                    </button>
                </div>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {songs.map((song) => (
                    <div
                        key={song.id}
                        className="p-4 bg-gray-900 text-white rounded-lg border border-gray-700"
                    >
                        <img
                            src={song.thumbnail || bg}
                            alt={song.title}
                            className="w-full h-40 object-cover rounded-md mb-2"
                        />
                        <h3 className="text-lg font-semibold text-white">{song.title}</h3>
                        <p className="text-gray-400 text-sm">{song.channel}</p>
                        <p className="text-gray-400 text-sm">Duration: {song.duration}s</p>
                        <p className="text-gray-400 text-sm">Views: {song.views}</p>
                        <div className="flex gap-2 mt-3">
                            <Link
                                to={song.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-dark-blue border hover:bg-primary-200 px-4 py-2 rounded-md text-white w-full text-center"
                            >
                                Watch on YouTube
                            </Link>
                            <button
                                className="bg--dark-blue border hover:bg-primary-200 px-4 py-2 rounded-md text-white w-full"
                                onClick={() => downloadSong(song.url)}
                            >
                                Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default RadioSongsUpload;
