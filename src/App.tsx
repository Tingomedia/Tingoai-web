import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";
import { ScrollToTop } from "./utils/helpers/SmoothScroll";
import ProtectedRoute from "./components/common/ProtectedRoute";
import GptHomeV2 from "./components/gpt/v2/GptHome";
const Page404 = lazy(() => import("./pages/landingPage/Page404"));
const Login = lazy(() => import("./pages/auth/v2/Login"));
const GptPlusHome = lazy(() => import("./components/gpt/GptPlusHome"));
const RadioSongsUpload = lazy(
  () => import("./layouts/radio/general/RadioSongsUpload")
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<ProtectedRoute element={<GptHomeV2 />} />}>
          <Route path="" element={<GptHomeV2 />} />
          <Route path="plus" element={<GptPlusHome />} />
        </Route>

        {/* <Route path="/test" element={<GptHomeV2 />} /> */}
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
