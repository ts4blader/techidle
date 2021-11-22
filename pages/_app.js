import "../scss/main.scss";
import { Store } from "../store/Store";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Store>
  );
}

export default MyApp;
