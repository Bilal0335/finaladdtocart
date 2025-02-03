"use client";
import { Provider } from "react-redux";
import { store } from "./(addtocartfun)/Redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";

function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  // let persistore = persistStore(store);
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistore}>{children}</PersistGate> */}
      {children}
    </Provider>
  );
}

export default Providers;
