import "../scss/main.scss";
import { Store } from "../store/Store";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
