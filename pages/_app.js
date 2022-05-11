import "../styles/globals.css";
import store from "../store/store";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Toaster />

        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
