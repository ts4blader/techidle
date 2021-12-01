import "../scss/main.scss";
import { Store } from "../store/Store";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      {/* Loader */}
      <Loader />
      {/* Layout  */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Store>
  );
}

export default MyApp;
