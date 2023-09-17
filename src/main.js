import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";

import Store from "./components/store/Store.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";

const app = createApp(App);

app.use(router);

app.component("base-button", BaseButton);
app.component("the-header", TheHeader);
app.component("store", Store);
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);
app.component("base-dialog", BaseDialog);

app.mount("#app");
