import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";
import { ScrollToTop } from "./utils/helpers/SmoothScroll";
import NewGridHome from "./components/landing/new/NewGridHome";
import ProtectedRoute from "./components/common/ProtectedRoute";
import GptHomeV2 from "./components/gpt/v2/GptHome";
import GptLandingPage from "./components/gpt/v2/GptLandingPage";
const Home = lazy(() => import("./pages/landingPage/Home"));
const Page404 = lazy(() => import("./pages/landingPage/Page404"));
const Product = lazy(() => import("./pages/landingPage/old_website/Products"));
const Contact = lazy(() => import("./pages/landingPage/old_website/Contact"));
const About = lazy(() => import("./pages/landingPage/old_website/About"));
const TingoaiLayout = lazy(() => import("./components/tingoai/TingoaiLayout"));
const Login = lazy(() => import("./pages/auth/Login"));
const GptPlusHome = lazy(() => import("./components/gpt/GptPlusHome"));
const OtpCode = lazy(() => import("./pages/auth/OtpCode"));
const OtpMail = lazy(() => import("./pages/auth/OtpMail"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const TingoaiProducts = lazy(
  () => import("./components/tingoai/TingoaiProducts")
);
const RadioLayout = lazy(() => import("./layouts/radio/RadioLayout"));
const RadioHome = lazy(() => import("./pages/old_radio/radio/RadioHome"));
const Playlist = lazy(() => import("./pages/old_radio/radio/Playlist"));
const NewsWeather = lazy(() => import("./pages/old_radio/radio/News&weather"));
const Reachus = lazy(() => import("./pages/old_radio/radio/Reachus"));
const RadioSongsUpload = lazy(
  () => import("./layouts/radio/general/RadioSongsUpload")
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/tingoai-products" element={<NewGridHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/otp-code" element={<OtpCode />} />
        <Route path="/otp-mail" element={<OtpMail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<Navigate to="/login" replace />} />
        <Route path="/upgrade" element={<GptPlusHome />} />

        {/*=========== TingoGPT Routes ================*/}
        <Route
          path="/tingogpt"
          element={<ProtectedRoute element={<GptHomeV2 />} />}
        >
          <Route path="" element={<GptHomeV2 />} />
          <Route path="plus" element={<GptPlusHome />} />
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

        <Route path="/test" element={<GptLandingPage/>} />
        <Route path="/radio-upload" element={<RadioSongsUpload />} />
        {/* 404 Page */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#FAFAFA",
            color: "#313131",
          },
        }}
      />
    </>
  );
}

export default App;
