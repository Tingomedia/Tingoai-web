import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppProvider } from "./contexts/AppContext.tsx";
import { BrowserRouter } from "react-router-dom";
import CustomLoader from "./utils/libs/CustomLoader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<CustomLoader />}>
      <BrowserRouter>
        <AppProvider>
            <App />
        </AppProvider>
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
