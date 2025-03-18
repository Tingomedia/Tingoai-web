import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { ScrollToTop } from "./utils/helpers/SmoothScroll";
import GptHome from "./components/gpt/GptHome";
import NewGridHome from "./components/landing/new/NewGridHome";
import { RadioProvider } from "./contexts/RadioContext";
const Home = lazy(() => import("./pages/landingPage/Home"));
const Page404 = lazy(() => import("./pages/landingPage/Page404"));
const Product = lazy(() => import("./pages/landingPage/old_website/Products"));
const Contact = lazy(() => import("./pages/landingPage/old_website/Contact"));
const About = lazy(() => import("./pages/landingPage/old_website/About"));
const GPTLayout = lazy(() => import("./layouts/gpt/GPTLayout"));
const TingoaiLayout = lazy(() => import("./components/tingoai/TingoaiLayout"));
const Signin = lazy(() => import("./pages/auth/Signin"));
const GptPlusHome = lazy(() => import("./components/gpt/GptPlusHome"));
const OtpCode = lazy(() => import("./pages/auth/OtpCode"));
const OtpMail = lazy(() => import("./pages/auth/OtpMail"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const Signup = lazy(() => import("./pages/auth/Signup"));
const TingoaiProducts = lazy(
  () => import("./components/tingoai/TingoaiProducts")
);
const RadioLayout = lazy(() => import("./layouts/radio/RadioLayout"));
const RadioHome = lazy(() => import("./pages/old_radio/radio/RadioHome"));
const Playlist = lazy(() => import("./pages/old_radio/radio/Playlist"));
const NewsWeather = lazy(() => import("./pages/old_radio/radio/News&weather"));
const Reachus = lazy(() => import("./pages/old_radio/radio/Reachus"));

function App() {
  return (
    <>
    <RadioProvider>
      <ScrollToTop />
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/tingoai-products" element={<NewGridHome/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/otp-code" element={<OtpCode />} />
        <Route path="/otp-mail" element={<OtpMail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upgrade" element={<GptPlusHome />} />

        {/*=========== TingoGPT Routes ================*/}
        <Route path="/tingogpt" element={<GPTLayout />}>
          <Route path="" element={<GptHome />} />
        </Route>

        {/*============== TingoAI Routes =============*/}
        <Route path="/tingoai" element={<TingoaiLayout />}>
          <Route path="" element={<TingoaiProducts />} />
        </Route>

        {/*============== Tingo Radio =============*/}
        <Route path="/radio" element={<RadioLayout />}>
          <Route path="" element={<RadioHome />} />
          <Route path="playlists" element={<Playlist />} />
          <Route path="news" element={<NewsWeather />} />
          <Route path="reachus" element={<Reachus />} />
        </Route>
        {/* 404 Page */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      </RadioProvider>
    </>
  );
}

export default App;
