import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";
import { ScrollToTop } from "./utils/helpers/SmoothScroll";
import NewGridHome from "./components/landing/new/NewGridHome";
import GptTeenWaitList from "./components/gpt/v2/GptTeenWaitlist";
import GptLandingPage from "./components/gpt/v2/GptLandingPage"; // GPTLandingPage
const Home = lazy(() => import("./pages/landingPage/Home"));
const Page404 = lazy(() => import("./pages/landingPage/Page404"));
const Product = lazy(() => import("./pages/landingPage/old_website/Products"));
const Contact = lazy(() => import("./pages/landingPage/old_website/Contact"));
const About = lazy(() => import("./pages/landingPage/old_website/About"));
const TingoaiLayout = lazy(() => import("./components/tingoai/TingoaiLayout"));
const Login = lazy(() => import("./pages/auth/v2/Login"));
const GptPlusHome = lazy(() => import("./components/gpt/GptPlusHome"));
const OtpCode = lazy(() => import("./pages/auth/OtpCode"));
const OtpMail = lazy(() => import("./pages/auth/OtpMail"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const TingoaiProducts = lazy(
  () => import("./components/tingoai/TingoaiProducts")
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
        <Route path="/gpt-home" element={<GptLandingPage />} />
        <Route path="/gpt-teen-waitlist" element={<GptTeenWaitList />} />
        <Route path="/gpt-mobile-waitlist" element={<GptTeenWaitList App />} />

        {/*============== TingoAI Routes =============*/}
        <Route path="/tingoai" element={<TingoaiLayout />}>
          <Route path="" element={<TingoaiProducts />} />
        </Route>

        {/* <Route path="/test" element={<GptHomeV2 />} /> */}
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
