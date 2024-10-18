import footStore from "./modules/footerStore";
import mainStore from "./modules/mainStore";

export default function useStore() {
  return  {
    main: mainStore(),
    footer: footStore()
  }
}